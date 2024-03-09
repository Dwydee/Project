import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CatalogComponent } from './catalog/catalog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from './product/product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HotdealsComponent } from './hotdeals/hotdeals.component';
import { TodayhotdealsComponent } from './thecheapestproducts/todayhotdeals.component';
import { YoursearchComponent } from './mostratedproducts/yoursearch.component';
import { QuestionshopcartComponent } from './questionshopcart/questionshopcart.component';
import { ReviewpurchasesComponent } from './reviewpurchases/reviewpurchases.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from "./cart/cart.component";
import { PrivacytermsComponent } from "./privacyterms/privacyterms.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from './contact/contact.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    CatalogComponent,
    ProductComponent,
    NavbarComponent,
    HotdealsComponent,
    TodayhotdealsComponent,
    YoursearchComponent,
    QuestionshopcartComponent,
    ReviewpurchasesComponent,
    FooterComponent,
    CartComponent,
    PrivacytermsComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
