import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class AuthService {
 
  private loginUrl = 'https://example.com/api/login';


  constructor(private http: HttpClient) { }

   login(userData: { username: string, password: string }): Observable<any> {
      return this.http.post<any>(this.loginUrl, userData);
    }

}


