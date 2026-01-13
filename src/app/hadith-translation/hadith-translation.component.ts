import { Component, OnInit, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HadithDataService } from '../core/services/hadith-data.service';
import { TranslationService } from '../core/services/translation.service';
import { HadithCollection, HadithBook, HadithChapter, Hadith, Language } from '../models/hadith.models';

@Component({
    selector: 'app-hadith-translation',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './hadith-translation.component.html',
    styleUrls: ['./hadith-translation.component.css']
})
export class HadithTranslationComponent implements OnInit {
    private hadithDataService = inject(HadithDataService);
    public translationService = inject(TranslationService);

    // Data Lists
    collections: HadithCollection[] = [];
    books: HadithBook[] = [];
    chapters: HadithChapter[] = [];
    languages: Language[] = [];
    hadiths: Hadith[] = [];

    // Selections
    selectedCollection: HadithCollection | null = null;
    selectedBook: HadithBook | null = null;
    selectedChapter: HadithChapter | null = null;
    selectedLanguage: Language | null = null;

    isLoading = false;

    ngOnInit(): void {
        this.loadInitialData();
    }

    private loadInitialData() {
        this.isLoading = true;

        this.collections = this.hadithDataService.getCollections();
        this.languages = this.hadithDataService.getLanguages();

        // Auto-select defaults
        if (this.collections.length > 0) {
            this.selectCollection(this.collections[0]);
        }

        if (this.languages.length > 0) {
            this.selectLanguage(this.languages[0]);
        }

        this.isLoading = false;
    }

    selectCollection(collection: HadithCollection) {
        this.selectedCollection = collection;
        this.selectedBook = null;
        this.selectedChapter = null;
        this.books = this.hadithDataService.getBooks(collection.id);
        this.chapters = [];
        this.hadiths = [];

        if (this.books.length > 0) {
            this.selectBook(this.books[0]);
        }
    }

    selectBook(book: HadithBook) {
        this.selectedBook = book;
        this.selectedChapter = null;
        this.chapters = this.hadithDataService.getChapters(book.id);
        this.hadiths = [];

        if (this.chapters.length > 0) {
            this.selectChapter(this.chapters[0]);
        }
    }

    selectChapter(chapter: HadithChapter) {
        this.selectedChapter = chapter;
        this.loadHadiths();
    }

    selectLanguage(language: Language) {
        this.selectedLanguage = language;
    }

    loadHadiths() {
        if (this.selectedChapter) {
            this.hadiths = this.hadithDataService.getHadiths(this.selectedChapter.id);
        }
    }

    getTranslationText(hadithId: number): string | undefined {
        if (!this.selectedLanguage) return undefined;
        const translation = this.hadithDataService.getTranslation(hadithId, this.selectedLanguage.id);
        return translation?.text;
    }

    // TrackBy functions
    trackById(index: number, item: any): number {
        return item.id;
    }
}
