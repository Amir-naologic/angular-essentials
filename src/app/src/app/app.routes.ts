import { Route } from '@angular/router';
import { HomeComponent } from './week1/components/home/home.component';
import { AboutComponent } from './week1/components/about/about.component';
import { ContactComponent } from './week1/components/contact/contact.component';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
