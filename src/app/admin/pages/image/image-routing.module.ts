import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListImageComponent } from './list-image/list-image.component';
import { CreateImageComponent } from './create-image/create-image.component';
import { UpdateImageComponent } from './update-image/update-image.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListImageComponent
  },
  {
    path: 'create',
    component: CreateImageComponent
  },
  {
    path: 'edit/:id',
    component: UpdateImageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageRoutingModule { }
