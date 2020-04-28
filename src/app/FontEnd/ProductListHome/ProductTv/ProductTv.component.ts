import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_Model/Product';
import { ProductService } from 'src/app/_Services/product.service';

@Component({
  selector: 'app-ProductTv',
  templateUrl: './ProductTv.component.html',
  styleUrls: ['./ProductTv.component.css']
})
export class ProductTvComponent implements OnInit {
  page=1;
  pageSize=8;
  product :Product[];
  constructor(
    private productSer: ProductService,
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    return  this.productSer.getProduts().subscribe(data => this.product=data)
    }
}
