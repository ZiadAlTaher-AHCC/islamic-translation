import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LibraryDataService } from '../../core/services/library-data.service';
import { TranslationService } from '../../core/services/translation.service';
import { Book } from '../../models/book.model';

@Component({
    selector: 'app-book-details',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
    private libraryService = inject(LibraryDataService);
    public translationService = inject(TranslationService);
    private route = inject(ActivatedRoute);

    book = signal<Book | undefined>(undefined);
    catName = signal<string>('');

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            if (id) {
                this.loadBook(Number(id));
            }
        });
    }

    loadBook(id: number) {
        this.libraryService.getBookById(id).subscribe(b => {
            if (b) {
                this.book.set(b);
                this.libraryService.incrementViewCount(id);

                // Resolve category name manually or via service helper if we want strict consistency
                // For now, simpler to use the mapping helper from service but we need to pass lang
                // Or just let the template handle simple display if we mapped it, but model has ID.
                // Let's use the local helper method for display consistency in component
                this.updateCategoryName(b);
            }
        });
    }

    // Simple helper to restart download count
    onDownload() {
        const b = this.book();
        if (b && b.downloadLink) {
            this.libraryService.incrementDownloadCount(b.id);

            window.open(b.downloadLink, '_blank');

        }
    }

    private updateCategoryName(book: Book) {
        // We can use a small effect or just a getter in template. 
        // But to be consistent with architecture, let's allow template to handle it via a pipe or just logic
        // For this static data, I will rely on the service to map it or just use the ID map in template/TS
        // Let's keep it simple: we define a getter or method in TS
    }

    getCategoryIdentifier(id: number): string {
        const map: { [key: number]: string } = {
            1: 'LIBRARY.CATEGORIES.QURAN_BOOKS',
            2: 'LIBRARY.CATEGORIES.HADITH_BOOKS',
            3: 'LIBRARY.CATEGORIES.ISLAMIC_HISTORY',
            4: 'LIBRARY.CATEGORIES.ISLAMIC_JURISPRUDENCE'
        };
        return map[id] || 'LIBRARY.TITLE';
    }
}
