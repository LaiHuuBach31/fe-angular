import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTokenComponent } from './list-token/list-token.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListTokenComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TokenRoutingModule { }
