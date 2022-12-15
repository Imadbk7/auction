import { Component, OnInit } from '@angular/core';
import {AuthenticaServiceService} from '../../services/authentica-service.service';
import {UserData} from '../../models/user-data.model';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LogComponent implements OnInit {

  constructor(public authenticateservice: AuthenticaServiceService) { }

  username: string;

  pasword: string;

  ngOnInit(): void {
  }


  public login(): any{
   const user: UserData = new UserData();
   user.email = this.username;
   user.password = this.pasword;


   this.authenticateservice.autheniticateLogin(user);




}

}
