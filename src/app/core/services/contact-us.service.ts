import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import { ContactMessage } from '../../models/contact-message.model';

@Injectable({
    providedIn: 'root'
})
export class ContactUsService extends BaseApiService {

    sendMessage(message: ContactMessage): Observable<void> {
        // console.log(message);
        return this.post<void>('api/ContactUs/Create', message);
    }
}
