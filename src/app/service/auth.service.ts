import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap, throwError } from 'rxjs';
import { environment } from 'src/env/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  onLogin(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/auth/login`, data);
  }

  onLogout():Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/logout`, null);
  }

  hasRoles(){
    
  }

}
