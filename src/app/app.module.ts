import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FreeEventsComponent } from './components/free-events/free-events.component';
import { ProEventsComponent } from './components/pro-events/pro-events.component';
import { UploadEventsComponent } from './components/upload-events/upload-events.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import {EventsService} from './services/events.service';
import {UserService} from './services/user.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {EventsBookingInterceptor} from './interceptors/events-booking.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FreeEventsComponent,
    ProEventsComponent,
    UploadEventsComponent,
    LoginUserComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EventsService, UserService, {
    provide : HTTP_INTERCEPTORS,
    useClass : EventsBookingInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
