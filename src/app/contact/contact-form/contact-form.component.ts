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
    this.cf.name = 'ThisIsAName';
    this.cf.firstname = 'ThisIsAFirstname';
    this.cf.phone = '066666666';
    this.cf.mail = 'this.is.an.email@gmail.com';
    this.cf.message = 'So, I wanted to speak about that thing.';
  }

  register() {
    this.cf.date = new Date();
    this.sendContactFormService.sendForm(this.cf);
  }
}
