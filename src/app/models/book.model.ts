export interface Book {
    id: number;
    categoryId: number;
    categoryNameAr: string;
    categoryNameEn?: string;

    // Core Info
    title: string;

    author: string;

    translator?: string;

    publisher: string;

    sourceLang: string;

    targetLang: string;

    description: string;

    imageUrl?: string;

    // Actions & Stats
    downloadLink?: string;
    outSource?: string; // If true, opens in new tab

    viewCount: number;
    downloadCount: number;
}
