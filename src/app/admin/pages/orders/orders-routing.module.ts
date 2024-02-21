import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';

const routes: Routes = [
    { path: 'list', component: OrderListComponent },
    { path: 'detail', component: OrderDetailComponent },
    { path: 'tracking', component: OrderTrackingComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrdersRoutingModule { }
