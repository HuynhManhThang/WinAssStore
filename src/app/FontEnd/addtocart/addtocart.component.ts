import { Cart } from './../../_Model/cart';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_Model/Product';
import { ProductService } from 'src/app/_Services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

  product :  Product;
  cart:Cart;
  constructor(
    private pServices :ProductService,
    private aRoute: ActivatedRoute,
    private router :Router,

  ) { }

  ngOnInit() {
    this.getProduct();
  }
  getProduct(){
    return this.aRoute.params.subscribe(param => {
      this.pServices.getProduct(param.id).subscribe(data =>{
        this.product=data
      })
    })
  }
  addtocart(){
    console.log("đến đây rồi")
    this.pServices.addtocart(this.cart).subscribe(cartdata => {
      this.router.navigateByUrl('/index/cart')
      console.log(cartdata)
    });
    }
}
