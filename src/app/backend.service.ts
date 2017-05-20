import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BackendService {
  baseURL = 'http://127.0.0.1:8080/api/';

  constructor(private http: Http) {
  }

  get(url: string) {
    return this.http.get(`${this.baseURL}${url}`);
  }
}
