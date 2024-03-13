import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl + '/user';

  constructor(private http: HttpClient) { }

  public getAllUser():Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/all`);
  }

  public getUser(keyword:any, pageNo:any = 1):Observable<any>{
    if(keyword != null){
      return this.http.get<any>(`${this.apiServerUrl}?keyword=${keyword}&pageNo=${pageNo}`);
    }
    return this.http.get<any>(`${this.apiServerUrl}?pageNo=${pageNo}`);
  }

  public getUserId(userId : number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/${userId}`);
  }

  public addUser(user : any):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}`, user);
  }

  public updateUser(userId : number, user : any):Observable<any>{
    return this.http.put<any>(`${this.apiServerUrl}/${userId}`, user);
  }

  public deleteUser(userId : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/${userId}`);
  }
}
