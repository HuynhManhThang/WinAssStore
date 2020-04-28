import { Cart } from './../../_Model/cart';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/_Services/cart.service';

@Component({
  selector: 'app-ListCart',
  templateUrl: './ListCart.component.html',
  styleUrls: ['./ListCart.component.css']
})
export class ListCartComponent implements OnInit {
  page=1;
  pageSize=5;
  carts :Cart[];
  constructor(
    private cService: CartService,
  ) { }

  ngOnInit() {
    this.getCarts();
  }
  getCarts(){
    return  this.cService.getcarts().subscribe(data => this.carts=data)
    }
    removeItem(id){
      this.cService.removeCart(id).subscribe(response => {
        this.carts = this.carts.filter(cartdata => cartdata.id != cartdata.id);
      })
     }
}
