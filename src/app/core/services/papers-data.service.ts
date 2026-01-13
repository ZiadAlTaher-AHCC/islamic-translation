import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Paper } from '../../models/paper.model';
import { CardItem } from '../../models/card-item.model';

@Injectable({
    providedIn: 'root'
})
export class PapersDataService {

    // Mock Data
    private papers: Paper[] = [
        {
            id: 1,
            paperLanguageId: 1, // Arabic
            title: 'Analytical Study in Scientific Research Methodologies',
            titleArabic: 'دراسة تحليلية في مناهج البحث العلمي',
            type: 'Master Thesis',
            typeArabic: 'رسالة ماجستير',
            researcherName: 'Ahmed Al-Fahad',
            researcherNameArabic: 'أحمد الفهد',
            adminName: 'Dr. Khalid Osman',
            adminNameArabic: 'د. خالد عثمان',
            date: '15-03-2023',
            location: 'Riyadh, KSA',
            locationArabic: 'الرياض، المملكة العربية السعودية',
            pagesNo: 150,
            summary: 'A comprehensive study discussing quantitative and qualitative research methodologies with practical applications in Arab academic studies.',
            summaryArabic: 'رسالة علمية تناقش مناهج البحث العلمي الكمي والنوعي، مع تطبيقات عملية في الدراسات الأكاديمية العربية.',
            results: 'The study concluded that hybrid methodologies yield the best results in social science research within the Arab context.',
            resultsArabic: 'خلصت الدراسة إلى أن المناهج الهجينة تعطي أفضل النتائج في البحوث الاجتماعية في السياق العربي.',
            imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500',
            viewCount: 120
        },
        {
            id: 2,
            paperLanguageId: 1, // Arabic
            title: 'AI Applications in Education',
            titleArabic: 'الذكاء الاصطناعي وتطبيقاته في التعليم',
            type: 'Research Paper',
            typeArabic: 'بحث علمي',
            researcherName: 'Sarah Al-Ali',
            researcherNameArabic: 'سارة العلي',
            adminName: 'Prof. Mona Zaki',
            adminNameArabic: 'أ. د. منى زكي',
            date: '10-06-2023',
            location: 'Cairo, Egypt',
            locationArabic: 'القاهرة، مصر',
            pagesNo: 45,
            summary: 'A paper illustrating the role of AI in developing the educational process and improving learning outcomes.',
            summaryArabic: 'بحث علمي يوضح دور الذكاء الاصطناعي في تطوير العملية التعليمية وتحسين مخرجات التعلم.',
            results: 'AI tools significantly improved student engagement and personalized learning paths.',
            resultsArabic: 'أدوات الذكاء الاصطناعي حسنت بشكل كبير تفاعل الطلاب ومسارات التعلم الشخصية.',
            viewCount: 340
        },
        {
            id: 6,
            paperLanguageId: 2, // English
            title: 'Machine Learning Models for Healthcare',
            titleArabic: 'نماذج التعلم الآلي للرعاية الصحية',
            type: 'PhD Dissertation',
            typeArabic: 'أطروحة دكتوراه',
            researcherName: 'John Smith',
            researcherNameArabic: 'جون سميث',
            adminName: 'Dr. Alan Turing',
            adminNameArabic: 'د. آلان تورينج',
            date: '20-01-2024',
            location: 'London, UK',
            locationArabic: 'لندن، المملكة المتحدة',
            pagesNo: 200,
            summary: 'Scientific paper exploring machine learning techniques used in disease prediction and medical diagnosis.',
            summaryArabic: 'ورقة علمية تستكشف تقنيات التعلم الآلي المستخدمة في التنبؤ بالأمراض والتشخيص الطبي.',
            results: 'The proposed model achieved 95% accuracy in early detection of diabetes.',
            resultsArabic: 'حقق النموذج المقترح دقة 95٪ في الكشف المبكر عن مرض السكري.',
            imageUrl: 'https://images.unsplash.com/photo-1581091870627-3a3c1c4f6a1b?w=500',
            viewCount: 500
        }
    ];

    getPaperById(id: number): Observable<Paper | undefined> {
        const paper = this.papers.find(p => p.id === id);
        return of(paper);
    }

    getPapers(): Observable<Paper[]> {
        return of(this.papers);
    }

    getPapersByCategory(categoryId: number): Observable<Paper[]> {
        // 1 = Arabic, 2 = English (Mapping based on paperLanguageId)
        // Note: The categoryId in PapersComponent matches language roughly.
        return of(this.papers.filter(p => p.paperLanguageId === categoryId));
    }

    incrementViewCount(id: number): void {
        const paper = this.papers.find(p => p.id === id);
        if (paper) {
            paper.viewCount++;
        }
    }

    // --- Mapper Logic ---

    /**
     * Maps a Paper object to a CardItem for display in grids.
     * Handles bilingual title/description selection based on currentLang.
     */
    mapToCard(paper: Paper, currentLang: string): CardItem {
        const isEnglish = currentLang === 'en';

        return {
            title: isEnglish ? paper.title : paper.titleArabic,
            description: isEnglish ? this.truncate(paper.summary, 100) : this.truncate(paper.summaryArabic, 100),
            imageUrl: paper.imageUrl,
            navigationUrl: `/papers/${paper.id}`,
            viewCount: paper.viewCount,
            categoryId: paper.paperLanguageId,
            categoryName: isEnglish
                ? (paper.paperLanguageId === 1 ? 'Arabic Scientific Papers' : 'English Scientific Papers')
                : (paper.paperLanguageId === 1 ? 'الأبحاث العلمية العربية' : 'الأبحاث العلمية الإنجليزية')
        };
    }

    private truncate(str: string, length: number): string {
        if (!str) return '';
        return str.length > length ? str.substring(0, length) + '...' : str;
    }
}
