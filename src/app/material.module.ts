import { NgModule } from '@angular/core';

import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [],
  imports: [
    MatTableModule,
    MatCheckboxModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    MatTableModule,
    MatCheckboxModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
