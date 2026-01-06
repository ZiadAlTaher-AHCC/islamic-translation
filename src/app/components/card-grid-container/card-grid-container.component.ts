import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardItem } from '../../models/card-item.model';
import { TranslationService } from '../../core/services/translation.service';

@Component({
    selector: 'app-card-grid-container',
    standalone: true,
    imports: [CommonModule, CardComponent],
    templateUrl: './card-grid-container.component.html',
    styleUrl: './card-grid-container.component.css'
})
export class CardGridContainerComponent implements OnChanges {
    translationService = inject(TranslationService);

    /** Header/title translation key for the grid */
    @Input({ required: true }) headerKey: string = '';

    /** Optional sub-header translation key (for categories, etc.) */
    @Input() subHeaderKey?: string;

    /** Array of card items to display */
    @Input({ required: true }) items: CardItem[] = [];

    /** Items per page: 3 rows × 4 cards = 12 items */
    readonly itemsPerPage = 12;

    /** Current page number (1-indexed) */
    currentPage = 1;

    /** Total number of pages */
    totalPages = 1;

    /** Items to display on current page */
    currentPageItems: CardItem[] = [];

    /** Page numbers for pagination controls */
    pageNumbers: number[] = [];

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['items']) {
            this.calculatePagination();
        }
    }

    /**
     * Calculate pagination data based on items array
     */
    private calculatePagination(): void {
        // Calculate total pages
        this.totalPages = Math.ceil(this.items.length / this.itemsPerPage) || 1;

        // Reset to page 1 if current page exceeds total pages
        if (this.currentPage > this.totalPages) {
            this.currentPage = 1;
        }

        // Update current page items
        this.updateCurrentPageItems();

        // Generate page numbers array
        this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }

    /**
     * Update items for current page
     */
    private updateCurrentPageItems(): void {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        this.currentPageItems = this.items.slice(startIndex, endIndex);
    }

    /**
     * Navigate to previous page
     */
    previousPage(): void {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.updateCurrentPageItems();
        }
    }

    /**
     * Navigate to next page
     */
    nextPage(): void {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
            this.updateCurrentPageItems();
        }
    }

    /**
     * Navigate to specific page
     */
    goToPage(page: number): void {
        if (page >= 1 && page <= this.totalPages) {
            this.currentPage = page;
            this.updateCurrentPageItems();
        }
    }

    /**
     * Check if we can go to previous page
     */
    canGoPrevious(): boolean {
        return this.currentPage > 1;
    }

    /**
     * Check if we can go to next page
     */
    canGoNext(): boolean {
        return this.currentPage < this.totalPages;
    }
}
