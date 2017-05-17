/**
 * Created by adrien on 17.05.17.
 */
import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {InformationComponent} from './information/information.component';
import {CoursesComponent} from './courses/courses.component';
import {NewsComponent} from './news/news.component';
import {PartnershipsComponent} from './partnerships/partnerships.component';
import {QualityComponent} from './quality/quality.component';
import {ContactComponent} from './contact/contact.component';

export const ROUTES: Routes =  [
  { path: '', component: HomeComponent},
  { path: 'accueil', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'informations', component: InformationComponent},
  { path: 'information', component: InformationComponent},
  { path: 'formations', component: CoursesComponent},
  { path: 'courses', component: CoursesComponent},
  { path: 'actualites', component: NewsComponent},
  { path: 'news', component: NewsComponent},
  { path: 'partenariats', component: PartnershipsComponent},
  { path: 'partnerships', component: PartnershipsComponent},
  { path: 'qualite', component: QualityComponent},
  { path: 'quality', component: QualityComponent},
  { path: 'contact', component: ContactComponent}
];
