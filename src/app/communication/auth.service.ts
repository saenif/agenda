import {Injectable} from '@angular/core';
import {User} from './user.interface';
import {Contact} from '../contacts/contact-interface';
import {DUMMY_CONTACTS} from '../contacts/dummy-contacts';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn(): boolean {
    return this.getActiveUser() ? true : false;
  }

  public validateUser(user: User): boolean {
    const validContact: Contact = DUMMY_CONTACTS.find(contact => contact.email === user.email);
    if (validContact) {
      this.storeActiveUser(validContact);
      return true;
    }
    return false;
  }

  private storeActiveUser(contact: Contact) {
    localStorage.clear();
    localStorage.setItem('loggedUser', JSON.stringify(contact.email));
  }

  private getActiveUser(): any {
    return localStorage.getItem('loggedUser');
  }

}
