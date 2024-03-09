import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';



@Component({
  selector: 'side-hotdeals',
  templateUrl: './hotdeals.component.html',
  styleUrls: ['./hotdeals.component.css']
})
export class HotdealsComponent {

  hProduct:any;
  hTProduct:any;

  pLimit = 4;
  ptLimit = 2;

  constructor(private productSrc:ApiServiceService,){}

  ngOnInit(){
    this.productSrc.getProduct().subscribe(data => {
      this.hProduct = data.slice(2, this.pLimit);
      this.hTProduct = data.slice(0, this.ptLimit);
    })
  }

}
