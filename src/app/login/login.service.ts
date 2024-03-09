import { Injectable } from '@angular/core';
import { Buyer, BuyerCredentials } from './userdata';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private user: BehaviorSubject<Buyer | null>;

  constructor(private http: HttpClient){
    this.user = new BehaviorSubject<Buyer | null>(null);
  }

  signIn(credentials: BuyerCredentials):Observable<Buyer>{
    return this.http.post<Buyer>('https://dummyjson.com/auth/login', credentials)
  }
  
}
