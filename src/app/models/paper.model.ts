export interface Paper {
    id: number;
    paperLanguageId: number; // 1: Arabic, 2: English
    paperLanguageName: string;

    // Core Info
    title: string;

    type: string; // e.g. "Master's Thesis", "PhD Dissertation", "Research Paper"

    researcherName: string;

    adminName: string; // Who approved/supervised it

    date: string; // Text representation e.g. "2023-05-12" or "May 2023"

    location: string;

    pagesNo: number;

    // Content
    summary: string;

    results: string;

    // Stats
    viewCount: number;
}
