import { Cart } from './../_Model/cart';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
api="https://5ea05ae1eea7760016a91a68.mockapi.io/cart"
constructor(
  private http: HttpClient,
) { }

getcarts(): Observable<Cart[]> {
  return this.http.get<Cart[]>(this.api)
};
addtocart(cart): Observable<Cart> {
  return this.http.post<Cart>(this.api, cart);
}
removeCart(id): Observable<Cart> {
  return this.http.delete<Cart>(`${this.api}/${id}`);
}
}
