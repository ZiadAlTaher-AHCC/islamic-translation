import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SpecialistsCentersDataService } from '../../core/services/specialists-centers-data.service';
import { TranslationService } from '../../core/services/translation.service';
import { SpecialistsCenter } from '../../models/specialists-center.model';

@Component({
    selector: 'app-specialists-center-details',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './specialists-center-details.component.html',
    styleUrls: ['./specialists-center-details.component.css']
})
export class SpecialistsCenterDetailsComponent implements OnInit {
    private centersService = inject(SpecialistsCentersDataService);
    public translationService = inject(TranslationService);
    private route = inject(ActivatedRoute);

    center = signal<SpecialistsCenter | undefined>(undefined);

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            if (id) {
                this.loadCenter(Number(id));
            }
        });
    }

    loadCenter(id: number) {
        this.centersService.getCenterById(id).subscribe(c => {
            if (c) {
                this.center.set(c);
                this.centersService.incrementViewCount(id);
            }
        });
    }
}
