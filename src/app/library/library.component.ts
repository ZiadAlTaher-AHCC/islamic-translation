import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardGridContainerComponent } from '../components/card-grid-container/card-grid-container.component';
import { CardItem } from '../models/card-item.model';
import { TranslationService } from '../core/services/translation.service';

@Component({
    selector: 'app-library',
    standalone: true,
    imports: [CommonModule, CardGridContainerComponent],
    templateUrl: './library.component.html',
    styleUrl: './library.component.css'
})
export class LibraryComponent implements OnInit {
    private route = inject(ActivatedRoute);
    translationService = inject(TranslationService);

    // All library items
    allLibraryItems: CardItem[] = [
        // Category 1: Quran Books
        {
            title: 'Tafsir Ibn Kathir - Complete Edition',
            description: 'Comprehensive Quranic exegesis by the renowned Islamic scholar Ismail Ibn Kathir. This work is considered one of the most authentic tafsir texts.',
            imageUrl: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=500',
            navigationUrl: '/library/item/1',
            categoryId: 1,
            categoryName: 'Quran Books'
        },
        {
            title: 'The Noble Quran Translation',
            description: 'English translation of the meanings of the Noble Quran with extensive footnotes and commentary for better understanding.',
            imageUrl: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=500',
            navigationUrl: '/library/item/2',
            categoryId: 1,
            categoryName: 'Quran Books'
        },
        {
            title: 'Sciences of the Quran',
            description: 'An introduction to Quranic sciences including revelation, compilation, recitation, and interpretation methodologies.',
            navigationUrl: '/library/item/3',
            categoryId: 1,
            categoryName: 'Quran Books'
        },
        {
            title: 'Tafsir Al-Jalalayn',
            description: 'Classical tafsir written by two Jalals - Jalal ad-Din al-Mahalli and Jalal ad-Din as-Suyuti. Known for its concise and clear explanations.',
            imageUrl: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=500',
            navigationUrl: '/library/item/4',
            categoryId: 1,
            categoryName: 'Quran Books'
        },
        {
            title: 'The History of the Quranic Text',
            description: 'Scholarly work documenting the preservation and compilation of the Quran from revelation to modern times.',
            navigationUrl: '/library/item/5',
            categoryId: 1,
            categoryName: 'Quran Books'
        },

        // Category 2: Hadith Books
        {
            title: 'Sahih al-Bukhari',
            description: 'The most authentic collection of hadith, compiled by Imam Muhammad ibn Ismail al-Bukhari. Contains over 7,000 hadith with chains of narration.',
            imageUrl: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=500',
            navigationUrl: '/library/item/6',
            categoryId: 2,
            categoryName: 'Hadith Books'
        },
        {
            title: 'Sahih Muslim',
            description: 'Second most authentic hadith collection, compiled by Imam Muslim ibn al-Hajjaj. Known for its strict criteria in hadith authentication.',
            imageUrl: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=500',
            navigationUrl: '/library/item/7',
            categoryId: 2,
            categoryName: 'Hadith Books'
        },
        {
            title: 'Riyadh as-Salihin',
            description: 'A collection of hadith compiled by Imam an-Nawawi, organized by topics related to piety, good character, and Islamic ethics.',
            navigationUrl: '/library/item/8',
            categoryId: 2,
            categoryName: 'Hadith Books'
        },
        {
            title: 'Sunan Abu Dawud',
            description: 'One of the six major hadith collections focusing on legal hadith and Islamic jurisprudence.',
            imageUrl: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=500',
            navigationUrl: '/library/item/9',
            categoryId: 2,
            categoryName: 'Hadith Books'
        },
        {
            title: 'The Forty Hadith of Imam Nawawi',
            description: 'A concise collection of 42 foundational hadith covering essential aspects of Islamic faith and practice.',
            navigationUrl: '/library/item/10',
            categoryId: 2,
            categoryName: 'Hadith Books'
        },

        // Category 3: Islamic History
        {
            title: 'The Sealed Nectar - Ar-Raheeq Al-Makhtum',
            description: 'Biography of Prophet Muhammad (peace be upon him) by Safiur Rahman Mubarakpuri. Winner of first prize by the Muslim World League.',
            imageUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500',
            navigationUrl: '/library/item/11',
            categoryId: 3,
            categoryName: 'Islamic History'
        },
        {
            title: 'The History of Islam - 3 Volume Set',
            description: 'Comprehensive history of Islamic civilization from its origins to modern times, covering political, social, and cultural developments.',
            imageUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500',
            navigationUrl: '/library/item/12',
            categoryId: 3,
            categoryName: 'Islamic History'
        },
        {
            title: 'The Rightly Guided Caliphs',
            description: 'Detailed accounts of the lives and contributions of the four Rightly Guided Caliphs: Abu Bakr, Umar, Uthman, and Ali.',
            navigationUrl: '/library/item/13',
            categoryId: 3,
            categoryName: 'Islamic History'
        },
        {
            title: 'Islamic Civilization in Thirty Lives',
            description: 'Biographical sketches of influential Muslims who shaped Islamic civilization across various fields.',
            imageUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500',
            navigationUrl: '/library/item/14',
            categoryId: 3,
            categoryName: 'Islamic History'
        },
        {
            title: 'The Golden Age of Islam',
            description: 'Exploration of scientific, cultural, and intellectual achievements during the Islamic Golden Age.',
            navigationUrl: '/library/item/15',
            categoryId: 3,
            categoryName: 'Islamic History'
        },

        // Category 4: Islamic Jurisprudence
        {
            title: 'Fiqh Us-Sunnah',
            description: 'Comprehensive guide to Islamic jurisprudence based on the Quran and Sunnah, written by Sayyid Sabiq.',
            imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500',
            navigationUrl: '/library/item/16',
            categoryId: 4,
            categoryName: 'Islamic Jurisprudence'
        },
        {
            title: 'The Fundamentals of Islamic Jurisprudence',
            description: 'Introduction to usul al-fiqh, the principles and methodology of Islamic legal reasoning.',
            imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500',
            navigationUrl: '/library/item/17',
            categoryId: 4,
            categoryName: 'Islamic Jurisprudence'
        },
        {
            title: 'Islamic Finance Principles',
            description: 'Comprehensive guide to Islamic financial principles including halal banking, investment, and business ethics.',
            navigationUrl: '/library/item/18',
            categoryId: 4,
            categoryName: 'Islamic Jurisprudence'
        },
        {
            title: 'Bidayat al-Mujtahid',
            description: 'Comparative fiqh work by Ibn Rushd examining different schools of Islamic jurisprudence.',
            imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500',
            navigationUrl: '/library/item/19',
            categoryId: 4,
            categoryName: 'Islamic Jurisprudence'
        },
        {
            title: 'Contemporary Issues in Islamic Law',
            description: 'Modern application of Islamic legal principles to contemporary challenges and issues.',
            navigationUrl: '/library/item/20',
            categoryId: 4,
            categoryName: 'Islamic Jurisprudence'
        }
    ];

    // Filtered items based on categoryId
    filteredItems: CardItem[] = [];

    // Static page header key
    pageHeaderKey: string = 'PAGES.LIBRARY';

    // Dynamic sub-header key for category
    pageSubHeaderKey?: string;

    ngOnInit(): void {
        // Subscribe to query parameters
        this.route.queryParams.subscribe(params => {
            const categoryId = params['categoryId'];

            if (categoryId) {
                // Convert to number and filter
                const categoryIdNum = +categoryId;
                this.filteredItems = this.allLibraryItems.filter(
                    item => item.categoryId === categoryIdNum
                );

                // Set sub-header with category name
                if (this.filteredItems.length > 0) {
                    this.pageSubHeaderKey = this.getCategoryNameKey(categoryIdNum);
                } else {
                    // No items found for this category, show all
                    this.filteredItems = this.allLibraryItems;
                    this.pageSubHeaderKey = undefined;
                }
            } else {
                // No category filter, show all items
                this.filteredItems = this.allLibraryItems;
                this.pageSubHeaderKey = undefined;
            }
        });
    }

    /**
     * Get the translation key for category name
     */
    private getCategoryNameKey(categoryId: number): string | undefined {
        const categoryKeys: { [key: number]: string } = {
            1: 'LIBRARY.CATEGORIES.QURAN_BOOKS',
            2: 'LIBRARY.CATEGORIES.HADITH_BOOKS',
            3: 'LIBRARY.CATEGORIES.ISLAMIC_HISTORY',
            4: 'LIBRARY.CATEGORIES.ISLAMIC_JURISPRUDENCE'
        };

        return categoryKeys[categoryId];
    }
}
