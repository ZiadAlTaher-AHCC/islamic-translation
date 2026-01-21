export interface Surah {
    id: number;
    name: string;
}

export interface Ayah {
    id: number;
    ayaNumber: number;
    suraId: number;
    suraName: string;
    text: string;
}

export interface Language {
    id: number;
    name: string;
}

export interface Translation {
    id: number;
    ayaId: number;
    languageName: string;
    translatorName: string;
    translation: string;
}
