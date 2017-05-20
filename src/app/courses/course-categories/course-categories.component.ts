import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { CourseCategoryModel } from '../course-category-model';

@Component({
  selector: 'wp-course-categories',
  templateUrl: './course-categories.component.html',
  styleUrls: ['./course-categories.component.css']
})
export class CourseCategoriesComponent implements OnInit {
  categories: Array<CourseCategoryModel> = [];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.listCategories().subscribe(
      categories => this.categories = categories
    );
  }

}
