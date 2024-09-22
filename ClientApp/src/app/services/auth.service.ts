import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegister } from '../interfaces/Register';
import { ILogin } from '../interfaces/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  apiUrl = "https://localhost:7162";
  http = inject(HttpClient);

  login(user:ILogin): Observable<any> {
    return this.http.post<ILogin>(this.apiUrl + '/api/Auth/token', user);
  }
 
  RegisterUser(User:IRegister): Observable<any> {
    return this.http.post<IRegister>(this.apiUrl + '/api/Auth/register', User );
  }

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userInfo');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken');
    return token != null;
  }

  getToken(){
    return localStorage.getItem('authToken');
  }
}
