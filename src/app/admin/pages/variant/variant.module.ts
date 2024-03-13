import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VariantRoutingModule } from './variant-routing.module';
import { UpdateVariantComponent } from './update-variant/update-variant.component';
import { CreateVariantComponent } from './create-variant/create-variant.component';
import { ListVariantComponent } from './list-variant/list-variant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpdateVariantComponent,
    CreateVariantComponent,
    ListVariantComponent
  ],
  imports: [
    CommonModule,
    VariantRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VariantModule { }
