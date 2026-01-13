import { Component, OnInit, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGridContainerComponent } from '../../components/card-grid-container/card-grid-container.component';
import { CardItem } from '../../models/card-item.model';
import { TranslationService } from '../../core/services/translation.service';
import { SpecialistsCentersDataService } from '../../core/services/specialists-centers-data.service';
import { SpecialistsCenter } from '../../models/specialists-center.model';

@Component({
    selector: 'app-specialists-centers-list',
    standalone: true,
    imports: [CommonModule, CardGridContainerComponent],
    templateUrl: './specialists-centers-list.component.html',
    styleUrl: './specialists-centers-list.component.css'
})
export class SpecialistsCentersListComponent implements OnInit {
    public translationService = inject(TranslationService);
    private centersService = inject(SpecialistsCentersDataService);

    // Items to display
    items: CardItem[] = [];

    // Header Key
    pageHeaderKey: string = 'PAGES.SPECIALISTS_CENTER';

    private allCenters: SpecialistsCenter[] = [];

    constructor() {
        // Effect to logic when language changes
        effect(() => {
            const lang = this.translationService.currentLang();
            this.mapItems();
        });
    }

    ngOnInit(): void {
        this.centersService.getCenters().subscribe(centers => {
            this.allCenters = centers;
            this.mapItems();
        });
    }

    private mapItems() {
        this.items = this.allCenters.map(c =>
            this.centersService.mapToCard(c, this.translationService.currentLang())
        );
    }
}
