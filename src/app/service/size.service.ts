import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root'
})
export class SizeService {
  private apiServerUrl = environment.apiBaseUrl + '/size';

  constructor(private http: HttpClient) { }

  public getAllSize():Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/all`);
  }

  public getSize(keyword:any, pageNo:any = 1):Observable<any>{
    if(keyword != null){
      return this.http.get<any>(`${this.apiServerUrl}?keyword=${keyword}&pageNo=${pageNo}`);
    }
    return this.http.get<any>(`${this.apiServerUrl}?pageNo=${pageNo}`);
  }

  public getSizeId(sizeId : number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/${sizeId}`);
  }

  public addSize(size : any):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}`, size);
  }

  public updateSize(sizeId : number, size : any):Observable<any>{
    return this.http.put<any>(`${this.apiServerUrl}/${sizeId}`, size);
  }

  public deleteSize(sizeId : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/${sizeId}`);
  }

}
