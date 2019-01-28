import { NgModule } from '@angular/core';

import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [],
  imports: [
    MatTableModule,
    MatCheckboxModule
  ],
  exports: [
    MatTableModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
