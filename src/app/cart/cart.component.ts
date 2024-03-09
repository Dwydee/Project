import { Component } from '@angular/core';
import { DdcartService } from './ddcart.service';


@Component({
  selector: 'main-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  products: any[] = [];
  totalprice: number = 0;
  taxprice: number = 0;

  constructor(private cartService: DdcartService){}

  

  ngOnInit(){
    if(this.cartService.retrievedata('cart').length > 0){
      this.products = this.cartService.retrievedata('cart');
      this.products.forEach((a) => {
        this.totalprice += a.price;
      })
    }
    if(this.products.length > 0){
      this.taxprice = 2;
      this.taxprice *= this.products.length;
    }
  }

  removeItem(item: any){
    this.cartService.remove(item);
    this.products = this.cartService.retrievedata('cart');
    this.totalprice -= item.price;
    this.taxprice -= 2;
  }

  buyItems(){
    if(this.products.length > 0){
      localStorage.removeItem('cart');
      alert('Thanks for purchase, we have sent a message on your mail');
    }else{
      alert('There is nothing to buy');
    }
  }
}

