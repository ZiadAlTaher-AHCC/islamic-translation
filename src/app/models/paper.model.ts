export interface Paper {
    id: number;
    paperLanguageId: number; // 1: Arabic, 2: English

    // Core Info
    title: string;
    titleArabic: string; // For dual language support in titles if needed

    type: string; // e.g. "Master's Thesis", "PhD Dissertation", "Research Paper"
    typeArabic: string;

    researcherName: string;
    researcherNameArabic: string;

    adminName: string; // Who approved/supervised it
    adminNameArabic: string;

    date: string; // Text representation e.g. "2023-05-12" or "May 2023"

    location: string;
    locationArabic: string;

    pagesNo: number;

    // Content
    summary: string;
    summaryArabic: string;

    results: string;
    resultsArabic: string;

    // Media
    imageUrl?: string;

    // Stats
    viewCount: number;
}
