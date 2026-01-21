import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../../models/book.model';
import { CardItem } from '../../models/card-item.model';

@Injectable({
    providedIn: 'root'
})
export class LibraryDataService {

    // Mock Data
    private books: Book[] = [
        // Category 1: Quran Books
        {
            id: 1,
            categoryId: 1,
            categoryNameAr: 'كتب القرآن',
            categoryNameEn: 'Quran Books',
            title: 'تفسير ابن كثير - النسخة الكاملة',
            author: 'إسماعيل بن كثير',
            publisher: 'دار السلام',
            sourceLang: 'العربية',
            targetLang: 'الإنجليزية',
            description: 'تفسير شامل للقرآن الكريم للعالم الإسلامي الشهير إسماعيل بن كثير. يعتبر هذا العمل من أصح نصوص التفسير المتاحة اليوم.',
            imageUrl: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=500',
            viewCount: 1540,
            downloadCount: 450,
            downloadLink: 'https://ashabulhadeeth.com/wp-content/uploads/2011/04/explanation_of_a_summary_of_aqeedat_hamawiyyah.pdf',
            outSource: 'false'
        },
        {
            id: 2,
            categoryId: 1,
            categoryNameAr: 'كتب القرآن',
            categoryNameEn: 'Quran Books',
            title: 'The Noble Quran Translation',
            author: 'Dr. Muhammad Muhsin Khan',
            publisher: 'King Fahd Complex',
            sourceLang: 'Arabic',
            targetLang: 'English',
            description: 'English translation of the meanings of the Noble Quran with extensive footnotes and commentary for better understanding of the text.',
            imageUrl: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=500',
            viewCount: 2300,
            downloadCount: 890,
            downloadLink: 'https://ashabulhadeeth.com/wp-content/uploads/2011/04/explanation_of_a_summary_of_aqeedat_hamawiyyah.pdf',
            outSource: 'true'
        },
        // Category 2: Hadith Books
        {
            id: 6,
            categoryId: 2,
            categoryNameAr: 'كتب الحديث',
            categoryNameEn: 'Hadith Books',
            title: 'صحيح البخاري',
            author: 'Imam Al-Bukhari',
            publisher: 'Sunnah Press',
            sourceLang: 'Arabic',
            targetLang: 'English',
            description: 'The most authentic collection of hadith, compiled by Imam Muhammad ibn Ismail al-Bukhari. Contains over 7,000 hadith with chains of narration.',
            imageUrl: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=500',
            viewCount: 5000,
            downloadCount: 1200,
            downloadLink: 'https://ashabulhadeeth.com/wp-content/uploads/2011/04/explanation_of_a_summary_of_aqeedat_hamawiyyah.pdf',
            outSource: 'false'
        },
        // Category 3: Islamic History
        {
            id: 11,
            categoryId: 3,
            categoryNameAr: 'كتب التاريخ الإسلامي',
            categoryNameEn: 'Islamic History Books',
            title: 'الرحيق المختوم',
            author: 'صفي الرحمن المباركفوري',
            publisher: 'دار السلام',
            sourceLang: 'Arabic',
            targetLang: 'English',
            description: 'Biography of Prophet Muhammad (peace be upon him) by Safiur Rahman Mubarakpuri. Winner of first prize by the Muslim World League.',
            imageUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500',
            viewCount: 3100,
            downloadCount: 950,
            downloadLink: 'https://ashabulhadeeth.com/wp-content/uploads/2011/04/explanation_of_a_summary_of_aqeedat_hamawiyyah.pdf',
            outSource: 'false'
        }
    ];

    getBookById(id: number): Observable<Book | undefined> {
        const book = this.books.find(b => b.id === id);
        return of(book);
    }

    getBooks(): Observable<Book[]> {
        return of(this.books);
    }

    getBooksByCategory(categoryId: number): Observable<Book[]> {
        return of(this.books.filter(b => b.categoryId === categoryId));
    }

    searchBooks(query: string): Observable<Book[]> {
        const normalizedQuery = query.toLowerCase().trim();
        if (!normalizedQuery) return of([]);

        return of(this.books.filter(b =>
            b.title.toLowerCase().includes(normalizedQuery)
        ));
    }

    incrementViewCount(id: number): void {
        const book = this.books.find(b => b.id === id);
        if (book) {
            book.viewCount++;
        }
    }

    incrementDownloadCount(id: number): void {
        const book = this.books.find(b => b.id === id);
        if (book) {
            book.downloadCount++;
        }
    }

    // --- Mapper Logic ---

    mapToCard(book: Book, currentLang: string): CardItem {
        const isEnglish = currentLang === 'en';

        return {
            id: book.id,
            titleAr: book.title,
            description: this.truncate(book.description, 100),
            imageUrl: book.imageUrl,
            navigationUrl: `/library/books/${book.id}`,
            categoryName: isEnglish ? book.categoryNameEn : book.categoryNameAr,
            viewCount: book.viewCount,
            downloadCount: book.downloadCount
        };
    }

    private truncate(str: string, length: number): string {
        if (!str) return '';
        return str.length > length ? str.substring(0, length) + '...' : str;
    }

    private getCategoryName(id: number, isEnglish: boolean): string {
        // Simple mapping for demo, ideally fetched efficiently or stored better
        const map: { [key: number]: { en: string, ar: string } } = {
            1: { en: 'Quran Books', ar: 'كتب القرآن' },
            2: { en: 'Hadith Books', ar: 'كتب الحديث' },
            3: { en: 'Islamic History', ar: 'التاريخ الإسلامي' },
            4: { en: 'Islamic Jurisprudence', ar: 'الفقه الإسلامي' }
        };
        return isEnglish ? (map[id]?.en || 'Library') : (map[id]?.ar || 'المكتبة');
    }
}
