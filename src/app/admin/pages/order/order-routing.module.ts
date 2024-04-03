import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOrderComponent } from './list-order/list-order.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { UpdateOrderComponent } from './update-order/update-order.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListOrderComponent
  },
  {
    path: 'create',
    component: CreateOrderComponent
  },
  {
    path: 'edit/:id',
    component: UpdateOrderComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
