import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_Model/Product';
import { ProductService } from 'src/app/_Services/product.service';

@Component({
  selector: 'app-ProductListLiveNew',
  templateUrl: './ProductListLiveNew.component.html',
  styleUrls: ['./ProductListLiveNew.component.css']
})
export class ProductListLiveNewComponent implements OnInit {

  page=1;
  pageSize=8;
  productliveNew :Product[];
  constructor(
    private productSer: ProductService,
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    return  this.productSer.getProdutsLiveNew().subscribe(data => this.productliveNew=data)
    }

}
