import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './BackEnd/admin/admin.component';
import { ManagerProductComponent } from './BackEnd/managerProduct/managerProduct.component';
import { BanerHomeComponent } from './FontEnd/banerHome/banerHome.component';
import { HomeComponent } from './FontEnd/home/home.component';
import { IndexComponent } from './FontEnd/index/index.component';
import { ProductComponent } from './FontEnd/Product/Product.component';
import { ShopComponent } from './FontEnd/Shop/Shop.component';
import { LoginComponent } from './FontEnd/login/login.component';
import { RegisterComponent } from './FontEnd/register/register.component';
import { DashboardComponent } from './BackEnd/dashboard/dashboard.component';
import { PreviewProductComponent } from './BackEnd/previewProduct/previewProduct.component';
import { EditProductComponent } from './BackEnd/editProduct/editProduct.component';
import { AddProductComponent } from './BackEnd/addProduct/addProduct.component';
import { AddMemmberComponent } from './BackEnd/addMemmber/addMemmber.component';
import { PreviewMemmberComponent } from './BackEnd/PreviewMemmber/PreviewMemmber.component';
import { ManagerMemmberComponent } from './BackEnd/managerMemmber/managerMemmber.component';
import { DeleteMemmberComponent } from './BackEnd/deleteMemmber/deleteMemmber.component';
import { ProductListComponent } from './FontEnd/ProductListHome/ProductList/ProductList.component';
import { ProductMobilesComponent } from './FontEnd/ProductListHome/ProductMobiles/ProductMobiles.component';
import { ProductTvComponent } from './FontEnd/ProductListHome/ProductTv/ProductTv.component';
import { ProductService } from './_Services/product.service';
import { NotFoudComponent } from './notFoud/notFoud.component';
import { ProductDetailComponent } from './FontEnd/ProductDetail/ProductDetail.component';
import { DashboardMemmberComponent } from './BackEnd/dashboardMemmber/dashboardMemmber.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProductListLiveNewComponent } from './FontEnd/ProductListHome/ProductListLiveNew/ProductListLiveNew.component';
import { ContactUsComponent } from './FontEnd/ContactUs/ContactUs.component';
import { AboutComponent } from './FontEnd/about/about.component';
import { AddtocartComponent } from './FontEnd/addtocart/addtocart.component';
import { ListCartComponent } from './FontEnd/ListCart/ListCart.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ManagerProductComponent,
    BanerHomeComponent,
    HomeComponent,
    IndexComponent,
    ProductComponent,
    ProductDetailComponent,
    ShopComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    DashboardMemmberComponent,
    EditProductComponent,
    PreviewProductComponent,
    AddProductComponent,
    ManagerMemmberComponent,
    AddMemmberComponent,
    PreviewMemmberComponent,
    DeleteMemmberComponent,
    ProductListComponent,
    ProductMobilesComponent,
    ProductTvComponent,
    NotFoudComponent,
    ProductListLiveNewComponent,
    ContactUsComponent,
    AboutComponent,
    AddtocartComponent,
    ListCartComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule


  ],
  providers: [
    ProductService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
