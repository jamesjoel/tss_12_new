import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UserComponent } from './user.component';
import { SliderComponent } from './shared/slider/slider.component';
import { NewArrivalComponent } from './shared/new-arrival/new-arrival.component';
import { ShopAreaComponent } from './shared/shop-area/shop-area.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { OtpComponent } from './pages/otp/otp.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { BoxComponent } from './shared/box/box.component';
import { ProductBoxComponent } from './shared/product-box/product-box.component';
import { Box2Component } from './shared/box2/box2.component';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';
import { UpdatePasswordComponent } from './pages/update-password/update-password.component';
import { DiscountPipe } from './pipes/discount.pipe';
import { BuyproductComponent } from './pages/buyproduct/buyproduct.component';
import { ProductbycategoryComponent } from './pages/productbycategory/productbycategory.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    SliderComponent,
    NewArrivalComponent,
    ShopAreaComponent,
    MyProfileComponent,
    ForgotPasswordComponent,
    OtpComponent,
    ChangePasswordComponent,
    BoxComponent,
    ProductBoxComponent,
    Box2Component,
    UpdateProfileComponent,
    UpdatePasswordComponent,
    DiscountPipe,
    BuyproductComponent,
    ProductbycategoryComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserModule { }
