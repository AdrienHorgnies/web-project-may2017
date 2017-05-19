import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {
  token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTQ5Nz' +
    'gwMDMzMn0.R6cS6TjF1QCKSTk9u17vw1bRgYcmQravbyBnlSr4RjujAZwiBsFPbDAGiTkpAKFf459BkHGwDXVweZXgzROq5w';

  constructor(private http: Http) {
  }

  list() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Authorization', `Bearer ${this.token}`);

    const options = new RequestOptions({ headers: headers });
    return this.http.get('http://127.0.0.1:8080/api/articles', options)
      .map(res => res.json())
      .catch( (error) => {
        console.log(`NewsService cam across the following error : \n${error}`);
        return  Observable.empty();
      });
  }

}
