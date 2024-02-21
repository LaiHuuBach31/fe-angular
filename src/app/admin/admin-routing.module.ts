import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAdminComponent } from './app-admin/app-admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BannerCreateComponent } from './pages/banner-management/banner-create/banner-create.component';


const routes: Routes = [
  {path:'',component: AppAdminComponent, children:[
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            {
                path: 'product',
                loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule)
            },
            {
                path: 'category',
                loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryModule)
            },
            {
              path: 'item',
              loadChildren: () => import('./pages/item/item.module').then(m => m.ItemModule)
            },
            {
                path: 'user',
                loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule)
            },
            {
                path: 'roles',
                loadChildren: () => import('./pages/roles/roles.module').then(m => m.RolesModule)
            },
            {
                path: 'orders',
                loadChildren: () => import('./pages/orders/orders.module').then(m => m.OrdersModule)
            },
            { path: 'banner', component: BannerCreateComponent },
            // Các tuyến đường khác của admin module
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
