import { Injectable } from '@angular/core';
import { BackendService } from '../backend.service';

@Injectable()
export class NewsService {

  constructor(private http: BackendService) { }

  list() {
    return this.http.get('articles');
  }

}
