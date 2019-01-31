import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ControlMessagesComponent} from './control-messages/control-messages.component';
import {MaterialModule} from '../material.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ControlMessagesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    ControlMessagesComponent
  ]
})
export class CommunicationModule { }
