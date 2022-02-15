import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {expoSitesComponent} from './expo-sites/expo-sites.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {AuthGuard} from './services/auth.guard';
import {ExpoSiteDetailsComponent} from './expo-sites/expo-site-details/expo-site-details.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  // , canActivate: [AuthGuard]
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'expos', component: expoSitesComponent },
  { path: 'login', component: SignInComponent },
  { path: 'expoSite/:id', component: ExpoSiteDetailsComponent},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
