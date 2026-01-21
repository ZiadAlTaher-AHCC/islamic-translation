import { Injectable } from '@angular/core';
import { Surah, Ayah, Language, Translation } from '../../models/quran.models';

@Injectable({
    providedIn: 'root'
})
export class QuranDataService {

    // Mock Surah data - First 5 Surahs for demonstration
    private surahs: Surah[] = [
        { id: 1, name: 'الفاتحة' },
        { id: 2, name: 'البقرة' },
        { id: 3, name: 'آل عمران' },
        { id: 4, name: 'النساء' },
        { id: 5, name: 'المائدة' }
    ];

    // Mock Ayah data - Sample ayahs from Al-Fatihah (Surah 1)
    private ayahs: Ayah[] = [
        { id: 1, ayaNumber: 1, suraId: 1, text: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ' ,suraName: 'الفاتحة' },
        { id: 2, ayaNumber: 2, suraId: 1, text: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ' ,suraName: 'الفاتحة' },
        { id: 3, ayaNumber: 3, suraId: 1, text: 'ٱلرَّحْمَٰنِ ٱلرَّحِيمِ' ,suraName: 'الفاتحة' },
        { id: 4, ayaNumber: 4, suraId: 1, text: 'مَٰلِكِ يَوْمِ ٱلدِّينِ' ,suraName: 'الفاتحة' },
        { id: 5, ayaNumber: 5, suraId: 1, text: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ' ,suraName: 'الفاتحة' },
        { id: 6, ayaNumber: 6, suraId: 1, text: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ' ,suraName: 'الفاتحة' },
        { id: 7, ayaNumber: 7, suraId: 1, text: 'صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ' ,suraName: 'الفاتحة' },

        // Sample ayahs from Al-Baqarah (Surah 2) - First 3 ayahs
        { id: 8, ayaNumber: 1, suraId: 2, text: 'الٓمٓ' ,suraName: 'البقرة' },
        { id: 9, ayaNumber: 2, suraId: 2, text: 'ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ' ,suraName: 'البقرة' },
        { id: 10, ayaNumber: 3, suraId: 2, text: 'ٱلَّذِينَ يُؤْمِنُونَ بِٱلْغَيْبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقْنَٰهُمْ يُنفِقُونَ' ,suraName: 'البقرة' }
    ];

    // Mock Language data
    private languages: Language[] = [
        { id: 1, name: 'English' },
        { id: 2, name: 'French' },
        { id: 3, name: 'Spanish' },
        { id: 4, name: 'Turkish' },
        { id: 5, name: 'Chinese' }
    ];

    // Mock Translation data
    private translations: Translation[] = [
        // Al-Fatihah - Ayah 1 - English
        { id: 1, ayaId: 1, languageName: 'English', translatorName: 'Sahih International', translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.' },
        { id: 2, ayaId: 1, languageName: 'English', translatorName: 'Yusuf Ali', translation: 'In the name of Allah, Most Gracious, Most Merciful.' },

        // Al-Fatihah - Ayah 1 - French
        { id: 3, ayaId: 1, languageName: 'French', translatorName: 'Muhammad Hamidullah', translation: 'Au nom d\'Allah, le Tout Miséricordieux, le Très Miséricordieux.' },

        // Al-Fatihah - Ayah 1 - Spanish
        { id: 4, ayaId: 1, languageName: 'Spanish', translatorName: 'Muhammad Isa García', translation: 'En el nombre de Dios, el Compasivo, el Misericordioso.' },

        // Al-Fatihah - Ayah 1 - Turkish
        { id: 5, ayaId: 1, languageName: 'Turkish', translatorName: 'Diyanet İşleri', translation: 'Rahman ve Rahim olan Allah\'ın adıyla.' },

        // Al-Fatihah - Ayah 1 - Chinese
        { id: 6, ayaId: 1, languageName: 'Chinese', translatorName: 'Ma Jian', translation: '奉至仁至慈的真主之名' },

        // Al-Fatihah - Ayah 2 - English
        { id: 7, ayaId: 2, languageName: 'English', translatorName: 'Sahih International', translation: '[All] praise is [due] to Allah, Lord of the worlds.' },
        { id: 8, ayaId: 2, languageName: 'English', translatorName: 'Yusuf Ali', translation: 'Praise be to Allah, the Cherisher and Sustainer of the worlds.' },

        // Al-Fatihah - Ayah 2 - French
        { id: 9, ayaId: 2, languageName: 'French', translatorName: 'Muhammad Hamidullah', translation: 'Louange à Allah, Seigneur de l\'univers.' },

        // Al-Fatihah - Ayah 3 - English
        { id: 10, ayaId: 3, languageName: 'English', translatorName: 'Sahih International', translation: 'The Entirely Merciful, the Especially Merciful.' },
        { id: 11, ayaId: 3, languageName: 'English', translatorName: 'Yusuf Ali', translation: 'Most Gracious, Most Merciful.' },

        // Al-Fatihah - Ayah 4 - English
        { id: 12, ayaId: 4, languageName: 'English', translatorName: 'Sahih International', translation: 'Sovereign of the Day of Recompense.' },
        { id: 13, ayaId: 4, languageName: 'English', translatorName: 'Yusuf Ali', translation: 'Master of the Day of Judgment.' },

        // Al-Fatihah - Ayah 5 - English
        { id: 14, ayaId: 5, languageName: 'English', translatorName: 'Sahih International', translation: 'It is You we worship and You we ask for help.' },
        { id: 15, ayaId: 5, languageName: 'English', translatorName: 'Yusuf Ali', translation: 'Thee do we worship, and Thine aid we seek.' },

        // Al-Fatihah - Ayah 6 - English
        { id: 16, ayaId: 6, languageName: 'English', translatorName: 'Sahih International', translation: 'Guide us to the straight path.' },
        { id: 17, ayaId: 6, languageName: 'English', translatorName: 'Yusuf Ali', translation: 'Show us the straight way.' },

        // Al-Fatihah - Ayah 7 - English
        { id: 18, ayaId: 7, languageName: 'English', translatorName: 'Sahih International', translation: 'The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.' },
        { id: 19, ayaId: 7, languageName: 'English', translatorName: 'Yusuf Ali', translation: 'The way of those on whom Thou hast bestowed Thy Grace, those whose (portion) is not wrath, and who go not astray.' },

        // Al-Baqarah - Ayah 1 - English
        { id: 20, ayaId: 8, languageName: 'English', translatorName: 'Sahih International', translation: 'Alif, Lam, Meem.' },
        { id: 21, ayaId: 8, languageName: 'English', translatorName: 'Yusuf Ali', translation: 'A.L.M.' },

        // Al-Baqarah - Ayah 2 - English
        { id: 22, ayaId: 9, languageName: 'English', translatorName: 'Sahih International', translation: 'This is the Book about which there is no doubt, a guidance for those conscious of Allah.' },
        { id: 23, ayaId: 9, languageName: 'English', translatorName: 'Yusuf Ali', translation: 'This is the Book; in it is guidance sure, without doubt, to those who fear Allah.' }
    ];

    constructor() { }

    /**
     * Get all Surahs
     * @returns Array of Surah objects
     */
    getSurahs(): Surah[] {
        // In future, replace this with: return this.http.get<Surah[]>('/api/surahs');
        return this.surahs;
    }

    /**
     * Get Ayahs by Surah ID
     * @param suraId The ID of the Surah
     * @returns Array of Ayah objects for the specified Surah
     */
    getAyahsBySurah(suraId: number): Ayah[] {
        // In future, replace this with: return this.http.get<Ayah[]>(`/api/surahs/${suraId}/ayahs`);
        return this.ayahs.filter(ayah => ayah.suraId === suraId);
    }

    /**
     * Get all Languages
     * @returns Array of Language objects
     */
    getLanguages(): Language[] {
        // In future, replace this with: return this.http.get<Language[]>('/api/languages');
        return this.languages;
    }

    /**
     * Get Translations by Ayah ID and Language ID
     * @param ayaId The ID of the Ayah
     * @param languageId The ID of the Language
     * @returns Array of Translation objects
     */
    getTranslations(ayaId: number, languageName: string): Translation[] {
        // In future, replace this with: return this.http.get<Translation[]>(`/api/translations?ayaId=${ayaId}&languageId=${languageId}`);
        return this.translations.filter(
            translation => translation.ayaId === ayaId && translation.languageName === languageName
        );
    }

    /**
     * Search Ayahs by text query
     * @param query Search query
     * @returns Array of Ayah objects that contain the query text (Arabic) or have translations containing the query
     */
    searchAyahs(query: string): { ayah: Ayah, matches: string[] }[] {
        const normalizedQuery = query.toLowerCase().trim();
        if (!normalizedQuery) return [];

        const results: { ayah: Ayah, matches: string[] }[] = [];

        // 1. Search in Arabic Text (Ayahs)
        this.ayahs.forEach(ayah => {
            if (ayah.text.includes(normalizedQuery)) {
                results.push({ ayah, matches: [ayah.text] });
            }
        });

        // 2. Search in Translations
        // This is a bit complex because we need to map translation back to ayah.
        // For simplicity in this mock service, we'll iterate translations.
        this.translations.forEach(translation => {
            if (translation.translation.toLowerCase().includes(normalizedQuery)) {
                // Check if we already have this ayah in results
                const existingResult = results.find(r => r.ayah.id === translation.ayaId);
                if (existingResult) {
                    if (!existingResult.matches.includes(translation.translation)) {
                        existingResult.matches.push(translation.translation);
                    }
                } else {
                    const ayah = this.ayahs.find(a => a.id === translation.ayaId);
                    if (ayah) {
                        results.push({ ayah, matches: [translation.translation] });
                    }
                }
            }
        });

        return results;
    }

    /**
     * Get a single Ayah by ID
     * @param ayaId The ID of the Ayah
     * @returns Ayah object or undefined if not found
     */
    getAyaById(ayaId: number): Ayah | undefined {
        // In future, replace this with: return this.http.get<Ayah>(`/api/ayahs/${ayaId}`);
        return this.ayahs.find(ayah => ayah.id === ayaId);
    }

    /**
     * Get a single Surah by ID
     * @param suraId The ID of the Surah
     * @returns Surah object or undefined if not found
     */
    getSurahById(suraId: number): Surah | undefined {
        // In future, replace this with: return this.http.get<Surah>(`/api/surahs/${suraId}`);
        return this.surahs.find(surah => surah.id === suraId);
    }

    /**
     * Get all translations for an Ayah, grouped by language
     * @param ayaId The ID of the Ayah
     * @returns Array of objects containing language info and associated translations
     */
    getAllTranslationsByAyaId(ayaId: number): { language: Language, translations: Translation[] }[] {
        // In future, replace this with: return this.http.get<...>(`/api/ayahs/${ayaId}/translations`);

        // Get all translations for this ayah
        const ayahTranslations = this.translations.filter(t => t.ayaId === ayaId);

        // Group by language
        const groupedMap = new Map<string, Translation[]>();

        ayahTranslations.forEach(translation => {
            if (!groupedMap.has(translation.languageName)) {
                groupedMap.set(translation.languageName, []);
            }
            groupedMap.get(translation.languageName)!.push(translation);
        });

        // Convert to result format with language objects
        const result: { language: Language, translations: Translation[] }[] = [];

        groupedMap.forEach((translations, languageName) => {
            const language = this.languages.find(l => l.name === languageName);
            if (language) {
                result.push({ language, translations });
            }
        });

        return result;
    }
}
