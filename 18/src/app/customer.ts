import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private jsonUrl = 'assets/data/customers.json';

  constructor(private http: HttpClient) { }

  getGroupCustomers(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}