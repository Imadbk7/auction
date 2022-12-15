import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthenticaServiceService} from './authentica-service.service';
import {Observable} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthSbInterceptorService implements HttpInterceptor{

  constructor(private sessionService: AuthenticaServiceService){}

  jwtService = new JwtHelperService();


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.sessionService.getTokenFromSessionStorage();

    const imad =  this.jwtService.decodeToken(localStorage.getItem('token')).exp - this.jwtService.decodeToken(localStorage.getItem('token')).iat;
    const anass = Date.now() + imad;
    if (Date.now() > anass) {
      console.log(this.jwtService.decodeToken(localStorage.getItem('token')).exp * 1000);
      console.log(Date.now());
      console.log(imad);
    }
    if (token){
      const reqClone = req.clone({setHeaders: {Authorization: token}, withCredentials: true});
      return next.handle(reqClone);
    } else {
      return next.handle(req);
    }
  }
}
