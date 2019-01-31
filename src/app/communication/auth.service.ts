import {Injectable} from '@angular/core';
import {User} from './user.interface';
import {Contact} from '../contacts/contact-interface';
import {DUMMY_CONTACTS} from '../contacts/dummy-contacts';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userLogged = false;

  public isLoggedIn(): boolean {
    return this.userLogged;
  }

  public validateUser(user: User): boolean {
    const validContact: Contact = DUMMY_CONTACTS.find(contact => contact.email === user.email);
    if (validContact) {
      this.userLogged = true;
      return true;
    }
    return false;
  }

}
