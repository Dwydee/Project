import { Component, inject } from '@angular/core';
import { ApiServiceService } from "../api-service.service";
import { ActivatedRoute, Router } from '@angular/router';
import { DdcartService } from '../cart/ddcart.service';


@Component({
  selector: 'main-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})

export class CatalogComponent {
  products:any;
  keyword: string = '';

  constructor(
    private productSvc:ApiServiceService,
    private route: ActivatedRoute,
    private cartService: DdcartService = inject(DdcartService)){
    }

  ngOnInit(){
    this.productSvc.getProduct().subscribe(data => {
      this.products = data;
    })
    this.route.params.subscribe((params) => {
      this.keyword = params['filter'];
    })
  }

  addToCart(product:any){
    this.cartService.add(product);
  }

  filteredProducts() {
    if(this.keyword === ''){
      return this.products;
    } else{
      return this.products.filter((product:any) => product.category == this.keyword);
    }
  }

  
}
