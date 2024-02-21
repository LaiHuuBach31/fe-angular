import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListItemComponent } from './list-item/list-item.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { UpdateItemComponent } from './update-item/update-item.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListItemComponent
},
{
    path: 'create',
    component: CreateItemComponent
},
{
    path: 'edit/:id',
    component: UpdateItemComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
