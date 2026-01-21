import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { NotificationService } from '../services/notification.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
    const notificationService = inject(NotificationService);

    return next(req).pipe(
        catchError((error: HttpErrorResponse) => {
            let errorMessage = 'An unexpected error occurred. Please try again.';

            if (error.error instanceof ErrorEvent) {
                // Client-side error
                errorMessage = error.error.message;
            } else {
                // Server-side error
                // Priority: error.error.errorMessage > error.error.message > error.message
                if (error.error && typeof error.error === 'object') {
                    const apiError = error.error as any;
                    if (apiError.errorMessage) {
                        errorMessage = apiError.errorMessage;
                    } else if (apiError.message) {
                        errorMessage = apiError.message;
                    }
                } else if (error.message) {
                    // Fallback to generic HTTP status message if no body
                    // But usually error.message is technical "Http failure...", so we might want to stick to default or being simpler
                    // Let's keep the default for status codes unless specific requirements arise
                    // errorMessage = error.message; 
                }
            }

            // Show notification
            notificationService.error(errorMessage);

            // Re-throw to let components handle specific logic if needed
            return throwError(() => error);
        })
    );
};
