import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Product } from '../product/product';

@Component({
  selector: 'side-todayhotdeals',
  templateUrl: './todayhotdeals.component.html',
  styleUrls: ['./todayhotdeals.component.css']
})
export class TodayhotdealsComponent {

  product:any;
  limit = 4;
  products: Product[] = [];

  constructor(private productSrc:ApiServiceService,){}

  ngOnInit(){
    this.productSrc.getProduct().subscribe(data => {
      this.product = data.sort((a,b) => a.price - b.price).slice(2, this.limit)
    })
  }
}
