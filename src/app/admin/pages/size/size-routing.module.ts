import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSizeComponent } from './list-size/list-size.component';
import { CreateSizeComponent } from './create-size/create-size.component';
import { UpdateSizeComponent } from './update-size/update-size.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListSizeComponent
  },
  {
      path: 'create',
      component:  CreateSizeComponent
  },
  {
      path: 'edit/:id',
      component: UpdateSizeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SizeRoutingModule { }
