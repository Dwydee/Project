import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Product } from "./product";
import { Router } from '@angular/router';


@Component({ 
  selector: 'side-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product!:Product;
  @Output() buy = new EventEmitter();
  @Output() remove = new EventEmitter();
  inCart: boolean = false;

  constructor(private router: Router){}
  
  addItem(product: Product){
    this.buy.emit();

  }

  removeItem(product: Product){
    this.remove.emit();
    
  }

  ngOnInit(){
    if((this.router.url).includes('cart')){
      this.inCart = true;

    }
  }

}
