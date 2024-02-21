import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private apiServiceUrl = environment.apiBaseUrl + '/file'; 

  constructor(private http: HttpClient) { }

  public uploadFile(file:any):Observable<any>{
    return this.http.post<any>(`${this.apiServiceUrl}/upload`, file);
  }
  
}
