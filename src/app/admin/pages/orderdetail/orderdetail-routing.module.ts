import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOrderdetailComponent } from './list-orderdetail/list-orderdetail.component';
import { CreateOrderdetailComponent } from './create-orderdetail/create-orderdetail.component';
import { UpdateOrderdetailComponent } from './update-orderdetail/update-orderdetail.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListOrderdetailComponent
  },
  {
    path: 'create',
    component: CreateOrderdetailComponent
  },
  {
    path: 'edit/:id',
    component: UpdateOrderdetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderdetailRoutingModule { }
