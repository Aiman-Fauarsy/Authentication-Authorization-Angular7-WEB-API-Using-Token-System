import { SharedService } from './../shared/shared.service';
import { User } from './../shared/user.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  //////
  //// onSubmit() functions recievce the form ( ngForm) valus from register.html and uses the service class to send the values 
  //// to the WEB API  ( BACK END) by http.post functions which means it adds or saves the  user into data so it become Registered
  //// then it uses resetForm functions which only do it reset the from values to 0 in the html
  //// emailPattern => it's connected to html , it force the user to use Legal email.
  constructor(private userService:SharedService) { }
  user:User
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  ngOnInit() 
  {
    this.resetForm();
  }

  resetForm(form?:NgForm)
  {
    if(form!=null)
    form.reset();
    this.user={
      Firstname:'',
      Lastname:'',
      Username:'',
      Password:'',
      Email:'',
      Role:0
    }
  
}

onSubmit(form: NgForm){
this.userService.RegisterUser(form.value).subscribe(data=>{
  console.log('Done!');
});
this.resetForm();
}

}
