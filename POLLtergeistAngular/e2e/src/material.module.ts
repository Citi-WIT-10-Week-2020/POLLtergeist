// material.module.ts

import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/materia';

@NgModule({
  imports: [
    MatDatepickerModule
  ],
  exports: [
    MatDatepickerModule
  ]
})

export class MaterialModule {}