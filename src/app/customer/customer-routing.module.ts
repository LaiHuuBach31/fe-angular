import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCustomerComponent } from './app-customer/app-customer.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { ShopComponent } from './pages/shop/shop.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path:"",component: AppCustomerComponent, children:[
    {path:"", component: HomeComponent},
    {path:"shop", component: ShopComponent},
    {path:"shop/:id", component: DetailComponent},
    {path:"blog", component: BlogComponent},
    {path:"contact", component: ContactComponent},
    {path:"about", component: AboutComponent},
    {path:"cart", component: CartComponent},
    // {path:"login", component: LoginComponent},
    {path:"register", component: RegisterComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
