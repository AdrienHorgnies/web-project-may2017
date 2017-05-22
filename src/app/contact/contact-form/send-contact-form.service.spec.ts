import { TestBed, inject } from '@angular/core/testing';

import { SendContactFormService } from './send-contact-form.service';

describe('SendContactFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendContactFormService]
    });
  });

  it('should be created', inject([SendContactFormService], (service: SendContactFormService) => {
    expect(service).toBeTruthy();
  }));
});
