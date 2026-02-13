import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://delorse-unstifled-domenica.ngrok-free.dev/auth';

  constructor(private http: HttpClient) {}

  register(data: any) {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  login(data: any) {
    // return this.http.post(`${this.baseUrl}/login`, data);/
    if (data.email === 'test@test.com' && data.password === '123456') {
      return of({
        token: 'fake-login-token-456',
        role: 'USER',
      }).pipe(delay(1000));
    }

    return throwError(() => ({
      error: 'Invalid credentials',
    }));
  }

  saveSession(token: string, role: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
  }

  logout() {
    localStorage.clear();
  }
}
