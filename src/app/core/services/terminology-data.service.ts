import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Terminology, TerminologyCategory, TerminologyLetter } from '../../models/terminology.models';

@Injectable({
    providedIn: 'root'
})
export class TerminologyDataService {

    // Mock Categories
    privatecategories: TerminologyCategory[] = [ // Typo fixed in variable name in actual file content below
        { id: 1, titleEn: 'Theology', titleAr: 'العقيدة' },
        { id: 2, titleEn: 'Jurisprudence', titleAr: 'الفقه' },
        { id: 3, titleEn: 'History', titleAr: 'التاريخ' },
        { id: 4, titleEn: 'General', titleAr: 'عام' },
        { id: 5, titleEn: 'Quran Sciences', titleAr: 'علوم القرآن' },
        { id: 6, titleEn: 'Hadith Sciences', titleAr: 'علوم الحديث' }
    ];

    // Mock Letters
    private letters: TerminologyLetter[] = [
        { id: 1, name: 'أ' },
        { id: 2, name: 'ب' },
        { id: 3, name: 'ت' },
        { id: 4, name: 'ث' },
        { id: 5, name: 'ج' },
        { id: 6, name: 'ح' },
        { id: 7, name: 'ك' },
        { id: 8, name: 'ر' },
        { id: 9, name: 'س' }
    ];

    // Mock Terms
    private terms: Terminology[] = [
        {
            id: 1,
            title: 'Tawheed',
            titleArabic: 'توحيد',
            meaningLanguage: 'Arabic',
            meaningTerm: 'The indivisible oneness concept of monotheism in Islam.',
            categoryId: 1,
            categoryNameEn: 'Theology',
            categoryNameAr: 'العقيدة',
            letterId: 3,
            letterName: 'ت',
            voiceSpell: 'Taw-heed',
            english: 'Monotheism',
            french: 'Monothéisme',
            spanish: 'Monoteísmo',
            englishSynonyms: 'Oneness of God',
            frenchSynonyms: 'Unicité de Dieu',
            spanishSynonyms: 'Unicidad de Dios',
            viewCount: 150
        },
        {
            id: 2,
            title: 'Salah',
            titleArabic: 'صلاة',
            meaningLanguage: 'Arabic',
            meaningTerm: 'The ritual prayer performed by Muslims.',
            categoryId: 2,
            categoryNameEn: 'Jurisprudence',
            categoryNameAr: 'الفقه',
            letterId: 9,
            letterName: 'س',
            voiceSpell: 'Sa-lah',
            english: 'Prayer',
            french: 'Prière',
            spanish: 'Oración',
            englishSynonyms: 'Worship',
            frenchSynonyms: 'Prière rituelle',
            spanishSynonyms: 'Rezo',
            viewCount: 320
        },
        {
            id: 3,
            title: 'Jihad',
            titleArabic: 'جهاد',
            meaningLanguage: 'Arabic',
            meaningTerm: 'Striving or struggling, especially with a praiseworthy aim.',
            categoryId: 4,
            categoryNameEn: 'General',
            categoryNameAr: 'عام',
            letterId: 5,
            letterName: 'ج',
            voiceSpell: 'Ji-had',
            english: 'Struggle',
            french: 'Lutte',
            spanish: 'Esfuerzo',
            englishSynonyms: 'Strive',
            frenchSynonyms: 'Effort',
            spanishSynonyms: 'Lucha',
            viewCount: 85
        },
        {
            id: 4,
            title: 'Hadith',
            titleArabic: 'حديث',
            meaningLanguage: 'Arabic',
            meaningTerm: 'Recorded sayings and actions of Prophet Muhammad (PBUH).',
            categoryId: 6,
            categoryNameEn: 'Hadith Sciences',
            categoryNameAr: 'علوم الحديث',
            letterId: 6,
            letterName: 'ح',
            voiceSpell: 'Ha-deeth',
            english: 'Prophetic Tradition',
            french: 'Hadith',
            spanish: 'Hadiz',
            englishSynonyms: 'Tradition',
            frenchSynonyms: 'Tradition prophétique',
            spanishSynonyms: 'Tradición',
            viewCount: 210
        },
        {
            id: 5,
            title: 'Qiraat',
            titleArabic: 'قراءات',
            meaningLanguage: 'Arabic',
            meaningTerm: 'Different canonical methods of reciting the Quran.',
            categoryId: 5,
            categoryNameEn: 'Quran Sciences',
            categoryNameAr: 'علوم القرآن',
            letterId: 8,
            letterName: 'ر',
            voiceSpell: 'Qi-ra-at',
            english: 'Quranic Readings',
            french: 'Lectures coraniques',
            spanish: 'Lecturas coránicas',
            englishSynonyms: 'Recitations',
            frenchSynonyms: 'Lectures',
            spanishSynonyms: 'Lecturas',
            viewCount: 95
        },
        {
            id: 6,
            title: 'Khilafah',
            titleArabic: 'خلافة',
            meaningLanguage: 'Arabic',
            meaningTerm: 'System of governance representing leadership of the Muslim community.',
            categoryId: 3,
            categoryNameEn: 'History',
            categoryNameAr: 'التاريخ',
            letterId: 7,
            letterName: 'ك',
            voiceSpell: 'Khi-la-fah',
            english: 'Caliphate',
            french: 'Califat',
            spanish: 'Califato',
            englishSynonyms: 'Islamic State',
            frenchSynonyms: 'État islamique',
            spanishSynonyms: 'Estado islámico',
            viewCount: 180
        }
    ];

    constructor() { }

    getCategories(): Observable<TerminologyCategory[]> {
        return of(this.categories);
    }

    getLetters(): Observable<TerminologyLetter[]> {
        return of(this.letters);
    }

    getTerms(filterType: 'category' | 'letter', filterId: number | null): Observable<Terminology[]> {
        if (!filterId) {
            return of(this.terms);
        }

        if (filterType === 'category') {
            return of(this.terms.filter(t => t.categoryId === Number(filterId)));
        } else {
            return of(this.terms.filter(t => t.letterId === Number(filterId)));
        }
    }

    getTermById(id: number): Observable<Terminology | undefined> {
        return of(this.terms.find(t => t.id === Number(id)));
    }

    searchTerms(query: string): Observable<Terminology[]> {
        const normalizedQuery = query.toLowerCase().trim();
        if (!normalizedQuery) return of([]);

        return of(this.terms.filter(t =>
            t.title.toLowerCase().includes(normalizedQuery) ||
            t.titleArabic.includes(normalizedQuery) ||
            (t.english && t.english.toLowerCase().includes(normalizedQuery))
        ));
    }

    incrementViewCount(id: number): void {
        const term = this.terms.find(t => t.id === Number(id));
        if (term) {
            term.viewCount++;
        }
    }

    // Helper for mock data
    private categories: TerminologyCategory[] = [
        { id: 1, titleEn: 'Theology', titleAr: 'العقيدة' },
        { id: 2, titleEn: 'Jurisprudence', titleAr: 'الفقه' },
        { id: 3, titleEn: 'History', titleAr: 'التاريخ' },
        { id: 4, titleEn: 'General', titleAr: 'عام' },
        { id: 5, titleEn: 'Quran Sciences', titleAr: 'علوم القرآن' },
        { id: 6, titleEn: 'Hadith Sciences', titleAr: 'علوم الحديث' }
    ];
}
