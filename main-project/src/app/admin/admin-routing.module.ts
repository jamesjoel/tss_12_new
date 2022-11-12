import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { AdminComponent } from './admin.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { CategoryComponent } from './pages/category/category.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProdutsComponent } from './pages/produts/produts.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AntiAuthGuard } from './guards/anti-auth.guard';

const routes: Routes = [
  {
    path : "",
    component : AdminComponent,
    children : [
      {
        path : "",
        component : LoginComponent,
        canActivate : [AntiAuthGuard]
      },
      {
        path : "dashboard",
        component : DashboardComponent,
        canActivate : [AuthGuard]

      },
      {
        path : "products",
        component : ProdutsComponent,
        canActivate : [AuthGuard]
      },
      {
        path : "category",
        component : CategoryComponent,
        canActivate : [AuthGuard]
      },
      {
        path : "category/list",
        component : CategoryListComponent,
        canActivate : [AuthGuard]
      },
      {
        path : "products/list",
        component : ProductListComponent,
        canActivate : [AuthGuard]
      },
      {
        path : "users",
        component : UsersComponent,
        canActivate : [AuthGuard]
      },
      {
        path : "category/edit/:id",
        component : CategoryComponent,
        canActivate : [AuthGuard]
       
      },
      {
        path : "product/edit/:id",
        component : ProdutsComponent,
        canActivate : [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
