import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FreeEventsComponent} from './components/free-events/free-events.component';
import {ProEventsComponent} from './components/pro-events/pro-events.component';
import {UploadEventsComponent} from './components/upload-events/upload-events.component';
import {LoginUserComponent} from './components/login-user/login-user.component';
import {RegisterUserComponent} from './components/register-user/register-user.component';
import {ProEventsGuard} from './guards/pro-events.guard';


const routes: Routes = [
  { path : '' , redirectTo : '/events' , pathMatch : 'full' },
  { path : 'events' , component : FreeEventsComponent },
  { path : 'pro-events' , component : ProEventsComponent , canActivate : [ProEventsGuard]},
  { path : 'upload-events' , component : UploadEventsComponent , canActivate : [ProEventsGuard] },
  { path : 'login' , component : LoginUserComponent },
  { path : 'register' , component : RegisterUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
