import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from '../material.module';

import {ContactComponent} from './contact/contact.component';
import {ContactModalComponent} from './contact-modal/contact-modal.component';
import {ControlMessagesComponent} from './control-messages/control-messages.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ContactComponent, ContactModalComponent, ControlMessagesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    ContactComponent,
    ContactModalComponent,
    ControlMessagesComponent
  ],
  entryComponents: [
    ContactModalComponent
  ]
})
export class ContactsModule {
}
