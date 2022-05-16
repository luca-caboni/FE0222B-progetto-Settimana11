import { Injectable } from '@angular/core';
import { Product} from '../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  itemsCart: Product[] = [];
  count: number = 0;


  constructor(private http: HttpClient) {}


  addToCart(product: Product){
    this.itemsCart.push(product);
    this.count++;
  }

  getItems(){
    return this.itemsCart;
  }

  removeProduct(product: Product){
    this.itemsCart.splice(this.itemsCart.indexOf(product));
    this.count--;
  }

  clearCart(){
    this.itemsCart = [];
    this.count = 0;
    return this.itemsCart;
  }

  counter(): number {
    return this.count++;
}



}
