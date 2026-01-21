/**
 * Card item model for reusable card grid system
 */
export interface CardItem {
    /** Card ID */
    id?: number;

    /** Card title */
    titleAr: string;

    /** Card title */
    titleEn?: string;

    /** Card description */
    description: string;

    /** Optional image URL - if provided, image will be displayed on one side */
    imageUrl?: string;

    /** Optional navigation URL - clicking on the title will navigate to this URL */
    navigationUrl?: string;

    /** Optional category name for display */
    categoryName?: string;

    /** Optional View Count for display */
    viewCount?: number;

    /** Optional Download Count for display */
    downloadCount?: number;
}
