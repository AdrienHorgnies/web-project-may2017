import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { InformationComponent } from './information/information.component';
import { CoursesComponent } from './courses/courses.component';
import { NewsComponent } from './news/news.component';
import { PartnershipsComponent } from './partnerships/partnerships.component';
import { QualityComponent } from './quality/quality.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    InformationComponent,
    CoursesComponent,
    NewsComponent,
    PartnershipsComponent,
    QualityComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
