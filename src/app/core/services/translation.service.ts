import { Injectable, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export type Lang = 'en' | 'ar';
export type Direction = 'ltr' | 'rtl';

@Injectable({
    providedIn: 'root'
})
export class TranslationService {
    private http = inject(HttpClient);
    private platformId = inject(PLATFORM_ID);

    // State
    private currentLangSignal = signal<Lang>('en');
    readonly currentLang = this.currentLangSignal.asReadonly();

    readonly direction = computed<Direction>(() =>
        this.currentLangSignal() === 'ar' ? 'rtl' : 'ltr'
    );

    private translationsSignal = signal<any>({});
    readonly translations = this.translationsSignal.asReadonly();

    constructor() {
        this.initializeLang();
    }

    private initializeLang() {
        if (isPlatformBrowser(this.platformId)) {
            const savedLang = localStorage.getItem('lang') as Lang;
            if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
                this.setLanguage(savedLang);
            } else {
                this.setLanguage('en');
            }
        } else {
            this.setLanguage('en'); // Default for SSR
        }
    }

    async setLanguage(lang: Lang) {
        // 1. Update State
        this.currentLangSignal.set(lang);

        // 2. Persist
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('lang', lang);
            document.documentElement.lang = lang;
            document.documentElement.dir = this.direction();
        }

        // 3. Load Translations
        try {
            const data = await firstValueFrom(this.http.get(`assets/languages/${lang}.json`));
            this.translationsSignal.set(data);
        } catch (err) {
            console.error(`Failed to load translations for ${lang}`, err);
        }
    }

    toggleLanguage() {
        const newLang = this.currentLang() === 'en' ? 'ar' : 'en';
        this.setLanguage(newLang);
    }
}
