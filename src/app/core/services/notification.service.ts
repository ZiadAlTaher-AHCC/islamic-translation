import { Injectable, signal } from '@angular/core';

export interface ToastNotification {
    id: number;
    message: string;
    type: 'success' | 'error' | 'info';
    duration?: number;
}

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    notifications = signal<ToastNotification[]>([]);
    private counter = 0;

    show(message: string, type: 'success' | 'error' | 'info' = 'info', duration: number = 3000): void {
        const id = this.counter++;
        const notification: ToastNotification = { id, message, type, duration };

        this.notifications.update(current => [...current, notification]);

        if (duration > 0) {
            setTimeout(() => {
                this.remove(id);
            }, duration);
        }
    }

    success(message: string, duration: number = 3000): void {
        this.show(message, 'success', duration);
    }

    error(message: string, duration: number = 3000): void {
        this.show(message, 'error', duration);
    }

    remove(id: number): void {
        this.notifications.update(current => current.filter(n => n.id !== id));
    }
}
