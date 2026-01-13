export interface TerminologyCategory {
    id: number;
    name: string;
    nameArabic: string;
}

export interface TerminologyLetter {
    id: number;
    char: string;
    charArabic: string;
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
    categoryName: string; //تصنيفه
    categoryNameArabic: string;

    letterId: number;
    letterName: string;
    letterNameArabic: string;

    voiceSpell: string; // كتابته صوتيا

    // Translations
    english: string;
    french: string;
    spanish: string;

    // Synonyms
    englishSynonyms: string[];
    frenchSynonyms: string[];
    spanishSynonyms: string[];

    // Stats
    viewCount: number; // عدد المشاهدات
}
