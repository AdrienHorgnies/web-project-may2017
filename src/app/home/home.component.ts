import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news/news.service';
import {ArticleModel} from '../news/article.model';

@Component({
  selector: 'wp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = 'Home Page';
  news: Array<ArticleModel> = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews().subscribe(
      news => this.news = news
    );
  }

}
