import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardItem } from '../../models/card-item.model';
import { TranslationService } from '../../core/services/translation.service';


@Component({
    selector: 'app-card',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css'
})
export class CardComponent {
    @Input({ required: true }) card!: CardItem;

    translationService = inject(TranslationService);
    /**
     * Get truncated description based on whether image exists
     * With image: truncate to 40 characters
     * Without image: truncate to 50 characters
     */
    getTruncatedDescription(): string {
        const maxLength = this.card.imageUrl ? 40 : 50;

        if (this.card.description.length <= maxLength) {
            return this.card.description;
        }

        return this.card.description.substring(0, maxLength) + '...';
    }
    getTruncatedTitleAr(): string {
        const maxLength = this.card.imageUrl ? 40 : 50;

        if (this.card.titleAr.length <= maxLength) {
            return this.card.titleAr;
        }

        return this.card.titleAr.substring(0, maxLength) + '...';
    }
    getTruncatedTitleEn(): string {
        if (!this.card.titleEn) {
            this.card.titleEn = this.card.titleAr;
        }

        const maxLength = this.card.imageUrl ? 40 : 50;

        if (this.card.titleEn.length <= maxLength) {
            return this.card.titleEn;
        }

        return this.card.titleEn.substring(0, maxLength) + '...';
    }
}
