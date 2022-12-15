import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserData} from '../models/user-data.model';
import {shareReplay} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticaServiceService {


  currentUser: UserData = null;

  constructor(public httpclient: HttpClient, public router: Router) {

  }

  jwtService = new JwtHelperService();


  public autheniticateLogin(userinfo: UserData): any {


    const signin = this.httpclient.post<UserData>('http://localhost:8085/rest/auth', userinfo, {observe: 'response'}).pipe(shareReplay(1));

    signin.subscribe((data) => {
      console.log(data.headers.get('Authorization'));

      localStorage.setItem('token', data.headers.get('Authorization'));
      sessionStorage.setItem('token', data.headers.get('Authorization'));

      console.log(this.jwtService.decodeToken(data.headers.get('Authorization')).exp);



      this.refreshUser();
    });


  }


  public refreshUser(): any {

    const burr = this.jwtService.decodeToken(localStorage.getItem('token'));
    const user: UserData = new UserData();

    user.email = burr.sub;
    this.currentUser = user;

    console.log(burr);

    this.router.navigate(['/Overview5']);


  }

  public getTokenFromSessionStorage(): any {


    return sessionStorage.getItem('token');
  }


}



