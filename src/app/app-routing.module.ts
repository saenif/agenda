import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ContactComponent} from './contacts/contact/contact.component';
import {LoginComponent} from './login/login/login.component';
import {ContactsModule} from './contacts/contacts.module';
import {LoginModule} from './login/login.module';
import {AccessGuard} from './communication/access-guard';

const routes: Routes = [
  {path: 'contacts', component: ContactComponent, canActivate: [AccessGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ContactsModule,
    LoginModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
