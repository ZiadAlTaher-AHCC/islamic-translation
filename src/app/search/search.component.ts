import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslationService } from '../core/services/translation.service';
import { LibraryDataService } from '../core/services/library-data.service';
import { TerminologyDataService } from '../core/services/terminology-data.service';
import { QuranDataService } from '../core/services/quran-data.service';
import { Observable, of } from 'rxjs';
import { Book } from '../models/book.model';
import { Terminology } from '../models/terminology.models';
import { Ayah } from '../models/quran.models';

@Component({
    selector: 'app-search',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    route = inject(ActivatedRoute);
    translationService = inject(TranslationService);
    libraryService = inject(LibraryDataService);
    terminologyService = inject(TerminologyDataService);
    quranService = inject(QuranDataService);

    query: string = '';
    books$: Observable<Book[]> = of([]);
    terms$: Observable<Terminology[]> = of([]);
    quranResults: { ayah: Ayah, matches: string[] }[] = [];

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.query = params['q'] || '';
            if (this.query) {
                this.performSearch(this.query);
            }
        });
    }

    performSearch(query: string) {
        this.books$ = this.libraryService.searchBooks(query);
        this.terms$ = this.terminologyService.searchTerms(query);
        this.quranResults = this.quranService.searchAyahs(query);
    }
}
