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
            countryName: 'Saudi Arabia',
            location: 'Riyadh - King Saud University',
            managerName: 'Dr. Ahmad Al-Salem',
            phone: '+966 11 467 0000',
            email: 'info@cts.ksu.edu.sa',
            websiteUrl: 'https://cts.ksu.edu.sa',
            masarat: `<p>1. دورات التوفل (TOEFL) لأعضاء هيئة التدريس ومعاونيهم بجامعة بنها ومختلف الجامعات المصرية، وكذلك الباحثين بمختلف المعاهد البحثية.</p>

<p>2. دورات في تنمية المهارات اللغوية لمعلمي المدارس الخاصة.</p>

<p>3. دورات في اللغة الفرنسية لطلاب الجامعة.</p>

<p>4. دورات تنمية مهارات اللغة لدى معلمي اللغة الإنجليزية بالجامعة، وذلك بالتعاون مع الإميديست بالقاهرة.</p>

<p>5. ورش عمل بين مركز اللغات الأجنبية ودار ماكميلان للنشر.</p>

<p>6. دورات في تدريس اللغة الإنجليزية في مرحلة رياض الأطفال (مستويين).</p>

<p>7. دورات لتنمية مهارات التدريس لدى معلمي اللغة الإنجليزية بالجامعة.</p>

<p>8. دورات في المحادثة باللغة الإنجليزية لطلاب الجامعة والمهتمين بتعلم اللغة.</p>

<p>9. ورش عمل بين مركز اللغات الملحقية الثقافية بالسفارة الأمريكية لتدريب مدرسي اللغة بالجامعة على الأساليب المتنوعة لتقييم مهارة الكتابة.</p>

<p>10. دورة اللغة الانجليزية لبرنامج جودة ومراقبة الأغذية لطلاب كلية الطب البيطري جامعة بنها.</p>`,
            intag: `<p>1. دورات التوفل (TOEFL) لأعضاء هيئة التدريس ومعاونيهم بجامعة بنها ومختلف الجامعات المصرية، وكذلك الباحثين بمختلف المعاهد البحثية.</p>

<p>2. دورات في تنمية المهارات اللغوية لمعلمي المدارس الخاصة.</p>

<p>3. دورات في اللغة الفرنسية لطلاب الجامعة.</p>

<p>4. دورات تنمية مهارات اللغة لدى معلمي اللغة الإنجليزية بالجامعة، وذلك بالتعاون مع الإميديست بالقاهرة.</p>

<p>5. ورش عمل بين مركز اللغات الأجنبية ودار ماكميلان للنشر.</p>

<p>6. دورات في تدريس اللغة الإنجليزية في مرحلة رياض الأطفال (مستويين).</p>

<p>7. دورات لتنمية مهارات التدريس لدى معلمي اللغة الإنجليزية بالجامعة.</p>

<p>8. دورات في المحادثة باللغة الإنجليزية لطلاب الجامعة والمهتمين بتعلم اللغة.</p>

<p>9. ورش عمل بين مركز اللغات الملحقية الثقافية بالسفارة الأمريكية لتدريب مدرسي اللغة بالجامعة على الأساليب المتنوعة لتقييم مهارة الكتابة.</p>

<p>10. دورة اللغة الانجليزية لبرنامج جودة ومراقبة الأغذية لطلاب كلية الطب البيطري جامعة بنها.</p>`,
            viewCount: 1250,
        },
        {
            id: 2,
            name: 'Islamic Translation Institute',
            countryName: 'Egypt',
            location: 'Cairo - Al-Azhar',
            managerName: 'Sheikh Mahmoud Ali',
            email: 'contact@iti.eg',
            websiteUrl: 'https://www.iti.eg',
            masarat: `<ol>
	<li>الإسهام في إنجاز موسوعة بيانية لترجمة معاني القرآن الكريم<span dir="LTR">.</span></li>
	<li>تنظيم الملتقيات والندوات والمؤتمرات العلمية والثقافية.</li>
	<li>تنظيم الأيام الدراسية والدورات التكوينية والورشات التدريبية.</li>
	<li>إصدار مجلة متخصصة.</li>
	<li>نشر أبحاث فردية وجماعية في ميادين: الترجمة والتدريب؛ والتكامل المعرفي، بين مختلف العلوم والمعارف.</li>
	<li>تقديم استشارات وخبرات.</li>
	<li>إنشاء خزانة متخصصة في الترجمة باللغات العربية والفرنسية والانجليزية.</li>
	<li>تدريس اللغة العربية لغير الناطقين بها.</li>
	<li>تنظيم دورات تكوينية في الترجمة.</li>
	<li>تعليم اللغات الحية<span dir="LTR">.</span></li>
</ol>

<p><span dir="RTL">إصدار مجلة متخصصة في مجال الترجمة</span>.</p>`,
            intag: `<ul>
	<li>إقامة أربع مؤتمرات دولية</li>
	<li>إصدار المجلة العلمية المتخصصة في الترجمة</li>
</ul>

<p><span dir="RTL">إقامة العديد من الدورات التدريبية والتعليمية </span></p>`,
            viewCount: 3400
        },
        {
            id: 3,
            name: 'Global Arabic Center',
            countryName: 'UAE',
            location: 'Dubai - Knowledge Park',
            managerName: 'Ms. Layla Hassan',
            phone: '+971 4 390 1111',
            email: 'info@gac.ae',
            masarat: 'Localization of software and apps',
            intag: 'Localized 100+ mobile apps',
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
        const description = center.location;

        return {
            id: center.id,
            titleAr: center.name,
            description: description,
            navigationUrl: `/specialists-centers/${center.id}`,
            viewCount: center.viewCount,
        };
    }
}
