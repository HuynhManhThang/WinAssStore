import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_Model/Product';
import { ProductService } from 'src/app/_Services/product.service';

@Component({
  selector: 'app-Shop',
  templateUrl: './Shop.component.html',
  styleUrls: ['./Shop.component.css']
})
export class ShopComponent implements OnInit {
  page=1;
  pageSize=16;
  product :Product[];
  searchText;


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
