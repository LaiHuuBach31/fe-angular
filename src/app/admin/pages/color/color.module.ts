import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorRoutingModule } from './color-routing.module';
import { UpdateColorComponent } from './update-color/update-color.component';
import { ListColorComponent } from './list-color/list-color.component';
import { CreateColorComponent } from './create-color/create-color.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpdateColorComponent,
    ListColorComponent,
    CreateColorComponent,
  ],
  imports: [
    CommonModule,
    ColorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ColorModule { }
