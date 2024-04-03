import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { AdminRoutingModule } from './admin-routing.module';
import { AppAdminComponent } from './app-admin/app-admin.component';
import { MaterialModule } from '../material/material/material.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BannerListComponent } from './pages/banner-management/banner-list/banner-list.component';
import { BannerCreateComponent } from './pages/banner-management/banner-create/banner-create.component';
import { BannerEditComponent } from './pages/banner-management/banner-edit/banner-edit.component';
import { FeedbackListComponent } from './pages/feedback-and-comments/feedback-list/feedback-list.component';
import { CommentListComponent } from './pages/feedback-and-comments/comment-list/comment-list.component';
import { SidenavComponent } from './layouts/sidenav/sidenav.component';
import { BodyComponent } from './layouts/body/body.component';
import { RolesComponent } from './pages/roles/roles.component';
import { UserComponent } from './pages/user/user.component';
import { CategoryComponent } from './pages/category/category.component';
import { CustomersComponent } from './pages/customers/customers/customers.component';
import { CustomersListComponent } from './pages/customers/customers-list/customers-list.component';
import { SublevelMenuComponent } from './layouts/sidenav/sublevel-menu.component';
import { HeaderComponent } from './layouts/header/header.component';
import { CdkMenuModule } from '@angular/cdk/menu';


@NgModule({
  declarations: [
    AppAdminComponent,
    DashboardComponent,
        BannerListComponent,
        BannerCreateComponent,
        BannerEditComponent,
        FeedbackListComponent,
        CommentListComponent,
        SidenavComponent,
        BodyComponent,
        SublevelMenuComponent,
        CustomersListComponent,
        CustomersComponent,
        HeaderComponent,
        CategoryComponent,
        UserComponent,
        RolesComponent,
        // ListOrderComponent,
        // ListImageComponent,
        // UpdateImageComponent,
        // CreateImageComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    CdkMenuModule, 
    CarouselModule
  ]
})
export class AdminModule { }
