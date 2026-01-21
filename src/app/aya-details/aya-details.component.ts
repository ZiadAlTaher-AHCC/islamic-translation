import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { QuranDataService } from '../core/services/quran-data.service';
import { TranslationService } from '../core/services/translation.service';
import { Ayah, Surah, Language, Translation } from '../models/quran.models';

interface TranslationGroup {
    language: Language;
    translations: Translation[];
}

@Component({
    selector: 'app-aya-details',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './aya-details.component.html',
    styleUrls: ['./aya-details.component.css']
})
export class AyaDetailsComponent implements OnInit {
    private quranService = inject(QuranDataService);
    public translationService = inject(TranslationService);
    private route = inject(ActivatedRoute);
    private router = inject(Router);

    // State signals
    aya = signal<Ayah | undefined>(undefined);
    surah = signal<Surah | undefined>(undefined);
    translationGroups = signal<TranslationGroup[]>([]);
    isLoading = signal<boolean>(true);
    errorMessage = signal<string>('');

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            const ayaIdParam = params['aya-id'];

            console.log(ayaIdParam);
            // Validate aya-id parameter
            if (!ayaIdParam) {
                this.errorMessage.set(
                    this.translationService.translations()['TRANSLATIONS']?.['AYA_DETAILS']?.['INVALID_AYA'] || 'Invalid Aya ID'
                );
                this.isLoading.set(false);
                return;
            }

            const ayaId = Number(ayaIdParam);

            if (isNaN(ayaId) || ayaId <= 0) {
                this.errorMessage.set(
                    this.translationService.translations()['TRANSLATIONS']?.['AYA_DETAILS']?.['INVALID_AYA'] || 'Invalid Aya ID'
                );
                this.isLoading.set(false);
                return;
            }

            this.loadAyaDetails(ayaId);
        });
    }

    loadAyaDetails(ayaId: number): void {
        this.isLoading.set(true);
        this.errorMessage.set('');

        // Get Aya
        const ayaData = this.quranService.getAyaById(ayaId);

        if (!ayaData) {
            this.errorMessage.set(
                this.translationService.translations()['TRANSLATIONS']?.['AYA_DETAILS']?.['AYA_NOT_FOUND'] || 'Aya not found'
            );
            this.isLoading.set(false);
            return;
        }

        this.aya.set(ayaData);

        // Get Surah
        const surahData = this.quranService.getSurahById(ayaData.suraId);
        this.surah.set(surahData);

        // Get all translations grouped by language
        const translationsData = this.quranService.getAllTranslationsByAyaId(ayaId);
        this.translationGroups.set(translationsData);

        this.isLoading.set(false);
    }

    getPageTitle(): string {
        const s = this.surah();
        const a = this.aya();

        if (!s || !a) return '';

        const surahName = s.name;

        return `${surahName} - ${a.ayaNumber}`;
    }

    getLanguageName(language: Language): string {
        // Return localized language name if available, otherwise use native name
        const langKey = language.id.toString();
        const localized = this.translationService.translations()['LANGUAGES']?.[langKey];
        return localized || language.name;
    }
}
