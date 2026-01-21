import { Component, ElementRef, HostListener, inject, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../core/services/translation.service';
@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive, FormsModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    translationService = inject(TranslationService);
    router = inject(Router);
    isMenuOpen = signal(false);
    isOpen = false;
    searchText = '';


    @ViewChild('dropdown') dropdown!: ElementRef;
    @ViewChild('searchInput') searchInput!: ElementRef;

    toggleDropdown(event: Event) {
        event.stopPropagation(); // يمنع إغلاق الـ dropdown فورًا
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            setTimeout(() => {
                if (this.searchInput) this.searchInput.nativeElement.focus();
            }, 10);
        }
    }

    onSearch() {
        if (this.searchText.trim()) {
            this.router.navigate(['/search'], { queryParams: { q: this.searchText } });
            this.isOpen = false;
            this.searchText = '';
        }
    }

    @HostListener('document:click', ['$event'])
    onClickOutside(event: Event) {
        if (this.isOpen && !this.dropdown.nativeElement.contains(event.target)) {
            this.isOpen = false;
        }
    }

    toggleMenu() {
        this.isMenuOpen.update(v => !v);
    }

    closeMenu() {
        this.isMenuOpen.set(false);
    }

    toggleLanguage() {
        this.translationService.toggleLanguage();
        this.closeMenu();
    }
}
