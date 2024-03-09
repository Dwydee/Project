import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { PrivacytermsComponent } from './privacyterms/privacyterms.component';
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'catalog/:filter', component: CatalogComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cart', component: CartComponent},
  {path: 'privacyterms', component: PrivacytermsComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]
})
export class RoutingModule { }