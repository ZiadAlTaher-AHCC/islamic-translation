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
            title: 'Annual Islamic Conference 2026',
            description: 'Join us for the largest gathering of Islamic scholars and community leaders from around the world. This year\'s conference will focus on contemporary challenges facing Muslims in the modern era.',
            imageUrl: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=500',
            navigationUrl: '/news-events/1'
        },
        {
            title: 'New Translation Project Launched',
            description: 'We are excited to announce the launch of our new Quran translation project in collaboration with renowned scholars. This initiative aims to provide accurate translations in 15 new languages.',
            imageUrl: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=500',
            navigationUrl: '/news-events/2'
        },
        {
            title: 'Ramadan Schedule Announced',
            description: 'The complete schedule for Ramadan prayers, Iftar times, and special programs has been released. Please check the detailed timetable for your city and make necessary arrangements.',
            imageUrl: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=500',
            navigationUrl: '/news-events/3'
        },
        {
            title: 'Community Outreach Program',
            description: 'Our community outreach program has reached over 10,000 families this year, providing educational resources, food assistance, and spiritual guidance to those in need.',
            navigationUrl: '/news-events/4'
        },
        {
            title: 'Youth Leadership Summit',
            description: 'Empowering the next generation of Muslim leaders through education, mentorship, and community engagement. Applications are now open for participants aged 16-25.',
            imageUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500',
            navigationUrl: '/news-events/5'
        },
        {
            title: 'Quran Memorization Competition',
            description: 'Annual Quran memorization competition for students of all ages. Prizes and certificates will be awarded to top performers in different categories.',
            imageUrl: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=500',
            navigationUrl: '/news-events/6'
        },
        {
            title: 'Islamic Art Exhibition',
            description: 'Explore the beauty of Islamic art through calligraphy, geometric patterns, and architectural designs. The exhibition features works from local and international artists.',
            imageUrl: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=500',
            navigationUrl: '/news-events/7'
        },
        {
            title: 'Scholar Workshop Series',
            description: 'Monthly workshop series featuring distinguished Islamic scholars discussing various topics including jurisprudence, theology, and contemporary issues.',
            navigationUrl: '/news-events/8'
        },
        {
            title: 'Charity Drive Success',
            description: 'Thanks to your generous donations, we have successfully raised over $500,000 for humanitarian relief efforts in disaster-affected regions around the world.',
            imageUrl: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=500',
            navigationUrl: '/news-events/9'
        },
        {
            title: 'Online Learning Platform Launch',
            description: 'Access hundreds of Islamic courses, lectures, and resources from anywhere in the world through our new online learning platform. Early bird registration now open.',
            imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500',
            navigationUrl: '/news-events/10'
        },
        {
            title: 'Interfaith Dialogue Session',
            description: 'Building bridges of understanding and mutual respect through open dialogue with leaders and members of different faith communities in our city.',
            navigationUrl: '/news-events/11'
        },
        {
            title: 'Women\'s Empowerment Workshop',
            description: 'Special workshop series dedicated to empowering Muslim women through education, skill development, and leadership training programs.',
            imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500',
            navigationUrl: '/news-events/12'
        },
        {
            title: 'Hajj Preparation Seminar',
            description: 'Comprehensive seminar covering all aspects of Hajj preparation including rituals, logistics, health considerations, and spiritual readiness.',
            imageUrl: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=500',
            navigationUrl: '/news-events/13'
        },
        {
            title: 'Eid Celebration Planning',
            description: 'Join the organizing committee for this year\'s Eid celebration. We need volunteers to help with event planning, decorations, and community coordination.',
            navigationUrl: '/news-events/14'
        },
        {
            title: 'Islamic Finance Seminar',
            description: 'Learn about ethical investment, halal banking, and Islamic financial principles from industry experts. Open to all community members interested in finance.',
            imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500',
            navigationUrl: '/news-events/15'
        },
        {
            title: 'Children\'s Islamic School Opening',
            description: 'New Islamic school for children opening next semester. Registration is now open for students aged 5-12. Limited spots available.',
            imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500',
            navigationUrl: '/news-events/16'
        },
        {
            title: 'Book Club Launch',
            description: 'Monthly book club focusing on Islamic literature, history, and contemporary writings by Muslim authors. First meeting scheduled for next month.',
            navigationUrl: '/news-events/17'
        },
        {
            title: 'Volunteer Appreciation Event',
            description: 'Special event to recognize and celebrate our amazing volunteers who dedicate their time and effort to serve the community throughout the year.',
            imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500',
            navigationUrl: '/news-events/18'
        },
        {
            title: 'Health and Wellness Fair',
            description: 'Free health screenings, wellness workshops, and consultations with healthcare professionals. Open to all community members and their families.',
            imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500',
            navigationUrl: '/news-events/19'
        },
        {
            title: 'Tafsir Study Circle',
            description: 'Weekly Quran interpretation study circle led by Sheikh Ahmed. Deep dive into selected chapters with focus on understanding, context, and practical application.',
            navigationUrl: '/news-events/20'
        }
    ];
}
