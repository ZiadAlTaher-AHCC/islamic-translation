import { Component, OnInit, inject, effect } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardGridContainerComponent } from '../components/card-grid-container/card-grid-container.component';
import { CardItem } from '../models/card-item.model';
import { TranslationService } from '../core/services/translation.service';
import { PapersDataService } from '../core/services/papers-data.service';
import { Paper } from '../models/paper.model';
@Component({
  selector: 'app-papers',
  standalone: true,
  imports: [CommonModule, CardGridContainerComponent],
  templateUrl: './papers.component.html',
  styleUrl: './papers.component.css'
})
export class PapersComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private papersService = inject(PapersDataService);
  public translationService = inject(TranslationService);

  // Filtered items based on categoryId
  filteredItems: CardItem[] = [];

  // Static page header key
  pageHeaderKey: string = 'PAGES.PAPERS'; // Updated to match new structure if necessary, or keep old if 'PAGES.PAPERS' is correct. User provided PAPERS block in previous steps, so let's stick to consistent naming if possible, but user asked for PAPERS in EN/AR json.

  // Dynamic sub-header key for category
  pageSubHeaderKey?: string;

  // Store all papers to re-filter when language changes
  private allPapers: Paper[] = [];

  constructor() {
    // Effect to re-map items when language changes signal updates
    effect(() => {
      const lang = this.translationService.currentLang();
      // Trigger re-mapping
      this.applyFilter(this.currentCategoryId);
    });
  }

  private currentCategoryId?: number;

  ngOnInit(): void {
    // Load all papers first
    this.papersService.getPapers().subscribe(papers => {
      this.allPapers = papers;

      // Subscribe to query parameters after data is loaded
      this.route.queryParams.subscribe(params => {
        const categoryId = params['categoryId'];
        this.currentCategoryId = categoryId ? +categoryId : undefined;
        this.applyFilter(this.currentCategoryId);
      });
    });
  }

  private applyFilter(categoryId?: number) {
    let papersToShow = this.allPapers;

    if (categoryId) {
      papersToShow = this.allPapers.filter(p => p.paperLanguageId === categoryId);
      this.pageSubHeaderKey = this.getCategoryNameKey(categoryId);
    } else {
      this.pageSubHeaderKey = undefined;
    }

    // Map to Card Items using the current language
    this.filteredItems = papersToShow.map(p =>
      this.papersService.mapToCard(p, this.translationService.currentLang())
    );
  }

  /**
   * Get the translation key for category name
   */
  private getCategoryNameKey(categoryId: number): string | undefined {
    const categoryKeys: { [key: number]: string } = {
      1: 'PAPERS.CATEGORIES.ARABIC',
      2: 'PAPERS.CATEGORIES.ENGLISH',
    };

    return categoryKeys[categoryId];
  }
}
