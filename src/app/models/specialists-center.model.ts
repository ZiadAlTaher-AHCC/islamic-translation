export interface SpecialistsCenter {
    id: number;
    name: string;
    nameArabic: string;

    countryName: string;
    countryNameArabic: string;

    location: string;
    locationArabic: string;

    managerName: string;
    managerNameArabic: string;

    phone?: string;
    email: string;
    websiteUrl?: string;

    // Arrays for multiline/list support
    masarat: string[];
    masaratArabic: string[];

    intag: string[];
    intagArabic: string[];

    viewCount: number;

}
