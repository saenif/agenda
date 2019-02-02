import {Component, Inject} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef} from '@angular/material/dialog';

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
      'firstName': [contact.firstName, Validators.required],
      'lastName': [contact.lastName, Validators.required],
      'phoneNumber': [contact.phoneNumber, Validators.required],
      'email': [contact.email, Validators.required]
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

  cancelEdit(): void {
   this.dialogRef.close();
  }

}
