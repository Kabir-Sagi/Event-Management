import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {retry} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpClient:HttpClient) { }

  // login user
  public loginUser(user):Observable<any>{
      let dataURL = `http://127.0.0.1:3000/api/login`;
     return this._httpClient.post<any>(dataURL,user).pipe(
        retry(1));
  }

  // register user
  public registerUser(user):Observable<any>{
    let dataURL = `http://127.0.0.1:3000/api/register`;
    return this._httpClient.post<any>(dataURL,user).pipe(
      retry(1));
  }

  // is Logged In
  public isLoggedIn(){
    if(localStorage.getItem('token')){
      return true;
    }
    else{
      return false;
    }
  }

  // get Token
  public getToken(){
    return localStorage.getItem('token');
  }

  // logOutUser
  public logOut(){
    localStorage.removeItem('token');
  }

  // get LoggedInUser
  public getLoggedInUser(){
    return localStorage.getItem('username');
  }
}
