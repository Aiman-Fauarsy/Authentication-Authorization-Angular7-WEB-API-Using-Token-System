import { SharedService } from './shared/shared.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

///using the logout() function to reset the token that every user have.

export class AppComponent {
  title = 'AngularRegister';
  constructor(private router:Router,public auth:SharedService){

  }


  Logout() {
    localStorage.setItem('userToken', '');
    localStorage.setItem('role', '');
    localStorage.setItem('Id','')
    this.router.navigate(['/login']);
  }
}
