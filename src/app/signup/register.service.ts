import { Injectable } from '@angular/core';
import { Buyer, BuyerCredentials } from '../login/userdata';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private user: BehaviorSubject<Buyer | null>;

  constructor(private http: HttpClient){
    this.user = new BehaviorSubject<Buyer | null>(null);
  }
  
  register(credentials: BuyerCredentials):Observable<Buyer>{
    return this.http.post<Buyer>('https://dummyjson.com/users/add',credentials).pipe( map ((postedBuyer:Buyer) => {
      this.user.next(postedBuyer)
      return postedBuyer
    }))
  }

}
