import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IncrementadorComponent
  ],
  exports: [
    IncrementadorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }
