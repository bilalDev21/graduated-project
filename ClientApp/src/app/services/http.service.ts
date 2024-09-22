import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IRegister } from '../interfaces/Register';
import { Observable } from 'rxjs';
import { an } from '@fullcalendar/core/internal-common';
import { IRequest } from '../interfaces/Request';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl = "https://localhost:7162";
  http = inject(HttpClient);

  constructor() { }

  //Event
  getEvents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/api/Event');
  }

  // Request
  CreatRequest(request:IRequest): Observable<any>{
    return this.http.post<IRequest>(this.apiUrl + '/api/Request', request);
  }
}