import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserService} from '../services/user.service';

@Injectable()
export class EventsBookingInterceptor implements HttpInterceptor {

  constructor(private _userService:UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let tokenizedRequest = request.clone({
      setHeaders : {
        'Authorization' : `Bearer ${this._userService.getToken()}`
      }
    });

    return next.handle(tokenizedRequest);
  }
}
