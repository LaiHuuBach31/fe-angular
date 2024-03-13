import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private apiServerUrl = environment.apiBaseUrl + '/color';

  constructor(private http: HttpClient) { }

  public getAllColor():Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/all`);
  }

  public getColor(keyword:any, pageNo:any = 1):Observable<any>{
    if(keyword != null){
      return this.http.get<any>(`${this.apiServerUrl}?keyword=${keyword}&pageNo=${pageNo}`);
    }
    return this.http.get<any>(`${this.apiServerUrl}?pageNo=${pageNo}`);
  }

  public getColorId(colorId : number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/${colorId}`);
  }

  public addColor(color : any):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}`, color);
  }

  public updateColor(colorId : number, color : any):Observable<any>{
    return this.http.put<any>(`${this.apiServerUrl}/${colorId}`, color);
  }

  public deleteColor(colorId : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/${colorId}`);
  }


}
