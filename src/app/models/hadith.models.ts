export interface HadithCollection {
    id: number;
    name: string;
    nameArabic: string;
}

export interface HadithBook {
    id: number;
    name: string;
    nameArabic: string;
    collectionId: number;
}

export interface HadithChapter {
    id: number;
    name: string;
    nameArabic: string;
    bookId: number;
}

export interface Hadith {
    id: number;
    chapterId: number;
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
    code: string;
}
