import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
    {
        path: 'list',
        component: ListUserComponent
    },
    {
        path: 'create',
        component: CreateUserComponent
    },
    {
        path: 'edit/:id',
        component: UpdateUserComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
