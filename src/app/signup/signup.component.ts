import { Component } from '@angular/core';
import { BuyerCredentials } from '../login/userdata';
import { RegisterService } from './register.service';

@Component({
  selector: 'main-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  credentials: BuyerCredentials = {username: '', email: '',password: '',};

  constructor(private Buyerservice: RegisterService){}

  registration(){
    this.Buyerservice.register(this.credentials).subscribe()
    }
  }



