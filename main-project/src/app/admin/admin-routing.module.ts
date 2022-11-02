import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { AdminComponent } from './admin.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { CategoryComponent } from './pages/category/category.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProdutsComponent } from './pages/produts/produts.component';

const routes: Routes = [
  {
    path : "",
    component : AdminComponent,
    children : [
      {
        path : "dashboard",
        component : DashboardComponent
      },
      {
        path : "products",
        component : ProdutsComponent
      },
      {
        path : "category",
        component : CategoryComponent
      },
      {
        path : "category/list",
        component : CategoryListComponent
      },
      {
        path : "products/list",
        component : ProductListComponent
      },
      {
        path : "users",
        component : UsersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
