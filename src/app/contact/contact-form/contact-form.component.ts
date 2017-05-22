import {Component, Input, NgModule, OnInit} from '@angular/core';
import { ContactPersonModel } from '../contact-person-model';
import {SendContactFormService} from './send-contact-form.service';

export class ContactForm {
  recipient: number;
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
@NgModule({
    providers: [
      SendContactFormService
    ]
}
)
export class ContactFormComponent implements OnInit {
  cf = new ContactForm();
  @Input() contactPeople: Array<ContactPersonModel>;

  constructor(private sendContactFormService: SendContactFormService) { }

  ngOnInit() {
    this.cf.name = 'Horgnies';
  }

  register() {
    console.log(this.cf);
    this.sendContactFormService.sendForm(this.cf);
  }
}
