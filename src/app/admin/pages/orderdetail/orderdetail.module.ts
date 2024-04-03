import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderdetailRoutingModule } from './orderdetail-routing.module';
import { UpdateOrderdetailComponent } from './update-orderdetail/update-orderdetail.component';
import { CreateOrderdetailComponent } from './create-orderdetail/create-orderdetail.component';
import { ListOrderdetailComponent } from './list-orderdetail/list-orderdetail.component';


@NgModule({
  declarations: [
    ListOrderdetailComponent,
    UpdateOrderdetailComponent,
    CreateOrderdetailComponent
  ],
  imports: [
    CommonModule,
    OrderdetailRoutingModule
  ]
})
export class OrderdetailModule { }
