import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProdutsComponent } from './pages/produts/produts.component';
import { CategoryComponent } from './pages/category/category.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AdminComponent } from './admin.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { ProductListComponent } from './pages/product-list/product-list.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProdutsComponent,
    CategoryComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    CategoryListComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
