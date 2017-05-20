import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { InformationComponent } from './information/information.component';
import { CoursesComponent } from './courses/courses.component';
import { NewsComponent } from './news/news.component';
import { PartnershipsComponent } from './partnerships/partnerships.component';
import { QualityComponent } from './quality/quality.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { ROUTES } from './app.route';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewsService } from './news/news.service';
import { CoursesService } from './courses/courses.service';
import { RequestOptionsService } from './request-options.service';
import { BackendService } from './backend.service';
import { CourseCategoriesComponent } from './courses/course-categories/course-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    InformationComponent,
    CoursesComponent,
    NewsComponent,
    PartnershipsComponent,
    QualityComponent,
    ContactComponent,
    HeaderComponent,
    PageNotFoundComponent,
    CourseCategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    NewsService,
    CoursesService,
    { provide: RequestOptions, useClass: RequestOptionsService },
    BackendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
