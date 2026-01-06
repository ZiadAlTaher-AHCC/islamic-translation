import { Component } from '@angular/core';
import { CardGridContainerComponent } from '../components/card-grid-container/card-grid-container.component';
import { CardItem } from '../models/card-item.model';

@Component({
    selector: 'app-articles',
    standalone: true,
    imports: [CardGridContainerComponent],
    templateUrl: './articles.component.html',
    styleUrl: './articles.component.css'
})
export class ArticlesComponent {
    articles: CardItem[] = [
        {
            title: 'Understanding the Pillars of Islam',
            description: 'A comprehensive guide to the five pillars of Islam and their significance in the life of every Muslim. Learn about Shahada, Salat, Zakat, Sawm, and Hajj in detail.',
            imageUrl: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=500',
            navigationUrl: '/articles/1'
        },
        {
            title: 'The Life of Prophet Muhammad (PBUH)',
            description: 'Explore the inspiring biography of Prophet Muhammad (peace be upon him), from his early life in Mecca to the establishment of the Islamic state in Medina.',
            imageUrl: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=500',
            navigationUrl: '/articles/2'
        },
        {
            title: 'Islamic Ethics in Modern Business',
            description: 'How Islamic principles and ethics can guide business practices in the contemporary world, ensuring fairness, honesty, and social responsibility.',
            navigationUrl: '/articles/3'
        },
        {
            title: 'The Wisdom of the Quran',
            description: 'Discover the timeless wisdom and guidance found in the Holy Quran, exploring its literary excellence, scientific insights, and moral teachings.',
            imageUrl: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=500',
            navigationUrl: '/articles/4'
        },
        {
            title: 'Women in Islamic History',
            description: 'Celebrating the remarkable contributions of Muslim women throughout history, from scholars and warriors to poets and leaders.',
            imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500',
            navigationUrl: '/articles/5'
        },
        {
            title: 'Islamic Architecture Through Ages',
            description: 'Journey through the magnificent architectural achievements of Islamic civilization, from the Dome of the Rock to the Alhambra palace.',
            imageUrl: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=500',
            navigationUrl: '/articles/6'
        },
        {
            title: 'The Golden Age of Islamic Science',
            description: 'Exploring the revolutionary scientific achievements during the Islamic Golden Age and their lasting impact on modern civilization.',
            navigationUrl: '/articles/7'
        },
        {
            title: 'Prayer: The Spiritual Connection',
            description: 'Understanding the deep spiritual significance of Salat (prayer) and how it strengthens the bond between the believer and Allah.',
            imageUrl: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=500',
            navigationUrl: '/articles/8'
        },
        {
            title: 'Islamic Finance Principles',
            description: 'An introduction to Islamic banking and finance, explaining concepts like Riba prohibition, risk-sharing, and ethical investment.',
            imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500',
            navigationUrl: '/articles/9'
        },
        {
            title: 'The Art of Islamic Calligraphy',
            description: 'Appreciating the beauty and spiritual depth of Arabic calligraphy as a unique art form in Islamic culture and tradition.',
            imageUrl: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=500',
            navigationUrl: '/articles/10'
        },
        {
            title: 'Ramadan: Month of Blessings',
            description: 'Understanding the spiritual, physical, and social benefits of fasting during the holy month of Ramadan and its transformative power.',
            navigationUrl: '/articles/11'
        },
        {
            title: 'Islamic Contributions to Mathematics',
            description: 'How Muslim mathematicians developed algebra, algorithms, and the Arabic numeral system that revolutionized mathematics worldwide.',
            imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500',
            navigationUrl: '/articles/12'
        },
        {
            title: 'The Concept of Jihad in Islam',
            description: 'Clarifying the true meaning of Jihad as a struggle for self-improvement and defense of faith, dispelling common misconceptions.',
            navigationUrl: '/articles/13'
        },
        {
            title: 'Islamic Family Values',
            description: 'Exploring the Islamic perspective on family structure, parental rights, children\'s education, and maintaining strong family bonds.',
            imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500',
            navigationUrl: '/articles/14'
        },
        {
            title: 'The Quran and Modern Science',
            description: 'Examining scientific facts mentioned in the Quran centuries before modern discoveries, from embryology to cosmology.',
            imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500',
            navigationUrl: '/articles/15'
        },
        {
            title: 'Islamic Views on Social Justice',
            description: 'How Islam promotes equality, human rights, and social justice through principles of compassion, charity, and fairness.',
            navigationUrl: '/articles/16'
        },
        {
            title: 'The Hajj Pilgrimage Experience',
            description: 'A spiritual journey through the rituals and significance of Hajj, one of the most profound experiences in a Muslim\'s life.',
            imageUrl: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=500',
            navigationUrl: '/articles/17'
        },
        {
            title: 'Environmental Ethics in Islam',
            description: 'Islamic teachings on environmental stewardship, conservation, and our responsibility as caretakers of Earth\'s resources.',
            imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500',
            navigationUrl: '/articles/18'
        }
    ];
}
