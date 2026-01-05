import { Component, OnInit, OnDestroy, inject, signal, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslationService } from '../../core/services/translation.service';

@Component({
    selector: 'app-hero-slider',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './hero-slider.component.html',
    styleUrl: './hero-slider.component.css'
})
export class HeroSliderComponent implements OnInit, OnDestroy {
    translationService = inject(TranslationService);
    platformId = inject(PLATFORM_ID);

    currentSlide = signal(0);
    totalSlides = 3;
    intervalId: any;

    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.startTimer();
        }
    }

    ngOnDestroy() {
        this.stopTimer();
    }

    startTimer() {
        this.stopTimer();
        this.intervalId = setInterval(() => {
            this.nextSlide();
        }, 10000); // 10 seconds
    }

    stopTimer() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    nextSlide() {
        this.currentSlide.update(c => (c + 1) % this.totalSlides);
    }

    prevSlide() {
        this.currentSlide.update(c => (c - 1 + this.totalSlides) % this.totalSlides);
        this.startTimer(); // Reset timer on manual interaction
    }

    goToSlide(index: number) {
        this.currentSlide.set(index);
        this.startTimer(); // Reset timer on manual interaction
    }
}
