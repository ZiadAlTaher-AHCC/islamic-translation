import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { development } from '../../../environments/development';

@Injectable({
    providedIn: 'root'
})
export abstract class BaseApiService {
    protected http = inject(HttpClient);
    protected get baseUrl(): string {
        return development.apiUrl;
    }

    protected get<T>(path: string, params?: HttpParams): Observable<T> {
        return this.http.get<T>(`${this.baseUrl}/${path}`, { params });
    }

    protected post<T>(path: string, body: any, options?: { headers?: HttpHeaders }): Observable<T> {
        return this.http.post<T>(`${this.baseUrl}/${path}`, body, options);
    }

    protected put<T>(path: string, body: any): Observable<T> {
        return this.http.put<T>(`${this.baseUrl}/${path}`, body);
    }

    protected delete<T>(path: string): Observable<T> {
        return this.http.delete<T>(`${this.baseUrl}/${path}`);
    }
}
