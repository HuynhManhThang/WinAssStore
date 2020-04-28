import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_Model/Product';
import { ProductService } from 'src/app/_Services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addProduct',
  templateUrl: './addProduct.component.html',
  styleUrls: ['./addProduct.component.css']
})
export class AddProductComponent implements OnInit {
  products :Product[];
  product: Product = new Product();
    constructor(
      private pService: ProductService,
      private aRouter : ActivatedRoute,
      private router :Router,
    ) { }

  ngOnInit() {
    this.getProduct();

  }
  getProduct(){
    this.aRouter.params.subscribe(param =>{
    this.pService.getProduct(param.id).subscribe(data => {
      this.product =data
    });
    });
    }
  addProducts(){
    this.pService.addProduct(this.product).subscribe(data => {
      this.router.navigateByUrl('/admin/managerPoduct')
      // console.log(data)
    });
    }
}
