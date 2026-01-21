import { Injectable } from '@angular/core';
import { HadithCategory, HadithBabs, HadithChapter, Hadith, HadithTranslation, Language } from '../../models/hadith.models';

@Injectable({
    providedIn: 'root'
})
export class HadithDataService {

    // Mock Data
    private categories: HadithCategory[] = [
        { id: 1, name: 'صحيح البخاري' },
        { id: 2, name: 'صحيح مسلم' }
    ];

    private chapters: HadithChapter[] = [
        { id: 1, categoryId: 1, name: 'بدا الوحي ' },
        { id: 2, categoryId: 2, name: 'بني الاسلام على خمس ' }, // Simplified mapping for demo
        { id: 3, categoryId: 3, name: 'مقدمه ي الايمان' }
    ];

    private babs: HadithBabs[] = [
        { id: 1, chapterId: 1, name: 'الايات' },
        { id: 2, chapterId: 1, name: 'الايمان' },
        { id: 3, chapterId: 2, name: 'الايمان' }
    ];

    private hadiths: Hadith[] = [
        // Bukhari - Revelation - Chapter 1
        {
            id: 1,
            babId: 1,
            textArabic: 'سَمِعْتُ عُمَرَ بْنَ الْخَطَّابِ ـ رضى الله عنه ـ عَلَى الْمِنْبَرِ يَقُولُ سَمِعْتُ رَسُولَ اللَّهِ صلى الله عليه وسلم يَقُولُ " إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا أَوْ إِلَى امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ ".'
        },
        {
            id: 2,
            babId: 1,
            textArabic: 'عَنْ عَائِشَةَ أُمِّ الْمُؤْمِنِينَ ـ رضى الله عنها ـ أَنَّ الْحَارِثَ بْنَ هِشَامٍ ـ رضى الله عنه ـ سَأَلَ رَسُولَ اللَّهِ صلى الله عليه وسلم فَقَالَ يَا رَسُولَ اللَّهِ كَيْفَ يَأْتِيكَ الْوَحْيُ فَقَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم " أَحْيَانًا يَأْتِينِي مِثْلَ صَلْصَلَةِ الْجَرَسِ ـ وَهُوَ أَشَدُّهُ عَلَىَّ ـ فَيُفْصَمُ عَنِّي وَقَدْ وَعَيْتُ عَنْهُ مَا قَالَ، وَأَحْيَانًا يَتَمَثَّلُ لِيَ الْمَلَكُ رَجُلاً فَيُكَلِّمُنِي فَأَعِي مَا يَقُولُ "، قَالَتْ عَائِشَةُ رضى الله عنها وَلَقَدْ رَأَيْتُهُ يَنْزِلُ عَلَيْهِ الْوَحْيُ فِي الْيَوْمِ الشَّدِيدِ الْبَرْدِ، فَيُفْصَمُ عَنْهُ وَإِنَّ جَبِينَهُ لَيَتَفَصَّدُ عَرَقًا.'
        },
        // Muslim - Faith - Chapter 3
        {
            id: 3,
            babId: 3,
            textArabic: 'حَدَّثَنَا أَبُو خَيْثَمَةَ، زُهَيْرُ بْنُ حَرْبٍ حَدَّثَنَا وَكِيعٌ، عَنْ كَهْمَسٍ، عَنْ عَبْدِ اللَّهِ بْنِ بُرَيْدَةَ، عَنْ يَحْيَى بْنِ يَعْمَرَ، ... قَالَ " فَأَخْبِرْنِي عَنِ الإِيمَانِ ‏.‏ قَالَ ‏"‏ أَنْ تُؤْمِنَ بِاللَّهِ وَمَلاَئِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ وَالْيَوْمِ الآخِرِ وَتُؤْمِنَ بِالْقَدَرِ خَيْرِهِ وَشَرِّهِ ‏"‏ ‏.‏ قَالَ صَدَقْتَ'
        }
    ];

    private translations: HadithTranslation[] = [
        // Hadith 1
        { id: 1, hadithId: 1, languageId: 1, text: 'I heard Allah\'s Messenger (ﷺ) saying, "The reward of deeds depends upon the intentions and every person will get the reward according to what he has intended. So whoever emigrated for worldly benefits or for a woman to marry, his emigration was for what he emigrated for."' },
        { id: 2, hadithId: 1, languageId: 2, text: 'J\'ai entendu le Messager d\'Allah (ﷺ) dire: "Les actes ne valent que par les intentions et chacun n\'aura que ce qu\'il a eu l\'intention de faire..."' },

        // Hadith 2
        { id: 3, hadithId: 2, languageId: 1, text: 'Narrated Aisha: (the mother of the faithful believers) Al-Harith bin Hisham asked Allah\'s Messenger (ﷺ) "O Allah\'s Messenger (ﷺ)! How is the Divine Inspiration revealed to you?" Allah\'s Messenger (ﷺ) replied, "Sometimes it is (revealed) like the ringing of a bell, this form of Inspiration is the hardest of all and then this state passes off after I have grasped what is inspired. Sometimes the Angel comes in the form of a man and talks to me and I grasp whatever he says." Aisha added: Verily I saw the Prophet (ﷺ) being inspired divinely on a very cold day and noticed the sweat dropping from his forehead (as the Inspiration was over).' },

        // Hadith 3
        { id: 4, hadithId: 3, languageId: 1, text: '... He (the inquirer) said: Tell me about faith. He (the Holy Prophet) replied: That you affirm your faith in Allah, in His angels, in His Books, in His Apostles, in the Day of Judgment, and you affirm your faith in the Divine Decree about good and evil. He (the inquirer) said: You have told the truth.' }
    ];

    private languages: Language[] = [
        { id: 1, name: 'English' },
        { id: 2, name: 'Français' },
        { id: 3, name: 'Bahasa Indonesia' }
    ];

    constructor() { }

    getCategories(): HadithCategory[] {
        return this.categories;
    }

    getBabs(chapterId: number): HadithBabs[] {
        return this.babs.filter(b => b.chapterId === chapterId);
    }

    getChapters(categoryId: number): HadithChapter[] {
        return this.chapters.filter(c => c.categoryId === categoryId);
    }

    getLanguages(): Language[] {
        return this.languages;
    }

    getHadiths(babId: number): Hadith[] {
        return this.hadiths.filter(h => h.babId === babId);
    }

    getTranslation(hadithId: number, languageId: number): HadithTranslation | undefined {
        return this.translations.find(t => t.hadithId === hadithId && t.languageId === languageId);
    }
}
