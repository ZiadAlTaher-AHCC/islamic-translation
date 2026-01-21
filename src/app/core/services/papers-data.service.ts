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
            paperLanguageName: 'Arabic',
            title: 'Analytical Study in Scientific Research Methodologies',
            type: 'Master Thesis',
            researcherName: 'Ahmed Al-Fahad',
            adminName: 'Dr. Khalid Osman',
            date: '15-03-2023',
            location: 'Riyadh, KSA',
            pagesNo: 150,
            summary: 'A comprehensive study discussing quantitative and qualitative research methodologies with practical applications in Arab academic studies.',
            results: 'The study concluded that hybrid methodologies yield the best results in social science research within the Arab context.',
            viewCount: 120
        },
        {
            id: 2,
            paperLanguageId: 1, // Arabic
            paperLanguageName: 'Arabic',
            title: 'AI Applications in Education',
            type: 'Research Paper',
            researcherName: 'Sarah Al-Ali',
            adminName: 'Prof. Mona Zaki',
            date: '10-06-2023',
            location: 'Cairo, Egypt',
            pagesNo: 45,
            summary: 'A paper illustrating the role of AI in developing the educational process and improving learning outcomes.',
            results: 'AI tools significantly improved student engagement and personalized learning paths.',
            viewCount: 340
        },
        {
            id: 6,
            paperLanguageId: 2, // English
            paperLanguageName: 'English',
            title: 'Machine Learning Models for Healthcare',
            type: 'PhD Dissertation',
            researcherName: 'John Smith',
            adminName: 'Dr. Alan Turing',
            date: '20-01-2024',
            location: 'London, UK',
            pagesNo: 200,
            summary: 'Scientific paper exploring machine learning techniques used in disease prediction and medical diagnosis.',
            results: 'The proposed model achieved 95% accuracy in early detection of diabetes.',
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
            id: paper.id,
            titleAr: paper.title,
            description: isEnglish ? this.truncate(paper.summary, 100) : this.truncate(paper.summary, 100),
            navigationUrl: `/papers/${paper.id}`,
            viewCount: paper.viewCount,
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
