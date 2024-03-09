import { Component } from '@angular/core';
import { BuyerCredentials } from '../login/userdata';
import { LoginService } from './login.service';

@Component({
  selector: 'main-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials: BuyerCredentials = {username: '', email: '',password: '',};

  constructor(private logS: LoginService){}
  
  signIn(){
    return this.logS.signIn(this.credentials).subscribe((data) => {
      localStorage.setItem('token', JSON.stringify(data.token));
      localStorage.setItem('username', JSON.stringify(data.username));
      window.location.reload();
    })
  }

  
}
