import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TerminologyDataService } from '../../core/services/terminology-data.service';
import { TranslationService } from '../../core/services/translation.service';
import { Terminology } from '../../models/terminology.models';

@Component({
    selector: 'app-terminology-details',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './terminology-details.component.html',
    styleUrls: ['./terminology-details.component.css']
})
export class TerminologyDetailsComponent implements OnInit {
    private terminologyService = inject(TerminologyDataService);
    public translationService = inject(TranslationService);
    private route = inject(ActivatedRoute);
    private router = inject(Router);

    term = signal<Terminology | undefined>(undefined);

    // Selection State
    selectedTranslationLang = signal<'english' | 'french' | 'spanish'>('english');
    selectedSynonymLang = signal<'english' | 'french' | 'spanish'>('english');

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            if (id) {
                this.loadTerm(Number(id));
            }
        });
    }

    loadTerm(id: number) {
        this.terminologyService.getTermById(id).subscribe(term => {
            if (term) {
                this.term.set(term);
                // Increment view count
                this.terminologyService.incrementViewCount(id);
            }
        });
    }

    get currentTranslation(): string {
        const t = this.term();
        if (!t) return '';
        switch (this.selectedTranslationLang()) {
            case 'english': return t.english;
            case 'french': return t.french;
            case 'spanish': return t.spanish;
            default: return t.english;
        }
    }

    get currentSynonyms(): string[] {
        const t = this.term();
        if (!t) return [];
        switch (this.selectedSynonymLang()) {
            case 'english': return t.englishSynonyms;
            case 'french': return t.frenchSynonyms;
            case 'spanish': return t.spanishSynonyms;
            default: return t.englishSynonyms;
        }
    }

    setTranslationLang(event: Event) {
        const target = event.target as HTMLSelectElement;
        this.selectedTranslationLang.set(target.value as any);
    }

    setSynonymLang(event: Event) {
        const target = event.target as HTMLSelectElement;
        this.selectedSynonymLang.set(target.value as any);
    }
}
