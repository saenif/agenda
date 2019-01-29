import {Component} from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';

import {MatDialog, MatTableDataSource} from '@angular/material';

import {Contact} from '../contact-interface';
import {ContactModalComponent} from '../contact-modal/contact-modal.component';

const CONTACT: Contact[] = [
  {firstName: 'Edward', lastName: 'Lester', phoneNumber: '2507-600-425', email: 'lobortis.risus.In@laoreetlectusquis.com'},
  {firstName: 'Denton', lastName: 'Lucas', phoneNumber: '8056-126-144', email: 'amet.consectetuer.adipiscing@leoelementumsem.edu'},
  {firstName: 'Macaulay', lastName: 'Dane', phoneNumber: '8588-455-947', email: 'massa.non@ultricesVivamus.net'},
  {firstName: 'Dante', lastName: 'Dane', phoneNumber: '8948-934-071', email: 'nonummy@erat.co.uk'},
  {firstName: 'Damon', lastName: 'Erasmus', phoneNumber: '3268-408-272', email: 'eu@Nullamvelit.net'},
  {firstName: 'Chancellor', lastName: 'Marsden', phoneNumber: '6835-384-956', email: 'nunc.In.at@convallis.org'},
  {firstName: 'Gregory', lastName: 'Aaron', phoneNumber: '4987-703-172', email: 'Integer.tincidunt@Donecluctus.ca'},
  {firstName: 'Kuame', lastName: 'Salvador', phoneNumber: '3801-319-549', email: 'ac.feugiat.non@DonectinciduntDonec.co.uk'},
  {firstName: 'Garth', lastName: 'Brandon', phoneNumber: '6449-510-284', email: 'sed.pede@volutpatornarefacilisis.net'},
  {firstName: 'Alexander', lastName: 'Kuame', phoneNumber: '6826-565-028', email: 'tellus.Phasellus.elit@fermentumarcu.co.uk'},

];

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
