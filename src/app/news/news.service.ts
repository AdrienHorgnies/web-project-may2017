import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BackendService } from '../backend.service';

import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {

  constructor(private http: BackendService) { }

  list() {
    return this.http.get('http://127.0.0.1:8080/api/articles')
      .map(res => res.json())
      .catch( (error) => {
        console.log(`NewsService cam across the following error : \n${error}`);
        return  Observable.empty();
      });
  }

}
