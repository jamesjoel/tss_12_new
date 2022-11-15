import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProdutsComponent } from './pages/produts/produts.component';
import { CategoryComponent } from './pages/category/category.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AdminComponent } from './admin.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { UsersComponent } from './pages/users/users.component';
import { LoginComponent } from './pages/login/login.component';
import { H1Component } from './shared/h1/h1.component';
import { DeleteComponent } from './shared/delete/delete.component';
import { InputTextComponent } from './shared/input-text/input-text.component';
import { TableComponent } from './shared/table/table.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProdutsComponent,
    CategoryComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    CategoryListComponent,
    ProductListComponent,
    UsersComponent,
    LoginComponent,
    H1Component,
    DeleteComponent,
    InputTextComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
