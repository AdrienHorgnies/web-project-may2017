import {Component, Input, NgModule, OnInit} from '@angular/core';
import { ContactPersonModel } from '../contact-person-model';
import { SendContactFormService } from './send-contact-form.service';

export class ContactForm {
  recipient: ContactPersonModel;
  name: string;
  firstname: string;
  phone: string;
  mail: string;
  message: string;
  date: Date;
}

@Component({
  selector: 'wp-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  cf = new ContactForm();
  @Input() contactPeople: Array<ContactPersonModel>;

  constructor(private sendContactFormService: SendContactFormService) { }

  ngOnInit() {
    this.cf.name = 'Horgnies';
  }

  register() {
    this.cf.date = new Date();
    console.log(this.cf);

    this.sendContactFormService.sendForm(this.cf);
  }
}
