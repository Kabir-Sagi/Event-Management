import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  public user = {
    username : '',
    email : '',
    password : ''
  };
  public successMsg;
  public emptyForm;
  public errorMsg;

  constructor(private _userService:UserService,
              private _router:Router) { }

  ngOnInit(): void {
  }

  // submitRegister
  public submitRegister(){
    if(this.user.username !== '' && this.user.email !== '' && this.user.password !== ''){
      this._userService.registerUser(this.user).subscribe((response) => {
        this.successMsg = response;
        this.emptyForm = false;
        // redirect to login page
        this._router.navigate(['/login']);
      });
    }
    else{
      this.emptyForm = true;
    }
  }

  // reload component
  public reloadComponent(){
    // to reload the same page / component
    this._router.navigateByUrl('/login', { skipLocationChange: true }).then(() => {
      this._router.navigate(['/register']);
    });
  }


}
