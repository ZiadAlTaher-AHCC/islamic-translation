import { Component, inject } from '@angular/core';
import { HeroSliderComponent } from '../components/hero-slider/hero-slider.component';
import { TranslationService } from '../core/services/translation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  translationService = inject(TranslationService);
}
