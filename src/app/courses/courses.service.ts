import { Injectable } from '@angular/core';
import { BackendService } from '../backend.service';

@Injectable()
export class CoursesService {

  constructor(private http: BackendService) { }

  listCategories() {
    return this.http.get('course-categories');
  }

}
