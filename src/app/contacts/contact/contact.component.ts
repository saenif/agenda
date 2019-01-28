import {Component} from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';

import {MatTableDataSource} from '@angular/material';


interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

const CONTACT: Contact[] = [
  {id: 1, firstName: 'Edward', lastName: 'Lester', phoneNumber: '2507-600-425', email: 'lobortis.risus.In@laoreetlectusquis.com'},
  {id: 2, firstName: 'Denton', lastName: 'Lucas', phoneNumber: '8056-126-144', email: 'amet.consectetuer.adipiscing@leoelementumsem.edu'},
  {id: 3, firstName: 'Macaulay', lastName: 'Dane', phoneNumber: '8588-455-947', email: 'massa.non@ultricesVivamus.net'},
  {id: 4, firstName: 'Dante', lastName: 'Dane', phoneNumber: '8948-934-071', email: 'nonummy@erat.co.uk'},
  {id: 5, firstName: 'Damon', lastName: 'Erasmus', phoneNumber: '3268-408-272', email: 'eu@Nullamvelit.net'},
  {id: 6, firstName: 'Chancellor', lastName: 'Marsden', phoneNumber: '6835-384-956', email: 'nunc.In.at@convallis.org'},
  {id: 7, firstName: 'Gregory', lastName: 'Aaron', phoneNumber: '4987-703-172', email: 'Integer.tincidunt@Donecluctus.ca'},
  {id: 8, firstName: 'Kuame', lastName: 'Salvador', phoneNumber: '3801-319-549', email: 'ac.feugiat.non@DonectinciduntDonec.co.uk'},
  {id: 9, firstName: 'Garth', lastName: 'Brandon', phoneNumber: '6449-510-284', email: 'sed.pede@volutpatornarefacilisis.net'},
  {id: 10, firstName: 'Alexander', lastName: 'Kuame', phoneNumber: '6826-565-028', email: 'tellus.Phasellus.elit@fermentumarcu.co.uk'},

];

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  displayedColumns: string[] = ['select', 'id', 'first name', 'last name', 'phone number', 'email'];
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
}
