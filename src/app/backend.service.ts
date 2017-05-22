import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class BackendService {
  baseURL = 'http://127.0.0.1:8080/api/';

  constructor(private http: Http) {
  }

  get(url: string) {
    return this.http.get(`${this.baseURL}${url}`)
      .map(res => res.json())
      .catch( (error) => {
        console.log(`BackendService came across the following error : \n${error}`);
        return  Observable.empty();
      });
  }

  post(url: string, body: any) {
    return this.http.post(`${this.baseURL}${url}`, body)
      .catch( (error) => {
        console.log(`BackendService came across the following error : \n${error}`);
        return  Observable.empty();
      });
  }
}
