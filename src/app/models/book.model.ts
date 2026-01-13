export interface Book {
    id: number;
    categoryId: number;

    // Core Info
    title: string;
    titleArabic: string;

    author: string;
    authorArabic: string;

    translator?: string;
    translatorArabic?: string;

    publisher: string;
    publisherArabic: string;

    sourceLang: string; // e.g. "Arabic", "English"
    sourceLangArabic: string;

    targetLang: string; // e.g. "English", "French"
    targetLangArabic: string;

    description: string;
    descriptionArabic: string;

    imageUrl?: string;

    // Actions & Stats
    downloadLink?: string;
    outSource?: boolean; // If true, opens in new tab

    viewCount: number;
    downloadCount: number;
}
