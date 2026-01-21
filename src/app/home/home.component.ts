import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeroSliderComponent } from '../components/hero-slider/hero-slider.component';
import { TranslationService } from '../core/services/translation.service';
import { ContactMessage } from '../models/contact-message.model';
import { ContactUsService } from '../core/services/contact-us.service';
import { NotificationService } from '../core/services/notification.service';
import { LoadingService } from '../core/services/loading.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroSliderComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  translationService = inject(TranslationService);
  private fb = inject(FormBuilder);
  private contactUsService = inject(ContactUsService);
  private notificationService = inject(NotificationService);
  public loadingService = inject(LoadingService);

  contactForm: FormGroup;

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmitContact(): void {
    if (this.contactForm.invalid) {
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
      return;
    }

    const contactData: ContactMessage = {
      ...this.contactForm.value,
      isActive: true
    };

    this.contactUsService.sendMessage(contactData).subscribe({
      next: () => {
        const successMsg = this.translationService.translations()['HOME']?.['CONTACT_SUCCESS'] || 'Message sent successfully!';
        this.notificationService.success(successMsg);
        this.contactForm.reset();
      },
      error: (err) => {
        // Global ErrorInterceptor handles the notification
        console.error('Contact Us Error:', err);
      }
    });
  }
}
