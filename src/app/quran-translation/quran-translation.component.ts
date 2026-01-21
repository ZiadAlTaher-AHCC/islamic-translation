import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuranDataService } from '../core/services/quran-data.service';
import { TranslationService } from '../core/services/translation.service';
import { Surah, Ayah, Language, Translation } from '../models/quran.models';

@Component({
    selector: 'app-quran-translation',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './quran-translation.component.html',
    styleUrls: ['./quran-translation.component.css']
})
export class QuranTranslationComponent implements OnInit {

    // Data lists
    surahs: Surah[] = [];
    ayahs: Ayah[] = [];
    languages: Language[] = [];
    translations: Translation[] = [];

    // Selected items
    selectedSurah: Surah | null = null;
    selectedAyah: Ayah | null = null;
    selectedLanguage: Language | null = null;

    // Loading state (for future API integration)
    isLoading = false;

    constructor(private quranDataService: QuranDataService, public translationService: TranslationService) { }

    ngOnInit(): void {
        this.loadInitialData();
    }

    /**
     * Load initial data and set default selections
     */
    private loadInitialData(): void {
        this.isLoading = true;

        // Load all Surahs
        this.surahs = this.quranDataService.getSurahs();

        // Load all Languages
        this.languages = this.quranDataService.getLanguages();

        // Auto-select first Surah
        if (this.surahs.length > 0) {
            this.selectSurah(this.surahs[0]);
        }

        // Auto-select first Language
        if (this.languages.length > 0) {
            this.selectLanguage(this.languages[0]);
        }

        this.isLoading = false;
    }

    /**
     * Handle Surah selection
     * @param surah Selected Surah
     */
    selectSurah(surah: Surah): void {
        this.selectedSurah = surah;

        // Load Ayahs for selected Surah
        this.ayahs = this.quranDataService.getAyahsBySurah(surah.id);

        // Auto-select first Ayah
        if (this.ayahs.length > 0) {
            this.selectAyah(this.ayahs[0]);
        } else {
            this.selectedAyah = null;
            this.translations = [];
        }
    }

    /**
     * Handle Ayah selection
     * @param ayah Selected Ayah
     */
    selectAyah(ayah: Ayah): void {
        this.selectedAyah = ayah;
        this.loadTranslations();
    }

    /**
     * Handle Language selection
     * @param language Selected Language
     */
    selectLanguage(language: Language): void {
        this.selectedLanguage = language;
        this.loadTranslations();
    }

    /**
     * Load translations based on selected Ayah and Language
     */
    private loadTranslations(): void {
        if (this.selectedAyah && this.selectedLanguage) {
            this.translations = this.quranDataService.getTranslations(
                this.selectedAyah.id,
                this.selectedLanguage.name
            );
        } else {
            this.translations = [];
        }
    }

    /**
     * TrackBy function for Surah list
     */
    trackBySurahId(index: number, surah: Surah): number {
        return surah.id;
    }

    /**
     * TrackBy function for Ayah list
     */
    trackByAyahId(index: number, ayah: Ayah): number {
        return ayah.id;
    }

    /**
     * TrackBy function for Language list
     */
    trackByLanguageId(index: number, language: Language): number {
        return language.id;
    }

    /**
     * TrackBy function for Translation list
     */
    trackByTranslationId(index: number, translation: Translation): number {
        return translation.id;
    }

    /**
     * Keyboard navigation handlers
     */
    onSurahKeydown(event: KeyboardEvent, surah: Surah): void {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.selectSurah(surah);
        }
    }

    onAyahKeydown(event: KeyboardEvent, ayah: Ayah): void {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.selectAyah(ayah);
        }
    }

    onLanguageKeydown(event: KeyboardEvent, language: Language): void {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.selectLanguage(language);
        }
    }
    truncateText(text: string, maxLength = 50): string {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    }
}
