import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // Still good to have if we refactor away from @for later, but mostly for ngClass if needed
import { NotificationService } from '../../core/services/notification.service';

@Component({
    selector: 'app-notification',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="notification-container">
      @for (toast of notificationService.notifications(); track toast.id) {
        <div class="toast" [class]="toast.type" (click)="notificationService.remove(toast.id)">
          <div class="icon">
            @if (toast.type === 'success') { ✓ }
            @else if (toast.type === 'error') { ✕ }
            @else { ℹ }
          </div>
          <div class="message">{{ toast.message }}</div>
        </div>
      }
    </div>
  `,
    styles: [`
    .notification-container {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 10000;
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-width: 350px;
    }

    /* RTL Support */
    :host-context([dir="rtl"]) .notification-container {
      right: auto;
      left: 20px;
    }

    .toast {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px;
      border-radius: 8px;
      background: white;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      cursor: pointer;
      animation: slideIn 0.3s ease-out;
      overflow: hidden;
      min-width: 300px;
    }

    .toast.success { border-left: 5px solid #4caf50; }
    .toast.error { border-left: 5px solid #f44336; }
    .toast.info { border-left: 5px solid #2196f3; }

    /* RTL specific border */
    :host-context([dir="rtl"]) .toast {
      border-left: none;
      border-right: 5px solid;
    }
    :host-context([dir="rtl"]) .toast.success { border-right-color: #4caf50; }
    :host-context([dir="rtl"]) .toast.error { border-right-color: #f44336; }
    :host-context([dir="rtl"]) .toast.info { border-right-color: #2196f3; }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      color: white;
      font-weight: bold;
      font-size: 14px;
    }

    .toast.success .icon { background: #4caf50; }
    .toast.error .icon { background: #f44336; }
    .toast.info .icon { background: #2196f3; }

    .message {
      font-size: 14px;
      color: #333;
      line-height: 1.4;
    }

    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }

    :host-context([dir="rtl"]) .toast {
      animation: slideInRtl 0.3s ease-out;
    }

    @keyframes slideInRtl {
      from { transform: translateX(-100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
  `]
})
export class NotificationComponent {
    notificationService = inject(NotificationService);
}
