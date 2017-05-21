import { Injectable } from '@angular/core';
import { BackendService } from '../backend.service';

@Injectable()
export class ContactPersonService {

  constructor(private http: BackendService) { }

  getContactPeople() {
    return this.http.get('contact-people');
  }
}
