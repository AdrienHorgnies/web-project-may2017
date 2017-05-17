import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.route';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HomeComponent} from './home/home.component';
import {InformationComponent} from 'app/information/information.component';
import {CoursesComponent} from 'app/courses/courses.component';
import {NewsComponent} from './news/news.component';
import {PartnershipsComponent} from './partnerships/partnerships.component';
import {QualityComponent} from './quality/quality.component';
import {ContactComponent} from './contact/contact.component';
import {APP_BASE_HREF} from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        FooterComponent,
        InformationComponent,
        CoursesComponent,
        PartnershipsComponent,
        NewsComponent,
        QualityComponent,
        ContactComponent,
        HeaderComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES)
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Un enseignement de qualité!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Un enseignement de qualité!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Un enseignement de qualité!');
  }));
});
