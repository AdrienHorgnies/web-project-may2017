import { Injectable } from '@angular/core';
import { BackendService } from '../backend.service';

@Injectable()
export class NewsService {

  constructor(private http: BackendService) { }

  getNews() {
    return this.http.get('articles');
  }

}
