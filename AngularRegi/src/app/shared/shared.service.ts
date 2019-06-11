import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//// Class service which are used to connect to the web api
//// RegisterUser() => uses the http.post function that does saves the user into database ( Register a user )
/// UserAuthentication => it checks the user if exists in the data so it can gives him accses token or denied the request
/// isUserLoggedIn() it checks if the user is logged in or not, People use this kind of function for different purposes, I used it here
// to check whenever the user is logged in to switch the navbar from login to logout

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  rootUrl="http://localhost:57802"
  constructor(private http:HttpClient) { }

RegisterUser(form){
  return this.http.post(this.rootUrl+'/api/Registers',form)
}

UserAuthentication(Username,Password)
{
  var data = "username="+Username+"&password="+Password+"&grant_type=password";
  var requestHeader = new HttpHeaders({'Content-Type':'application/x.www-urlencoded'});
  return this.http.post('http://localhost:57802/token',data,{headers: requestHeader});
}
public isUserLoggedIn() {
  return localStorage.getItem('userToken').length > 0;
}

}
