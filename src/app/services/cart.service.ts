import { Injectable } from '@angular/core';
import { Product, ShippingPrice } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  itemsCart: Product[] = [];

  constructor(private http: HttpClient) { }


  addToCart(product: Product){
    this.itemsCart.push(product);
  }

  getItems(){
    return this.itemsCart;
  }

  removeProduct(product: Product){
    this.itemsCart.splice(this.itemsCart.indexOf(product));
  }

  clearCart(){
    this.itemsCart = [];
    return this.itemsCart;
  }



}
