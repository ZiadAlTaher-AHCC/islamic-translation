export interface HadithCategory {
    id: number;
    name: string;
}

export interface HadithChapter {
    id: number;
    name: string;
    categoryId: number;
}

export interface HadithBabs {
    id: number;
    name: string;
    chapterId: number;
}

export interface Hadith {
    id: number;
    babId: number;
    textArabic: string;
}

export interface HadithTranslation {
    id: number;
    hadithId: number;
    languageId: number;
    text: string;
    translator?: string;
}

export interface Language {
    id: number;
    name: string;
}
