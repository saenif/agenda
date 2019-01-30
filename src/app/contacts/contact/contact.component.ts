import {Component} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';

import {MatDialog, MatTableDataSource} from '@angular/material';

import {Contact} from '../contact-interface';
import {ContactModalComponent} from '../contact-modal/contact-modal.component';
import {CONTACT} from '../dummy-contacts';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  fakeData: any = {};

  displayedColumns: string[] = ['select', 'no', 'firstName', 'lastName', 'phoneNumber', 'email', 'editIcon', 'deleteIcon'];
  dataSource = new MatTableDataSource<Contact>(CONTACT);
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

  openDialog(): void {
    const dialogRef = this.dialog.open(ContactModalComponent, {
      width: '300px',
      data: {name: 'fakeName', animal: 'fakeAnimal'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.fakeData = result;
    });
  }

  constructor(public dialog: MatDialog) {}
}
