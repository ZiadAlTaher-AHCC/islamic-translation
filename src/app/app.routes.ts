import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsEventsComponent } from './news-events/news-events.component';
import { ArticlesComponent } from './articles/articles.component';
import { LibraryComponent } from './library/library.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'news-events', component: NewsEventsComponent },
    { path: 'articles', component: ArticlesComponent },
    { path: 'library', component: LibraryComponent },
    { path: '**', redirectTo: '' }
];
