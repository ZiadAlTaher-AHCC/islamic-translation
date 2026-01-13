import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsEventsComponent } from './news-events/news-events.component';
import { LibraryComponent } from './library/library.component';
import { PapersComponent } from './papers/papers.component';
import { AboutComponent } from './about/about.component';
import { QuranTranslationComponent } from './quran-translation/quran-translation.component';

import { HadithTranslationComponent } from './hadith-translation/hadith-translation.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'news-events', component: NewsEventsComponent },
    { path: 'library', component: LibraryComponent },
    { path: 'library/books/:id', loadComponent: () => import('./library/book-details/book-details.component').then(m => m.BookDetailsComponent) },
    { path: 'specialists-centers', loadComponent: () => import('./specialists-centers/specialists-centers-list/specialists-centers-list.component').then(m => m.SpecialistsCentersListComponent) },
    { path: 'specialists-centers/:id', loadComponent: () => import('./specialists-centers/specialists-center-details/specialists-center-details.component').then(m => m.SpecialistsCenterDetailsComponent) },
    { path: 'papers', component: PapersComponent },
    { path: 'papers/:id', loadComponent: () => import('./papers/paper-details/paper-details.component').then(m => m.PaperDetailsComponent) },
    { path: 'quran-translation', component: QuranTranslationComponent },
    { path: 'hadith-translation', component: HadithTranslationComponent },
    { path: 'terminology', loadComponent: () => import('./terminology/terminology-list/terminology-list.component').then(m => m.TerminologyListComponent) },
    { path: 'terminology/:id', loadComponent: () => import('./terminology/terminology-details/terminology-details.component').then(m => m.TerminologyDetailsComponent) },
    { path: 'about', component: AboutComponent },
    { path: 'news-events/:id', loadComponent: () => import('./news-events/new-details/new-details.component').then(m => m.NewDetailsComponent) },
    { path: '**', redirectTo: '' }
];
