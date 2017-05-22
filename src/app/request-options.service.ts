import { Injectable } from '@angular/core';
import { BaseRequestOptions } from '@angular/http';

@Injectable()
export class RequestOptionsService extends BaseRequestOptions  {
  token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTQ5Nz' +
    'gwMDMzMn0.R6cS6TjF1QCKSTk9u17vw1bRgYcmQravbyBnlSr4RjujAZwiBsFPbDAGiTkpAKFf459BkHGwDXVweZXgzROq5w';

  constructor() {
    super();
    this.headers.set('Accept', 'application/json');
    this.headers.set('Content-Type', 'application/json');
    this.headers.set('Authorization', `Bearer ${this.token}`);
  }
}
