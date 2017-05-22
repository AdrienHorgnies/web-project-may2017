import { Injectable } from '@angular/core';
import {BackendService} from '../../backend.service';
import {ContactForm} from './contact-form.component';

@Injectable()
export class SendContactFormService {

  constructor(private http: BackendService) { }

  sendForm(form: ContactForm) {
    this.http.post('', form);
  }
}