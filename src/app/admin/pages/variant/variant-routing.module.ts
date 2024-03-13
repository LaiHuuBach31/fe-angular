import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListVariantComponent } from './list-variant/list-variant.component';
import { UpdateVariantComponent } from './update-variant/update-variant.component';
import { CreateVariantComponent } from './create-variant/create-variant.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListVariantComponent
},
{
    path: 'create',
    component: CreateVariantComponent
},
{
    path: 'edit/:id',
    component: UpdateVariantComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VariantRoutingModule { }
