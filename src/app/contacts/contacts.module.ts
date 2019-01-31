import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from '../material.module';

import {ContactComponent} from './contact/contact.component';
import {ContactModalComponent} from './contact-modal/contact-modal.component';
import {CommunicationModule} from '../communication/communication.module';

@NgModule({
  declarations: [ContactComponent, ContactModalComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommunicationModule
  ],
  exports: [
    ContactComponent,
    ContactModalComponent
  ],
  entryComponents: [
    ContactModalComponent
  ]
})
export class ContactsModule {
}
