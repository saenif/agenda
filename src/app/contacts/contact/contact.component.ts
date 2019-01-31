import {Component} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';

import {MatDialog, MatTableDataSource} from '@angular/material';

import {Contact} from '../contact-interface';
import {ContactModalComponent} from '../contact-modal/contact-modal.component';
import {DUMMY_CONTACTS} from '../dummy-contacts';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  displayedColumns: string[] = ['select', 'no', 'firstName', 'lastName', 'phoneNumber', 'email', 'editIcon', 'deleteIcon'];
  dataSource = new MatTableDataSource<Contact>(DUMMY_CONTACTS);
  selection = new SelectionModel<Contact>(true, []);

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  openDialog(contact: Contact, index?: number): void {
    const dialogRef = this.dialog.open(ContactModalComponent, {
      width: '300px',
      data: {contact}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.update(result, index);
    });
  }

  add(): void {
    const newContact: Contact = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      userName: '',
      password: ''
    };
    this.edit(newContact, this.dataSource.data.length);
  }


  delete(index: number): void {
    const newDataSource = this.dataSource.data;
    newDataSource.splice(index, 1);
    this.dataSource.data = newDataSource;
  }

  deleteSelected() {
    const newDataSource = this.dataSource.data;
    this.selection.selected.forEach((item) => {
      this.delete(this.dataSource.data.indexOf(item));
    });
    this.dataSource.data = newDataSource;
    this.selection.clear();
  }

  edit(contact: Contact, index: number): void {
    this.openDialog(contact, index);
  }

  private update(contact: Contact, index: number): void {
    const newDataSource = this.dataSource.data;
    newDataSource[index] = contact;
    this.dataSource.data = newDataSource;
  }

  constructor(public dialog: MatDialog) {
  }
}
