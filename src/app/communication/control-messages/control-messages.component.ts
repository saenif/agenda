import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-control-messages',
  templateUrl: './control-messages.component.html',
  styleUrls: ['./control-messages.component.scss']
})
export class ControlMessagesComponent {
  @Input() control: FormControl;
  requiredMessage = 'Required';

  get errorMessage() {
    if (this.control.touched) {
      return this.requiredMessage;
    }
    return null;
  }
}
