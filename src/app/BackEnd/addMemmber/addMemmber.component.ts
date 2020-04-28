import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_Model/Product';

@Component({
  selector: 'app-addMemmber',
  templateUrl: './addMemmber.component.html',
  styleUrls: ['./addMemmber.component.css']
})
export class AddMemmberComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

product:Product;
}
