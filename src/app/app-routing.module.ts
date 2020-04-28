import { AdminComponent } from './BackEnd/admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './FontEnd/index/index.component';
import { ManagerProductComponent } from './BackEnd/managerProduct/managerProduct.component';
import { HomeComponent } from './FontEnd/home/home.component';
import { ShopComponent } from './FontEnd/Shop/Shop.component';
import { DashboardComponent } from './BackEnd/dashboard/dashboard.component';
import { AddProductComponent } from './BackEnd/addProduct/addProduct.component';
import { ManagerMemmberComponent } from './BackEnd/managerMemmber/managerMemmber.component';
import { AddMemmberComponent } from './BackEnd/addMemmber/addMemmber.component';
import { EditProductComponent } from './BackEnd/editProduct/editProduct.component';
import { NotFoudComponent } from './notFoud/notFoud.component';
import { ProductDetailComponent } from './FontEnd/ProductDetail/ProductDetail.component';
import { PreviewProductComponent } from './BackEnd/previewProduct/previewProduct.component';
import { DashboardMemmberComponent } from './BackEnd/dashboardMemmber/dashboardMemmber.component';
import { LoginComponent } from './FontEnd/login/login.component';
import { RegisterComponent } from './FontEnd/register/register.component';
import { ContactUsComponent } from './FontEnd/ContactUs/ContactUs.component';
import { AboutComponent } from './FontEnd/about/about.component';
import { AddtocartComponent } from './FontEnd/addtocart/addtocart.component';
import { ListCartComponent } from './FontEnd/ListCart/ListCart.component';


const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  {
    path: 'index', component: IndexComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'Shop', component: ShopComponent },
      { path: "detail/:id", component: ProductDetailComponent },
      { path: "previewProduct/:id", component: PreviewProductComponent },
      { path: 'cart', component: ListCartComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'contactus', component: ContactUsComponent },
      { path: 'about', component: AboutComponent },
      { path: "addtocart/:id", component: AddtocartComponent },

    ]
  },
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: '', redirectTo: 'managerPoduct', pathMatch: 'full' },
      { path: 'managerPoduct', component: ManagerProductComponent },
      { path: 'dashboardProduct', component: DashboardComponent },
      { path: 'dashboardMemmber', component: DashboardMemmberComponent },
      { path: 'addProduct', component: AddProductComponent },
      { path: "previewProduct/:id", component: PreviewProductComponent },
      { path: "editProduct/:id", component: EditProductComponent },
      { path: "coppyAddProduct/:id", component: AddProductComponent },
      { path: 'addMemmber', component: AddMemmberComponent },
      { path: 'managerMemmber', component: ManagerMemmberComponent },
    ]
  },
  { path: '404', component: NotFoudComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
