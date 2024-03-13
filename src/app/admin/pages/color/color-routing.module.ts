import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListColorComponent } from './list-color/list-color.component';
import { CreateColorComponent } from './create-color/create-color.component';
import { UpdateColorComponent } from './update-color/update-color.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListColorComponent
  },
  {
      path: 'create',
      component:  CreateColorComponent
  },
  {
      path: 'edit/:id',
      component: UpdateColorComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorRoutingModule { }
