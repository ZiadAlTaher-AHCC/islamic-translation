import { Component } from '@angular/core';
import { CardGridContainerComponent } from '../components/card-grid-container/card-grid-container.component';
import { CardItem } from '../models/card-item.model';

@Component({
    selector: 'app-news-events',
    standalone: true,
    imports: [CardGridContainerComponent],
    templateUrl: './news-events.component.html',
    styleUrl: './news-events.component.css'
})
export class NewsEventsComponent {
    newsEvents: CardItem[] = [
        {
            titleEn: 'The Qurʾanic Linguistics Research Group Inaugural International Conference',
            titleAr: 'المؤتمر الدولي الأول لمجموعة أبحاث اللسانيات القرآنية',
            description: 'The Qurʾānic Linguistics Research Group (QLG) is delighted to announce that it will be hosting its Inaugural International Conference on Qurʾānic linguistics in collaboration with SOAS Centre of Islamic Studies. The conference will bring together academics worldwide to showcase the latest advances in Qur\'s linguistics research.',
            imageUrl: 'https://www.quran-earlyislam.com/local/cache-vignettes/L450xH148/5b67fd41a611717f2cc530644d0f66-ee633.jpg',
            navigationUrl: '/news-events/1'
        }
    ];
}
