import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TokenRoutingModule } from './token-routing.module';
import { ListTokenComponent } from './list-token/list-token.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListTokenComponent,
  ],
  imports: [
    CommonModule,
    TokenRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TokenModule { }
