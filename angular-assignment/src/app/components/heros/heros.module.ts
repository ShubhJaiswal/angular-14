import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerosListComponent } from './heros-list/heros-list.component';

import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HerosListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    FormsModule
  ],
  exports: [HerosListComponent]
})
export class HerosModule { }
