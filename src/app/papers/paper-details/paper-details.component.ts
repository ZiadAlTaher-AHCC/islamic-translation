import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PapersDataService } from '../../core/services/papers-data.service';
import { TranslationService } from '../../core/services/translation.service';
import { Paper } from '../../models/paper.model';

@Component({
    selector: 'app-paper-details',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './paper-details.component.html',
    styleUrls: ['./paper-details.component.css']
})
export class PaperDetailsComponent implements OnInit {
    private papersService = inject(PapersDataService);
    public translationService = inject(TranslationService);
    private route = inject(ActivatedRoute);

    paper = signal<Paper | undefined>(undefined);

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            if (id) {
                this.loadPaper(Number(id));
            }
        });
    }

    loadPaper(id: number) {
        this.papersService.getPaperById(id).subscribe(p => {
            if (p) {
                this.paper.set(p);
                this.papersService.incrementViewCount(id);
            }
        });
    }
}
