import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { Product } from '../_Model/Product';
import { Cart } from './../_Model/cart';
@Injectable()
export class ProductService {
  api = "https://5ea05ae1eea7760016a91a68.mockapi.io/Product";
  apic="https://5ea05ae1eea7760016a91a68.mockapi.io/cart"

  constructor(
    private http: HttpClient,
  ) { }

  getProduts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api)
  };
  getProdutsNew(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.api}?search=New Mobile`)
  };
  getProdutsLiveNew(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.api}?search=Live New 99`)
  };

  getProduct(id): Observable<Product> {
    return this.http.get<Product>(`${this.api}/${id}`);
  };
  editProduct(product): Observable<Product> {
    return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }
  addProduct(product): Observable<Product> {
    return this.http.post<Product>(this.api, product);
  }
  removeProduct(id): Observable<Product> {
    return this.http.delete<Product>(`${this.api}/${id}`);
  }

  searchProuct(typeString: String): Observable<Product[]> {
    if (!typeString.trim()) {
      return of([]);
    }
 return this.http.get<Product[]>( `${this.api}?search=${typeString}`);
  }
  getcarts(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.apic)
  };
  addtocart(cart): Observable<Cart> {
    return this.http.post<Cart>(this.apic, cart);
  }
  removeCart(id): Observable<Cart> {
    return this.http.delete<Cart>(`${this.apic}/${id}`);
  }

}
