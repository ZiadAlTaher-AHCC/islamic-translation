import { Injectable } from '@angular/core';
import { Surah, Ayah, Language, Translation } from '../../models/quran.models';

@Injectable({
    providedIn: 'root'
})
export class QuranDataService {

    // Mock Surah data - First 5 Surahs for demonstration
    private surahs: Surah[] = [
        { suraId: 1, suraName: 'Al-Fatihah', suraNameArabic: 'الفاتحة', totalAyahs: 7 },
        { suraId: 2, suraName: 'Al-Baqarah', suraNameArabic: 'البقرة', totalAyahs: 286 },
        { suraId: 3, suraName: 'Ali \'Imran', suraNameArabic: 'آل عمران', totalAyahs: 200 },
        { suraId: 4, suraName: 'An-Nisa', suraNameArabic: 'النساء', totalAyahs: 176 },
        { suraId: 5, suraName: 'Al-Ma\'idah', suraNameArabic: 'المائدة', totalAyahs: 120 }
    ];

    // Mock Ayah data - Sample ayahs from Al-Fatihah (Surah 1)
    private ayahs: Ayah[] = [
        { ayaId: 1, ayaNumber: 1, suraId: 1, ayaTextArabic: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ' },
        { ayaId: 2, ayaNumber: 2, suraId: 1, ayaTextArabic: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ' },
        { ayaId: 3, ayaNumber: 3, suraId: 1, ayaTextArabic: 'ٱلرَّحْمَٰنِ ٱلرَّحِيمِ' },
        { ayaId: 4, ayaNumber: 4, suraId: 1, ayaTextArabic: 'مَٰلِكِ يَوْمِ ٱلدِّينِ' },
        { ayaId: 5, ayaNumber: 5, suraId: 1, ayaTextArabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ' },
        { ayaId: 6, ayaNumber: 6, suraId: 1, ayaTextArabic: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ' },
        { ayaId: 7, ayaNumber: 7, suraId: 1, ayaTextArabic: 'صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ' },

        // Sample ayahs from Al-Baqarah (Surah 2) - First 3 ayahs
        { ayaId: 8, ayaNumber: 1, suraId: 2, ayaTextArabic: 'الٓمٓ' },
        { ayaId: 9, ayaNumber: 2, suraId: 2, ayaTextArabic: 'ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ' },
        { ayaId: 10, ayaNumber: 3, suraId: 2, ayaTextArabic: 'ٱلَّذِينَ يُؤْمِنُونَ بِٱلْغَيْبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقْنَٰهُمْ يُنفِقُونَ' }
    ];

    // Mock Language data
    private languages: Language[] = [
        { languageId: 1, languageName: 'English', languageNativeName: 'English', languageCode: 'en' },
        { languageId: 2, languageName: 'French', languageNativeName: 'Français', languageCode: 'fr' },
        { languageId: 3, languageName: 'Spanish', languageNativeName: 'Español', languageCode: 'es' },
        { languageId: 4, languageName: 'Turkish', languageNativeName: 'Türkçe', languageCode: 'tr' },
        { languageId: 5, languageName: 'Chinese', languageNativeName: '中文', languageCode: 'zh' }
    ];

    // Mock Translation data
    private translations: Translation[] = [
        // Al-Fatihah - Ayah 1 - English
        { translationId: 1, ayaId: 1, languageId: 1, translatorName: 'Sahih International', translationText: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.' },
        { translationId: 2, ayaId: 1, languageId: 1, translatorName: 'Yusuf Ali', translationText: 'In the name of Allah, Most Gracious, Most Merciful.' },

        // Al-Fatihah - Ayah 1 - French
        { translationId: 3, ayaId: 1, languageId: 2, translatorName: 'Muhammad Hamidullah', translationText: 'Au nom d\'Allah, le Tout Miséricordieux, le Très Miséricordieux.' },

        // Al-Fatihah - Ayah 1 - Spanish
        { translationId: 4, ayaId: 1, languageId: 3, translatorName: 'Muhammad Isa García', translationText: 'En el nombre de Dios, el Compasivo, el Misericordioso.' },

        // Al-Fatihah - Ayah 1 - Turkish
        { translationId: 5, ayaId: 1, languageId: 4, translatorName: 'Diyanet İşleri', translationText: 'Rahman ve Rahim olan Allah\'ın adıyla.' },

        // Al-Fatihah - Ayah 1 - Chinese
        { translationId: 6, ayaId: 1, languageId: 5, translatorName: 'Ma Jian', translationText: '奉至仁至慈的真主之名' },

        // Al-Fatihah - Ayah 2 - English
        { translationId: 7, ayaId: 2, languageId: 1, translatorName: 'Sahih International', translationText: '[All] praise is [due] to Allah, Lord of the worlds.' },
        { translationId: 8, ayaId: 2, languageId: 1, translatorName: 'Yusuf Ali', translationText: 'Praise be to Allah, the Cherisher and Sustainer of the worlds.' },

        // Al-Fatihah - Ayah 2 - French
        { translationId: 9, ayaId: 2, languageId: 2, translatorName: 'Muhammad Hamidullah', translationText: 'Louange à Allah, Seigneur de l\'univers.' },

        // Al-Fatihah - Ayah 3 - English
        { translationId: 10, ayaId: 3, languageId: 1, translatorName: 'Sahih International', translationText: 'The Entirely Merciful, the Especially Merciful.' },
        { translationId: 11, ayaId: 3, languageId: 1, translatorName: 'Yusuf Ali', translationText: 'Most Gracious, Most Merciful.' },

        // Al-Fatihah - Ayah 4 - English
        { translationId: 12, ayaId: 4, languageId: 1, translatorName: 'Sahih International', translationText: 'Sovereign of the Day of Recompense.' },
        { translationId: 13, ayaId: 4, languageId: 1, translatorName: 'Yusuf Ali', translationText: 'Master of the Day of Judgment.' },

        // Al-Fatihah - Ayah 5 - English
        { translationId: 14, ayaId: 5, languageId: 1, translatorName: 'Sahih International', translationText: 'It is You we worship and You we ask for help.' },
        { translationId: 15, ayaId: 5, languageId: 1, translatorName: 'Yusuf Ali', translationText: 'Thee do we worship, and Thine aid we seek.' },

        // Al-Fatihah - Ayah 6 - English
        { translationId: 16, ayaId: 6, languageId: 1, translatorName: 'Sahih International', translationText: 'Guide us to the straight path.' },
        { translationId: 17, ayaId: 6, languageId: 1, translatorName: 'Yusuf Ali', translationText: 'Show us the straight way.' },

        // Al-Fatihah - Ayah 7 - English
        { translationId: 18, ayaId: 7, languageId: 1, translatorName: 'Sahih International', translationText: 'The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.' },
        { translationId: 19, ayaId: 7, languageId: 1, translatorName: 'Yusuf Ali', translationText: 'The way of those on whom Thou hast bestowed Thy Grace, those whose (portion) is not wrath, and who go not astray.' },

        // Al-Baqarah - Ayah 1 - English
        { translationId: 20, ayaId: 8, languageId: 1, translatorName: 'Sahih International', translationText: 'Alif, Lam, Meem.' },
        { translationId: 21, ayaId: 8, languageId: 1, translatorName: 'Yusuf Ali', translationText: 'A.L.M.' },

        // Al-Baqarah - Ayah 2 - English
        { translationId: 22, ayaId: 9, languageId: 1, translatorName: 'Sahih International', translationText: 'This is the Book about which there is no doubt, a guidance for those conscious of Allah.' },
        { translationId: 23, ayaId: 9, languageId: 1, translatorName: 'Yusuf Ali', translationText: 'This is the Book; in it is guidance sure, without doubt, to those who fear Allah.' }
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
    getTranslations(ayaId: number, languageId: number): Translation[] {
        // In future, replace this with: return this.http.get<Translation[]>(`/api/translations?ayaId=${ayaId}&languageId=${languageId}`);
        return this.translations.filter(
            translation => translation.ayaId === ayaId && translation.languageId === languageId
        );
    }
}
