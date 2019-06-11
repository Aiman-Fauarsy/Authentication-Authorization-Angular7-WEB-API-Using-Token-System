import { SharedService } from './../shared/shared.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //// onSubmit() Functions which is also declared on Login.html
  //// It uses the service class function which send api request to WEB API with the username and password that are used
  //// In Web api it checks the valus if the user's exists then it return true and navigate the user to home
  /// if the user's not exists it returns Http Error message
  constructor(private userService:SharedService,private router:Router) { }
isLogin:boolean=false
  ngOnInit() {
  }

  onSubmit(Username,Password){

    this.userService.UserAuthentication(Username,Password).subscribe((data:any)=>{
      localStorage.setItem('userToken',data.access_token);

      this.router.navigate(['/home'])
    },
    (err:HttpErrorResponse)=>
    {
      this.isLogin=true
    });
  }

}
