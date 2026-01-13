export interface Surah {
    suraId: number;
    suraName: string;
    suraNameArabic: string;
    totalAyahs: number;
}

export interface Ayah {
    ayaId: number;
    ayaNumber: number;
    suraId: number;
    ayaTextArabic: string;
}

export interface Language {
    languageId: number;
    languageName: string;
    languageNativeName: string;
    languageCode: string;
}

export interface Translation {
    translationId: number;
    ayaId: number;
    languageId: number;
    translatorName: string;
    translationText: string;
}
