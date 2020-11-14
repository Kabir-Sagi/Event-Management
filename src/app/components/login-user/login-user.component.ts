import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  public user = {
    email : '',
    password : ''
  };
  public successMsg;
  public errorMsg;
  public emptyForm;
  constructor(private _userService:UserService,
              private _router:Router) { }

  ngOnInit(): void {
  }

  // submitLogin
  public submitLogin(){
    if(this.user.email !== '' && this.user.password !== ''){
      this._userService.loginUser(this.user).subscribe((response) => {

        // get the token from server and add to local storage
        localStorage.setItem('token',response.token);
        localStorage.setItem('username',response.username);

        this.emptyForm = false;
        this._router.navigate(['/pro-events']);
      },(err) => {
        console.log(err);
        this.errorMsg = err.error;
      });
    }
    else{
      this.emptyForm = true;
    }
  }

  // reload component
  public reloadComponent(){
    // to reload the same page / component
    this._router.navigateByUrl('/register', { skipLocationChange: true }).then(() => {
      this._router.navigate(['/login']);
    });
  }

}
