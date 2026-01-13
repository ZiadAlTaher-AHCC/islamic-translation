import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardItem } from '../../models/card-item.model';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css'
})
export class CardComponent {
    @Input({ required: true }) card!: CardItem ;

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
}
