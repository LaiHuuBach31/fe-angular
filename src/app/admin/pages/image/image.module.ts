import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageRoutingModule } from './image-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListImageComponent } from './list-image/list-image.component';
import { CreateImageComponent } from './create-image/create-image.component';
import { UpdateImageComponent } from './update-image/update-image.component';


@NgModule({
  declarations: [
    ListImageComponent,
    CreateImageComponent,
    UpdateImageComponent
  ],
  imports: [
    CommonModule,
    ImageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ImageModule { }
