import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import {DynamicscriptloaderService} from './services/dynamicscriptloader.service';
import { HomeComponent } from './home/home.component';
import { OurServicesComponent } from './home/our-services/our-services.component';
import { FirstElementComponent } from './home/first-element/first-element.component';
import { FooterComponent } from './footer/footer.component';
import { ExpoComponent } from './home/expo/expo.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExpoSitesComponent } from './expo-sites/expo-sites.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ExpoSiteComponent } from './expo-sites/expo-site/expo-site.component';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './services/auth.guard';
import { AlertComponent } from './alert/alert.component';
import {AlertService} from './services/alert.service';
import {JwtInterceptor} from './services/jwt.interceptor';
import {ErrorInterceptor} from './services/error.interceptor';
import {fakeBackendProvider} from './services/fake-backend';
import { ExpoFormComponent } from './expo-sites/expo-form/expo-form.component';

import { baseURL } from './shared/baseurl';
import {ProcessHTTPMsgService} from './services/process-httpmsg.service';
import { SigninComponent } from './sign-in/sign-in.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    OurServicesComponent,
    FirstElementComponent,
    FooterComponent,
    ExpoComponent,
    RegisterComponent,
    NotFoundComponent,
    AboutComponent,
    ContactComponent,
    ExpoSitesComponent,
    SignInComponent,
    ExpoSiteComponent,
    AlertComponent,
    ExpoFormComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DynamicscriptloaderService,
    AuthService,
    AuthGuard,
    AlertService,
    ProcessHTTPMsgService,
    {provide: 'BaseURL', useValue: baseURL},
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
