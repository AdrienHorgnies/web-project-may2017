import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.cf.name = 'Horgnies';
  }

  register() {
    console.log(this.cf);
  }
}
