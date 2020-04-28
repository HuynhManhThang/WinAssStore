import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_Model/Product';
import { ProductService } from 'src/app/_Services/product.service';

@Component({
  selector: 'app-managerProduct',
  templateUrl: './managerProduct.component.html',
  styleUrls: ['./managerProduct.component.css']
})
export class ManagerProductComponent implements OnInit {
page=1;
pageSize=5;
searchText;
  products :Product[];
  constructor(
    private productSer: ProductService,
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    return  this.productSer.getProduts().subscribe(data => this.products=data)
    }
    removeItem(id){
      this.productSer.removeProduct(id).subscribe(response => {
        this.products = this.products.filter(product => product.id != response.id);
      })
     }
}
