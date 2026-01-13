import { Component, OnInit, inject, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { TerminologyDataService } from '../../core/services/terminology-data.service';
import { TranslationService } from '../../core/services/translation.service';
import { Terminology, TerminologyCategory, TerminologyLetter } from '../../models/terminology.models';

@Component({
    selector: 'app-terminology-list',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './terminology-list.component.html',
    styleUrls: ['./terminology-list.component.css']
})
export class TerminologyListComponent implements OnInit {
    private terminologyService = inject(TerminologyDataService);
    public translationService = inject(TranslationService);
    private router = inject(Router);
    private route = inject(ActivatedRoute);

    // Filter Mode
    filterMode = signal<'category' | 'letter'>('letter');

    // Data
    categories = signal<TerminologyCategory[]>([]);
    letters = signal<TerminologyLetter[]>([]);
    terms = signal<Terminology[]>([]);

    // Selection
    selectedId = signal<number | null>(null);

    constructor() {
        // Effect to handle mode switching from URL or other logic if needed in future
        effect(() => {
            // Logic when signals change if needed
        });
    }

    ngOnInit(): void {
        this.loadFilterOptions();

        // Subscribe to query params to handle deep linking
        this.route.queryParams.subscribe(params => {
            if (params['categoryId']) {
                this.filterMode.set('category');
                this.selectedId.set(Number(params['categoryId']));
            } else if (params['letterId']) {
                this.filterMode.set('letter');
                this.selectedId.set(Number(params['letterId']));
            } else {
                // Default
                this.filterMode.set('letter');
                this.selectedId.set(null); // or select first letter?
            }
            this.loadTerms();
        });
    }

    loadFilterOptions() {
        this.terminologyService.getCategories().subscribe(res => this.categories.set(res));
        this.terminologyService.getLetters().subscribe(res => this.letters.set(res));
    }

    loadTerms() {
        this.terminologyService.getTerms(this.filterMode(), this.selectedId())
            .subscribe(res => this.terms.set(res));
    }

    setMode(mode: 'category' | 'letter') {
        this.filterMode.set(mode);
        this.selectedId.set(null);
        this.updateUrl();
        this.loadTerms();
    }

    selectFilter(id: number) {
        this.selectedId.set(id);
        this.updateUrl();
        this.loadTerms();
    }

    updateUrl() {
        const queryParams: any = {};
        if (this.selectedId()) {
            if (this.filterMode() === 'category') {
                queryParams.categoryId = this.selectedId();
                queryParams.letterId = null;
            } else {
                queryParams.letterId = this.selectedId();
                queryParams.categoryId = null;
            }
        }

        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: queryParams,
            queryParamsHandling: 'merge' // keeps other params if any
        });
    }

    trackById(index: number, item: any): number {
        return item.id;
    }
}
