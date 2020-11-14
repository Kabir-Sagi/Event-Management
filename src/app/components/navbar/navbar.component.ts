import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _userService:UserService) { }

  ngOnInit(): void {
  }

  // logoutUser
  public logoutUser(){
    this._userService.logOut();
  }

}
