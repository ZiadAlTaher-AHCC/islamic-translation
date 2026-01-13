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
            title: 'Tafsir Ibn Kathir - Complete Edition',
            titleArabic: 'تفسير ابن كثير - النسخة الكاملة',
            author: 'Ismail Ibn Kathir',
            authorArabic: 'إسماعيل بن كثير',
            publisher: 'Darussalam',
            publisherArabic: 'دار السلام',
            sourceLang: 'Arabic',
            sourceLangArabic: 'العربية',
            targetLang: 'English',
            targetLangArabic: 'الإنجليزية',
            description: 'Comprehensive Quranic exegesis by the renowned Islamic scholar Ismail Ibn Kathir. This work is considered one of the most authentic tafsir texts available today.',
            descriptionArabic: 'تفسير شامل للقرآن الكريم للعالم الإسلامي الشهير إسماعيل بن كثير. يعتبر هذا العمل من أصح نصوص التفسير المتاحة اليوم.',
            imageUrl: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=500',
            viewCount: 1540,
            downloadCount: 450,
            downloadLink: 'https://ashabulhadeeth.com/wp-content/uploads/2011/04/explanation_of_a_summary_of_aqeedat_hamawiyyah.pdf',
            outSource: false
        },
        {
            id: 2,
            categoryId: 1,
            title: 'The Noble Quran Translation',
            titleArabic: 'ترجمة معاني القرآن الكريم',
            author: 'Dr. Muhammad Muhsin Khan',
            authorArabic: 'د. محمد محسن خان',
            publisher: 'King Fahd Complex',
            publisherArabic: 'مجمع الملك فهد',
            sourceLang: 'Arabic',
            sourceLangArabic: 'العربية',
            targetLang: 'English',
            targetLangArabic: 'الإنجليزية',
            description: 'English translation of the meanings of the Noble Quran with extensive footnotes and commentary for better understanding of the text.',
            descriptionArabic: 'ترجمة إنجليزية لمعاني القرآن الكريم مع حواشي وتعليقات واسعة لفهم أفضل للنص.',
            imageUrl: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=500',
            viewCount: 2300,
            downloadCount: 890,
            downloadLink: 'https://ashabulhadeeth.com/wp-content/uploads/2011/04/explanation_of_a_summary_of_aqeedat_hamawiyyah.pdf',
            outSource: true
        },
        // Category 2: Hadith Books
        {
            id: 6,
            categoryId: 2,
            title: 'Sahih al-Bukhari',
            titleArabic: 'صحيح البخاري',
            author: 'Imam Al-Bukhari',
            authorArabic: 'الإمام البخاري',
            publisher: 'Sunnah Press',
            publisherArabic: 'مطبعة السنة',
            sourceLang: 'Arabic',
            sourceLangArabic: 'العربية',
            targetLang: 'English',
            targetLangArabic: 'الإنجليزية',
            description: 'The most authentic collection of hadith, compiled by Imam Muhammad ibn Ismail al-Bukhari. Contains over 7,000 hadith with chains of narration.',
            descriptionArabic: 'أصح كتب الحديث، جمعه الإمام محمد بن إسماعيل البخاري. يحتوي على أكثر من 7000 حديث مع أسانيدها.',
            imageUrl: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=500',
            viewCount: 5000,
            downloadCount: 1200,
            downloadLink: 'https://ashabulhadeeth.com/wp-content/uploads/2011/04/explanation_of_a_summary_of_aqeedat_hamawiyyah.pdf',
            outSource: false
        },
        // Category 3: Islamic History
        {
            id: 11,
            categoryId: 3,
            title: 'The Sealed Nectar',
            titleArabic: 'الرحيق المختوم',
            author: 'Safiur Rahman Mubarakpuri',
            authorArabic: 'صفي الرحمن المباركفوري',
            publisher: 'Darussalam',
            publisherArabic: 'دار السلام',
            sourceLang: 'Arabic',
            sourceLangArabic: 'العربية',
            targetLang: 'English',
            targetLangArabic: 'الإنجليزية',
            description: 'Biography of Prophet Muhammad (peace be upon him) by Safiur Rahman Mubarakpuri. Winner of first prize by the Muslim World League.',
            descriptionArabic: 'سيرة النبي محمد (صلى الله عليه وسلم) لصفي الرحمن المباركفوري. الفائز بالجائزة الأولى من رابطة العالم الإسلامي.',
            imageUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500',
            viewCount: 3100,
            downloadCount: 950,
            downloadLink: 'https://ashabulhadeeth.com/wp-content/uploads/2011/04/explanation_of_a_summary_of_aqeedat_hamawiyyah.pdf',
            outSource: false
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
            title: isEnglish ? book.title : book.titleArabic,
            description: isEnglish ? this.truncate(book.description, 100) : this.truncate(book.descriptionArabic, 100),
            imageUrl: book.imageUrl,
            navigationUrl: `/library/books/${book.id}`,
            categoryId: book.categoryId,
            categoryName: this.getCategoryName(book.categoryId, isEnglish),
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
