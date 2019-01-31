import {Component, Inject} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef} from '@angular/material/dialog';

import {ValidationService} from './../../validation.service';
import {Contact} from '../contact-interface';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss']
})
export class ContactModalComponent {
  contactForm: any;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ContactModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contact) {

    const contact: Contact = this.data['contact'];
    this.contactForm = this.formBuilder.group({
      'firstName': [contact.firstName, Validators.min(1)],
      'lastName': [contact.lastName, Validators.min(1)],
      'phoneNumber': [contact.phoneNumber, Validators.min(1)],
      'email': [contact.email, Validators.min(1)]
    });
  }

  saveContact(): Contact {
    if (this.contactForm.dirty && this.contactForm.valid) {
      return {
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        phoneNumber: this.contactForm.value.phoneNumber,
        email: this.contactForm.value.email,
        password: ''
      };
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
