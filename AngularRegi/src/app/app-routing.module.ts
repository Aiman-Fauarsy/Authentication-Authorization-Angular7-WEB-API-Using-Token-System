import { AuthGuard } from './Auth/auth.guard';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const routes: Routes = 
[
  {path:'',component:RegisterComponent},
  {path:'signup',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:AppComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
