import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SpecialistsCenter } from '../../models/specialists-center.model';
import { CardItem } from '../../models/card-item.model';

@Injectable({
    providedIn: 'root'
})
export class SpecialistsCentersDataService {

    // Mock Data
    private centers: SpecialistsCenter[] = [
        {
            id: 1,
            name: 'Center for Translation Studies',
            nameArabic: 'مركز دراسات الترجمة',
            countryName: 'Saudi Arabia',
            countryNameArabic: 'المملكة العربية السعودية',
            location: 'Riyadh - King Saud University',
            locationArabic: 'الرياض - جامعة الملك سعود',
            managerName: 'Dr. Ahmad Al-Salem',
            managerNameArabic: 'د. أحمد السالم',
            phone: '+966 11 467 0000',
            email: 'info@cts.ksu.edu.sa',
            websiteUrl: 'https://cts.ksu.edu.sa',
            masarat: [
                'Academic research in translation studies',
                'Training translators on modern tools',
                'Publishing peer-reviewed journals'
            ],
            masaratArabic: [
                'البحث الأكاديمي في دراسات الترجمة',
                'تدريب المترجمين على الأدوات الحديثة',
                'نشر المجلات العلمية المحكمة'
            ],
            intag: [
                'Annual Translation Conference Proceedings',
                'Translation of 50+ academic books',
                'Dictionary of Modern Terminology'
            ],
            intagArabic: [
                'وقائع مؤتمر الترجمة السنوي',
                'ترجمة أكثر من 50 كتاباً أكاديمياً',
                'قاموس المصطلحات الحديثة'
            ],
            viewCount: 1250,
        },
        {
            id: 2,
            name: 'Islamic Translation Institute',
            nameArabic: 'معهد الترجمة الإسلامي',
            countryName: 'Egypt',
            countryNameArabic: 'مصر',
            location: 'Cairo - Al-Azhar',
            locationArabic: 'القاهرة - الأزهر',
            managerName: 'Sheikh Mahmoud Ali',
            managerNameArabic: 'الشيخ محمود علي',
            email: 'contact@iti.eg',
            websiteUrl: 'https://www.iti.eg',
            masarat: [
                'Translation of Islamic heritage texts',
                'Training Imams on English preaching',
                'Interfaith dialogue support'
            ],
            masaratArabic: [
                'ترجمة نصوص التراث الإسلامي',
                'تدريب الأئمة على الخطابة بالإنجليزية',
                'دعم حوار الأديان'
            ],
            intag: [
                'Translation of Tafsir Al-Jalalayn',
                'Encyclopedia of Islamic Jurisprudence (English)',
                'Monthly Newsletter'
            ],
            intagArabic: [
                'ترجمة تفسير الجلالين',
                'موسوعة الفقه الإسلامي (باللغة الإنجليزية)',
                'النشرة الشهرية'
            ],
            viewCount: 3400
        },
        {
            id: 3,
            name: 'Global Arabic Center',
            nameArabic: 'المركز العربي العالمي',
            countryName: 'UAE',
            countryNameArabic: 'الإمارات العربية المتحدة',
            location: 'Dubai - Knowledge Park',
            locationArabic: 'دبي - قرية المعرفة',
            managerName: 'Ms. Layla Hassan',
            managerNameArabic: 'أ. ليلى حسن',
            phone: '+971 4 390 1111',
            email: 'info@gac.ae',
            masarat: [
                'Localization of software and apps',
                'Arabic content creation',
                'Dubbing and subtitling'
            ],
            masaratArabic: [
                'تعريب البرمجيات والتطبيقات',
                'صناعة المحتوى العربي',
                'الدبلجة والترجمة المرئية'
            ],
            intag: [
                'Localized 100+ mobile apps',
                'Arabic subtitles for 500+ hours of educational video'
            ],
            intagArabic: [
                'تعريب أكثر من 100 تطبيق جوال',
                'ترجمة مرئية لأكثر من 500 ساعة من الفيديو التعليمي'
            ],
            viewCount: 980,
        }
    ];

    getCenterById(id: number): Observable<SpecialistsCenter | undefined> {
        const center = this.centers.find(c => c.id === id);
        return of(center);
    }

    getCenters(): Observable<SpecialistsCenter[]> {
        return of(this.centers);
    }

    incrementViewCount(id: number): void {
        const center = this.centers.find(c => c.id === id);
        if (center) {
            center.viewCount++;
        }
    }

    // --- Mapper Logic ---

    mapToCard(center: SpecialistsCenter, currentLang: string): CardItem {
        const isEnglish = currentLang === 'en';

        // Use first element of Masarat or Location as description
        const description = isEnglish
            ? (center.masarat[0] || center.location)
            : (center.masaratArabic[0] || center.locationArabic);

        return {
            title: isEnglish ? center.name : center.nameArabic,
            description: description,
            navigationUrl: `/specialists-centers/${center.id}`,
            viewCount: center.viewCount,
        };
    }
}
