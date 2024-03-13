import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SizeRoutingModule } from './size-routing.module';
import { CreateSizeComponent } from './create-size/create-size.component';
import { ListSizeComponent } from './list-size/list-size.component';
import { UpdateSizeComponent } from './update-size/update-size.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateSizeComponent,
    ListSizeComponent,
    UpdateSizeComponent
  ],
  imports: [
    CommonModule,
    SizeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SizeModule { }
