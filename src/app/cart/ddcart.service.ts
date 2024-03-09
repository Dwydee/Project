import { Injectable } from '@angular/core';
import { Product } from '../product/product';

@Injectable({
  providedIn: 'root'
})
export class DdcartService {
  cart: Product[] = [];
  totalprice: number = 0;

  constructor() {}

  add(product: Product){
    this.cart.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  remove(product: Product){
    const id = this.cart.findIndex(item => item.id === product.id);
    if(id !== -1){
      this.cart.splice(id, 1);
      localStorage.setItem('cart', JSON.stringify(this.cart))
    }
  }

  retrievedata(key: string): any[] {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data): []
  }

}
