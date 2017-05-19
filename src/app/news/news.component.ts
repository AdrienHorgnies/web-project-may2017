import { Component, Injectable, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import { ArticleModel } from './article.model';

@Component({
  selector: 'wp-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
@Injectable()
export class NewsComponent implements OnInit {
  news: Array<ArticleModel> = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.list().subscribe(
      news => this.news = news
    );
  }

}
