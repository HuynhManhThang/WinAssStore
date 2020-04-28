import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_Model/Product';
import { ProductService } from 'src/app/_Services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-previewProduct',
  templateUrl: './previewProduct.component.html',
  styleUrls: ['./previewProduct.component.css']
})
export class PreviewProductComponent implements OnInit {
  product :  Product;
  constructor(
    private pServices :ProductService,
    private aRoute: ActivatedRoute,
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
}
