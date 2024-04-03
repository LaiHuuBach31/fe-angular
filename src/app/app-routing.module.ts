import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path:"",
    loadChildren:()=>import('./customer/customer.module').then((m)=>m.CustomerModule)
  },
  {
    path:"admin",
    canActivate: [authGuard], 
    loadChildren:()=>import('./admin/admin.module').then((m)=>m.AdminModule)
  },
  { 
    path: 'adminlogin', 
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
