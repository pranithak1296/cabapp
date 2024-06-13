import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private signupUrl = 'https://example.com/api/signup'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  signup(userData: { username: string, email: string, password: string }): Observable<any> {
    return this.http.post<any>(this.signupUrl, userData);
  }
}
