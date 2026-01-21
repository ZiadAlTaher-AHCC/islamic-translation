export interface TerminologyCategory {
    id: number;
    titleEn: string;
    titleAr: string;
}

export interface TerminologyLetter {
    id: number;
    name: string;
}

export interface Terminology {
    id: number;
    title: string;
    titleArabic: string;

    // Basic Info
    meaningLanguage: string; // معناه لغة
    meaningTerm: string; // معناه اصطلاحا

    // Classification
    categoryId: number;
    categoryNameEn: string; //تصنيفه
    categoryNameAr: string;

    letterId: number;
    letterName: string;

    voiceSpell: string; // كتابته صوتيا

    // Translations
    english: string;
    french: string;
    spanish: string;

    // Synonyms
    englishSynonyms: string;
    frenchSynonyms: string;
    spanishSynonyms: string;

    // Stats
    viewCount: number; // عدد المشاهدات
}
