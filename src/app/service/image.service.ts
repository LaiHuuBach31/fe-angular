import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiServerUrl = environment.apiBaseUrl + '/image';

  constructor(private http: HttpClient) { }

  public getAllImage():Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/all`);
  }

  public getImage(keyword:any, pageNo:any = 1):Observable<any>{
    if(keyword != null){
      return this.http.get<any>(`${this.apiServerUrl}?keyword=${keyword}&pageNo=${pageNo}`);
    }
    return this.http.get<any>(`${this.apiServerUrl}?pageNo=${pageNo}`);
  }

  public getImageId(imageId : number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/get/${imageId}`);
  }

  public addImage(image : any):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}`, image);
  }

  public updateImage(imageId : number, image : any):Observable<any>{
    return this.http.put<any>(`${this.apiServerUrl}/${imageId}`, image);
  }

  public deleteImage(imageId : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/${imageId}`);
  }

  public getListImage(imageId : number):Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/list/${imageId}`);
  }
}
