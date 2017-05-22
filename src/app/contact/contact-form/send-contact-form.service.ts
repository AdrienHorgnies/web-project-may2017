import { Injectable } from '@angular/core';
import {BackendService} from '../../backend.service';
import {ContactForm} from './contact-form.component';

@Injectable()
export class SendContactFormService {

  constructor(private http: BackendService) { }

  sendForm(form: ContactForm) {
    return this.http.post('inmails', {
      recipient : { id: form.recipient },
      name: form.name,
      firstname: form.firstname,
      phone: form.phone,
      mail: form.mail,
      date: form.date,
      message: form.message
    });
  }
}
