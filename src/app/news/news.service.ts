import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {

  constructor(private http: Http) {
  }

  list() {
    return this.http.get('localhost:8080/api/articles').map(res => res.json());
  }

}
