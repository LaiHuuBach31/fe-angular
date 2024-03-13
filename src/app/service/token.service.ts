import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private apiServerUrl = environment.apiBaseUrl + '/token';

  constructor(private http: HttpClient) { }

  public getAllToken():Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/all`);
  }

  public getToken(keyword:any, pageNo:any = 1):Observable<any>{
    if(keyword != null){
      return this.http.get<any>(`${this.apiServerUrl}?keyword=${keyword}&pageNo=${pageNo}`);
    }
    return this.http.get<any>(`${this.apiServerUrl}?pageNo=${pageNo}`);
  }

  public getTokenId(tokenId : number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/${tokenId}`);
  }

  public addToken(token : any):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}`, token);
  }

  public updateToken(tokenId : number, token : any):Observable<any>{
    return this.http.put<any>(`${this.apiServerUrl}/${tokenId}`, token);
  }

  public deleteToken(tokenId : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/${tokenId}`);
  }
}
