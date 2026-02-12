import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'https://delorse-unstifled-domenica.ngrok-free.dev/admin';

  constructor(private http: HttpClient) {}

  private getHeaders() {
    const token = localStorage.getItem('token');

    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'ngrok-skip-browser-warning': 'true'
    });
  }

  getCustomers() {
    return this.http.get(`${this.baseUrl}/all`, {
      headers: this.getHeaders()
    });
  }

  addCustomer(data: any) {
    return this.http.post(`${this.baseUrl}/`, data, {
      headers: this.getHeaders()
    });
  }

  updateCustomer(id: number, data: any) {
    return this.http.put(`${this.baseUrl}/${id}`, data, {
      headers: this.getHeaders()
    });
  }

  deleteCustomer(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`, {
      headers: this.getHeaders()
    });
  }
}
