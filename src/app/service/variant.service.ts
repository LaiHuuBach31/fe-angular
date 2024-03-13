import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root'
})
export class VariantService {

  private apiServerUrl = environment.apiBaseUrl + '/variant';

  constructor(private http: HttpClient) { }

  public getAllVariant():Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/all`);
  }

  public getVariant(keyword:any, pageNo:any = 1):Observable<any>{
    if(keyword != null){
      return this.http.get<any>(`${this.apiServerUrl}?keyword=${keyword}&pageNo=${pageNo}`);
    }
    return this.http.get<any>(`${this.apiServerUrl}?pageNo=${pageNo}`);
  }

  public getVariantId(variantId : number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/${variantId}`);
  }

  public addVariant(variant : any):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}`, variant);
  }

  public updateVariant(variantId : number, variant : any):Observable<any>{
    return this.http.put<any>(`${this.apiServerUrl}/${variantId}`, variant);
  }

  public deleteVariant(variantId : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/${variantId}`);
  }
}
