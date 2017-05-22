import {Component, Input, OnInit} from '@angular/core';
import { ContactPersonModel } from '../contact-person-model';

class ContactForm {
  name: string;
  firstname: string;
  phone: string;
  mail: string;
  message: string;
}

@Component({
  selector: 'wp-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  cf = new ContactForm();
  @Input() contactPeople: Array<ContactPersonModel>;

  constructor() { }

  ngOnInit() {
    this.cf.name = 'Horgnies';
  }

  register() {
    console.log(this.cf);
    console.log(this.contactPeople);
  }
}
