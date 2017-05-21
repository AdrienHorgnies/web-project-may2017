import { Component, OnInit } from '@angular/core';
import { ContactPersonService } from './contact-person.service';
import { ContactPersonModel } from './contact-person-model';

@Component({
  selector: 'wp-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactPeople: Array<ContactPersonModel> = [];

  constructor(private contactPersonService: ContactPersonService) { }

  ngOnInit() {
    this.contactPersonService.getContactPeople().subscribe(
      contactPeople => this.contactPeople = contactPeople
    );
  }

}
