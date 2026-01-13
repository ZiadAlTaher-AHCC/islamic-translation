import { Component, OnInit, inject, effect } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardGridContainerComponent } from '../components/card-grid-container/card-grid-container.component';
import { CardItem } from '../models/card-item.model';
import { TranslationService } from '../core/services/translation.service';
import { LibraryDataService } from '../core/services/library-data.service';
import { Book } from '../models/book.model';

@Component({
    selector: 'app-library',
    standalone: true,
    imports: [CommonModule, CardGridContainerComponent],
    templateUrl: './library.component.html',
    styleUrl: './library.component.css'
})
export class LibraryComponent implements OnInit {
    private route = inject(ActivatedRoute);
    public translationService = inject(TranslationService);
    private libraryService = inject(LibraryDataService);

    // Filtered items based on categoryId
    filteredItems: CardItem[] = [];

    // Static page header key
    pageHeaderKey: string = 'PAGES.LIBRARY';

    // Dynamic sub-header key for category
    pageSubHeaderKey?: string;

    private allBooks: Book[] = [];
    private currentCategoryId?: number;

    constructor() {
        // Effect to re-map items when language changes
        effect(() => {
            const lang = this.translationService.currentLang();
            this.applyFilter(this.currentCategoryId);
        });
    }

    ngOnInit(): void {
        // Load all books
        this.libraryService.getBooks().subscribe(books => {
            this.allBooks = books;

            this.route.queryParams.subscribe(params => {
                const categoryId = params['categoryId'];
                this.currentCategoryId = categoryId ? +categoryId : undefined;
                this.applyFilter(this.currentCategoryId);
            });
        });
    }

    private applyFilter(categoryId?: number) {
        let booksToShow = this.allBooks;

        if (categoryId) {
            booksToShow = this.allBooks.filter(b => b.categoryId === categoryId);
            // Use the service helper or local map for header key if needed, or just let card logic handle it
            // For the sub-header key, we need a key string
            this.pageSubHeaderKey = this.getCategoryNameKey(categoryId);
        } else {
            this.pageSubHeaderKey = undefined;
        }

        this.filteredItems = booksToShow.map(b =>
            this.libraryService.mapToCard(b, this.translationService.currentLang())
        );
    }

    /**
     * Get the translation key for category name
     */
    private getCategoryNameKey(categoryId: number): string | undefined {
        const categoryKeys: { [key: number]: string } = {
            1: 'LIBRARY.CATEGORIES.QURAN_BOOKS',
            2: 'LIBRARY.CATEGORIES.HADITH_BOOKS',
            3: 'LIBRARY.CATEGORIES.ISLAMIC_HISTORY',
            4: 'LIBRARY.CATEGORIES.ISLAMIC_JURISPRUDENCE'
        };

        return categoryKeys[categoryId];
    }
}
