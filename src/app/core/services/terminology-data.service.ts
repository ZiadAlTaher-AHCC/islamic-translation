import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Terminology, TerminologyCategory, TerminologyLetter } from '../../models/terminology.models';

@Injectable({
    providedIn: 'root'
})
export class TerminologyDataService {

    // Mock Categories
    privatecategories: TerminologyCategory[] = [ // Typo fixed in variable name in actual file content below
        { id: 1, name: 'Theology', nameArabic: 'العقيدة' },
        { id: 2, name: 'Jurisprudence', nameArabic: 'الفقه' },
        { id: 3, name: 'History', nameArabic: 'التاريخ' },
        { id: 4, name: 'General', nameArabic: 'عام' },
        { id: 5, name: 'Quran Sciences', nameArabic: 'علوم القرآن' },
        { id: 6, name: 'Hadith Sciences', nameArabic: 'علوم الحديث' }
    ];

    // Mock Letters
    private letters: TerminologyLetter[] = [
        { id: 1, char: 'A', charArabic: 'أ' },
        { id: 2, char: 'B', charArabic: 'ب' },
        { id: 3, char: 'T', charArabic: 'ت' },
        { id: 4, char: 'Th', charArabic: 'ث' },
        { id: 5, char: 'J', charArabic: 'ج' },
        { id: 6, char: 'H', charArabic: 'ح' },
        { id: 7, char: 'K', charArabic: 'ك' },
        { id: 8, char: 'R', charArabic: 'ر' },
        { id: 9, char: 'S', charArabic: 'س' }
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
            categoryName: 'Theology',
            categoryNameArabic: 'العقيدة',
            letterId: 3,
            letterName: 'T',
            letterNameArabic: 'ت',
            voiceSpell: 'Taw-heed',
            english: 'Monotheism',
            french: 'Monothéisme',
            spanish: 'Monoteísmo',
            englishSynonyms: ['Oneness of God', 'Unification'],
            frenchSynonyms: ['Unicité de Dieu'],
            spanishSynonyms: ['Unicidad de Dios'],
            viewCount: 150
        },
        {
            id: 2,
            title: 'Salah',
            titleArabic: 'صلاة',
            meaningLanguage: 'Arabic',
            meaningTerm: 'The ritual prayer performed by Muslims.',
            categoryId: 2,
            categoryName: 'Jurisprudence',
            categoryNameArabic: 'الفقه',
            letterId: 9,
            letterName: 'S',
            letterNameArabic: 'س',
            voiceSpell: 'Sa-lah',
            english: 'Prayer',
            french: 'Prière',
            spanish: 'Oración',
            englishSynonyms: ['Worship', 'Ritual Prayer'],
            frenchSynonyms: ['Prière rituelle'],
            spanishSynonyms: ['Rezo'],
            viewCount: 320
        },
        {
            id: 3,
            title: 'Jihad',
            titleArabic: 'جهاد',
            meaningLanguage: 'Arabic',
            meaningTerm: 'Striving or struggling, especially with a praiseworthy aim.',
            categoryId: 4,
            categoryName: 'General',
            categoryNameArabic: 'عام',
            letterId: 5,
            letterName: 'J',
            letterNameArabic: 'ج',
            voiceSpell: 'Ji-had',
            english: 'Struggle',
            french: 'Lutte',
            spanish: 'Esfuerzo',
            englishSynonyms: ['Strive', 'Effort'],
            frenchSynonyms: ['Effort'],
            spanishSynonyms: ['Lucha'],
            viewCount: 85
        },
        {
            id: 4,
            title: 'Hadith',
            titleArabic: 'حديث',
            meaningLanguage: 'Arabic',
            meaningTerm: 'Recorded sayings and actions of Prophet Muhammad (PBUH).',
            categoryId: 6,
            categoryName: 'Hadith Sciences',
            categoryNameArabic: 'علوم الحديث',
            letterId: 6,
            letterName: 'H',
            letterNameArabic: 'ح',
            voiceSpell: 'Ha-deeth',
            english: 'Prophetic Tradition',
            french: 'Hadith',
            spanish: 'Hadiz',
            englishSynonyms: ['Tradition', 'Narration'],
            frenchSynonyms: ['Tradition prophétique'],
            spanishSynonyms: ['Tradición'],
            viewCount: 210
        },
        {
            id: 5,
            title: 'Qiraat',
            titleArabic: 'قراءات',
            meaningLanguage: 'Arabic',
            meaningTerm: 'Different canonical methods of reciting the Quran.',
            categoryId: 5,
            categoryName: 'Quran Sciences',
            categoryNameArabic: 'علوم القرآن',
            letterId: 8,
            letterName: 'R',
            letterNameArabic: 'ر',
            voiceSpell: 'Qi-ra-at',
            english: 'Quranic Readings',
            french: 'Lectures coraniques',
            spanish: 'Lecturas coránicas',
            englishSynonyms: ['Recitations'],
            frenchSynonyms: ['Lectures'],
            spanishSynonyms: ['Lecturas'],
            viewCount: 95
        },
        {
            id: 6,
            title: 'Khilafah',
            titleArabic: 'خلافة',
            meaningLanguage: 'Arabic',
            meaningTerm: 'System of governance representing leadership of the Muslim community.',
            categoryId: 3,
            categoryName: 'History',
            categoryNameArabic: 'التاريخ',
            letterId: 7,
            letterName: 'K',
            letterNameArabic: 'ك',
            voiceSpell: 'Khi-la-fah',
            english: 'Caliphate',
            french: 'Califat',
            spanish: 'Califato',
            englishSynonyms: ['Islamic State'],
            frenchSynonyms: ['État islamique'],
            spanishSynonyms: ['Estado islámico'],
            viewCount: 180
        }, {
            id: 1,
            title: 'Tawheed',
            titleArabic: 'توحيد',
            meaningLanguage: 'Arabic',
            meaningTerm: 'The indivisible oneness concept of monotheism in Islam.',
            categoryId: 1,
            categoryName: 'Theology',
            categoryNameArabic: 'العقيدة',
            letterId: 3,
            letterName: 'T',
            letterNameArabic: 'ت',
            voiceSpell: 'Taw-heed',
            english: 'Monotheism',
            french: 'Monothéisme',
            spanish: 'Monoteísmo',
            englishSynonyms: ['Oneness of God', 'Unification'],
            frenchSynonyms: ['Unicité de Dieu'],
            spanishSynonyms: ['Unicidad de Dios'],
            viewCount: 150
        },
        {
            id: 2,
            title: 'Salah',
            titleArabic: 'صلاة',
            meaningLanguage: 'Arabic',
            meaningTerm: 'The ritual prayer performed by Muslims.',
            categoryId: 2,
            categoryName: 'Jurisprudence',
            categoryNameArabic: 'الفقه',
            letterId: 9,
            letterName: 'S',
            letterNameArabic: 'س',
            voiceSpell: 'Sa-lah',
            english: 'Prayer',
            french: 'Prière',
            spanish: 'Oración',
            englishSynonyms: ['Worship', 'Ritual Prayer'],
            frenchSynonyms: ['Prière rituelle'],
            spanishSynonyms: ['Rezo'],
            viewCount: 320
        },
        {
            id: 3,
            title: 'Jihad',
            titleArabic: 'جهاد',
            meaningLanguage: 'Arabic',
            meaningTerm: 'Striving or struggling, especially with a praiseworthy aim.',
            categoryId: 4,
            categoryName: 'General',
            categoryNameArabic: 'عام',
            letterId: 5,
            letterName: 'J',
            letterNameArabic: 'ج',
            voiceSpell: 'Ji-had',
            english: 'Struggle',
            french: 'Lutte',
            spanish: 'Esfuerzo',
            englishSynonyms: ['Strive', 'Effort'],
            frenchSynonyms: ['Effort'],
            spanishSynonyms: ['Lucha'],
            viewCount: 85
        },
        {
            id: 4,
            title: 'Hadith',
            titleArabic: 'حديث',
            meaningLanguage: 'Arabic',
            meaningTerm: 'Recorded sayings and actions of Prophet Muhammad (PBUH).',
            categoryId: 6,
            categoryName: 'Hadith Sciences',
            categoryNameArabic: 'علوم الحديث',
            letterId: 6,
            letterName: 'H',
            letterNameArabic: 'ح',
            voiceSpell: 'Ha-deeth',
            english: 'Prophetic Tradition',
            french: 'Hadith',
            spanish: 'Hadiz',
            englishSynonyms: ['Tradition', 'Narration'],
            frenchSynonyms: ['Tradition prophétique'],
            spanishSynonyms: ['Tradición'],
            viewCount: 210
        },
        {
            id: 5,
            title: 'Qiraat',
            titleArabic: 'قراءات',
            meaningLanguage: 'Arabic',
            meaningTerm: 'Different canonical methods of reciting the Quran.',
            categoryId: 5,
            categoryName: 'Quran Sciences',
            categoryNameArabic: 'علوم القرآن',
            letterId: 8,
            letterName: 'R',
            letterNameArabic: 'ر',
            voiceSpell: 'Qi-ra-at',
            english: 'Quranic Readings',
            french: 'Lectures coraniques',
            spanish: 'Lecturas coránicas',
            englishSynonyms: ['Recitations'],
            frenchSynonyms: ['Lectures'],
            spanishSynonyms: ['Lecturas'],
            viewCount: 95
        },
        {
            id: 6,
            title: 'Khilafah',
            titleArabic: 'خلافة',
            meaningLanguage: 'Arabic',
            meaningTerm: 'System of governance representing leadership of the Muslim community.',
            categoryId: 3,
            categoryName: 'History',
            categoryNameArabic: 'التاريخ',
            letterId: 7,
            letterName: 'K',
            letterNameArabic: 'ك',
            voiceSpell: 'Khi-la-fah',
            english: 'Caliphate',
            french: 'Califat',
            spanish: 'Califato',
            englishSynonyms: ['Islamic State'],
            frenchSynonyms: ['État islamique'],
            spanishSynonyms: ['Estado islámico'],
            viewCount: 180
        }, {
            id: 1,
            title: 'Tawheed',
            titleArabic: 'توحيد',
            meaningLanguage: 'Arabic',
            meaningTerm: 'The indivisible oneness concept of monotheism in Islam.',
            categoryId: 1,
            categoryName: 'Theology',
            categoryNameArabic: 'العقيدة',
            letterId: 3,
            letterName: 'T',
            letterNameArabic: 'ت',
            voiceSpell: 'Taw-heed',
            english: 'Monotheism',
            french: 'Monothéisme',
            spanish: 'Monoteísmo',
            englishSynonyms: ['Oneness of God', 'Unification'],
            frenchSynonyms: ['Unicité de Dieu'],
            spanishSynonyms: ['Unicidad de Dios'],
            viewCount: 150
        },
        {
            id: 2,
            title: 'Salah',
            titleArabic: 'صلاة',
            meaningLanguage: 'Arabic',
            meaningTerm: 'The ritual prayer performed by Muslims.',
            categoryId: 2,
            categoryName: 'Jurisprudence',
            categoryNameArabic: 'الفقه',
            letterId: 9,
            letterName: 'S',
            letterNameArabic: 'س',
            voiceSpell: 'Sa-lah',
            english: 'Prayer',
            french: 'Prière',
            spanish: 'Oración',
            englishSynonyms: ['Worship', 'Ritual Prayer'],
            frenchSynonyms: ['Prière rituelle'],
            spanishSynonyms: ['Rezo'],
            viewCount: 320
        },
        {
            id: 3,
            title: 'Jihad',
            titleArabic: 'جهاد',
            meaningLanguage: 'Arabic',
            meaningTerm: 'Striving or struggling, especially with a praiseworthy aim.',
            categoryId: 4,
            categoryName: 'General',
            categoryNameArabic: 'عام',
            letterId: 5,
            letterName: 'J',
            letterNameArabic: 'ج',
            voiceSpell: 'Ji-had',
            english: 'Struggle',
            french: 'Lutte',
            spanish: 'Esfuerzo',
            englishSynonyms: ['Strive', 'Effort'],
            frenchSynonyms: ['Effort'],
            spanishSynonyms: ['Lucha'],
            viewCount: 85
        },
        {
            id: 4,
            title: 'Hadith',
            titleArabic: 'حديث',
            meaningLanguage: 'Arabic',
            meaningTerm: 'Recorded sayings and actions of Prophet Muhammad (PBUH).',
            categoryId: 6,
            categoryName: 'Hadith Sciences',
            categoryNameArabic: 'علوم الحديث',
            letterId: 6,
            letterName: 'H',
            letterNameArabic: 'ح',
            voiceSpell: 'Ha-deeth',
            english: 'Prophetic Tradition',
            french: 'Hadith',
            spanish: 'Hadiz',
            englishSynonyms: ['Tradition', 'Narration'],
            frenchSynonyms: ['Tradition prophétique'],
            spanishSynonyms: ['Tradición'],
            viewCount: 210
        },
        {
            id: 5,
            title: 'Qiraat',
            titleArabic: 'قراءات',
            meaningLanguage: 'Arabic',
            meaningTerm: 'Different canonical methods of reciting the Quran.',
            categoryId: 5,
            categoryName: 'Quran Sciences',
            categoryNameArabic: 'علوم القرآن',
            letterId: 8,
            letterName: 'R',
            letterNameArabic: 'ر',
            voiceSpell: 'Qi-ra-at',
            english: 'Quranic Readings',
            french: 'Lectures coraniques',
            spanish: 'Lecturas coránicas',
            englishSynonyms: ['Recitations'],
            frenchSynonyms: ['Lectures'],
            spanishSynonyms: ['Lecturas'],
            viewCount: 95
        },
        {
            id: 6,
            title: 'Khilafah',
            titleArabic: 'خلافة',
            meaningLanguage: 'Arabic',
            meaningTerm: 'System of governance representing leadership of the Muslim community.',
            categoryId: 3,
            categoryName: 'History',
            categoryNameArabic: 'التاريخ',
            letterId: 7,
            letterName: 'K',
            letterNameArabic: 'ك',
            voiceSpell: 'Khi-la-fah',
            english: 'Caliphate',
            french: 'Califat',
            spanish: 'Califato',
            englishSynonyms: ['Islamic State'],
            frenchSynonyms: ['État islamique'],
            spanishSynonyms: ['Estado islámico'],
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

    incrementViewCount(id: number): void {
        const term = this.terms.find(t => t.id === Number(id));
        if (term) {
            term.viewCount++;
        }
    }

    // Helper for mock data
    private categories: TerminologyCategory[] = [
        { id: 1, name: 'Theology', nameArabic: 'العقيدة' },
        { id: 2, name: 'Jurisprudence', nameArabic: 'الفقه' },
        { id: 3, name: 'History', nameArabic: 'التاريخ' },
        { id: 4, name: 'General', nameArabic: 'عام' },
        { id: 5, name: 'Quran Sciences', nameArabic: 'علوم القرآن' },
        { id: 6, name: 'Hadith Sciences', nameArabic: 'علوم الحديث' }
    ];
}
