import { Component, HostBinding, HostListener } from '@angular/core';
import { DdcartService } from '../cart/ddcart.service';


@Component({
  selector: 'side-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isFixedNavbar: any;
  accountbutton: any;
  username:any;


  @HostBinding('class.navbar-opened') navbarOpened = false;

  constructor(private cartService: DdcartService) { }

  ngOnInit() {
    if(this.cartService.retrievedata('token').length > 0){
      this.accountbutton = 'da';
    }else{
      this.accountbutton = '';
    }
    this.username = this.cartService.retrievedata('username');
  }
  @HostListener('window:scroll', [])

  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(offset > 10) {
      this.isFixedNavbar = true;
    } else {
      this.isFixedNavbar = false;
    }
  }

  toggleNavbar() {
    this.navbarOpened = !this.navbarOpened;
  }

  logOut(){
    localStorage.clear();
    window.location.reload();
  }
}


