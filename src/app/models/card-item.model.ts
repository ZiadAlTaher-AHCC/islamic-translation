/**
 * Card item model for reusable card grid system
 */
export interface CardItem {
    /** Card title */
    title: string;

    /** Card description */
    description: string;

    /** Optional image URL - if provided, image will be displayed on one side */
    imageUrl?: string;

    /** Optional navigation URL - clicking on the title will navigate to this URL */
    navigationUrl?: string;

    /** Optional category ID for filtering (library items) - must be a number */
    categoryId?: number;

    /** Optional category name for display */
    categoryName?: string;
}
