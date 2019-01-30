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
  userForm: any;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ContactModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contact) {

    const contact: Contact = this.data['contact'];
    this.userForm = this.formBuilder.group({
      'firstName': [contact.firstName, Validators.min(1)],
      'lastName': [contact.lastName, Validators.min(1)],
      'phoneNumber': [contact.phoneNumber, Validators.min(1)],
      'email': [contact.email, Validators.min(1)]
    });
  }

  saveContact(): Contact {
    if (this.userForm.dirty && this.userForm.valid) {
      return {
        firstName: this.userForm.value.firstName,
        lastName: this.userForm.value.lastName,
        phoneNumber: this.userForm.value.phoneNumber,
        email: this.userForm.value.email
      };
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
