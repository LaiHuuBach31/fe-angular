import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, finalize, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor(private router : Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const localToken = sessionStorage.getItem('token');
    if (!localToken) return next.handle(request);
    request = request.clone({headers : request.headers.set('Authorization', 'Bearer ' + localToken )});
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.router.navigate(["/adminlogin"]);
            sessionStorage.clear();
          }
          return throwError(error);
        })
      );
  }
}
