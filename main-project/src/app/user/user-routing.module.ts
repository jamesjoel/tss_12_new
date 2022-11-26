import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserComponent } from './user.component';
import { AuthGuard } from '../guards/auth.guard';
import { AntiAuthGuard } from '../guards/anti-auth.guard';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { OtpComponent } from './pages/otp/otp.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';
import { UpdatePasswordComponent } from './pages/update-password/update-password.component';
import { BuyproductComponent } from './pages/buyproduct/buyproduct.component';
import { ProductbycategoryComponent } from './pages/productbycategory/productbycategory.component';

const routes: Routes = [
  {
    path : "",
    component : UserComponent,
    children : [
      {
        path : "",
        component : HomeComponent
      },
      {
        path : "about",
        component : AboutComponent
      },
      {
        path : "contact",
        component : ContactComponent
      },
      {
        path : "login",
        component : LoginComponent,
        canActivate : [AntiAuthGuard]
      },
      {
        path : "signup",
        component : SignupComponent,
        canActivate : [AntiAuthGuard]
      },
      {
        path : "my-profile",
        component : MyProfileComponent,
        canActivate : [AuthGuard]
      },
      {
        path : "forgot-password",
        component : ForgotPasswordComponent,
        canActivate : [AntiAuthGuard]
      },
      {
        path :"otp",
        component : OtpComponent,
        canActivate : [AntiAuthGuard]
      },
      {
        path : 'change-password',
        component : ChangePasswordComponent,
        canActivate : [AntiAuthGuard]
      },
      {
        path : "user/update",
        component : UpdateProfileComponent,
        canActivate : [AuthGuard]
      },
      {
        path : "user/update-password",
        component : UpdatePasswordComponent,
        canActivate : [AuthGuard]
      },
      {
        path : "buyproduct/:id",
        component : BuyproductComponent
      },
      {
        path : "productbycategory/:name",
        component : ProductbycategoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
