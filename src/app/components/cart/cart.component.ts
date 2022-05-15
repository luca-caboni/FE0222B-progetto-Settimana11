import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { FormBuilder } from '@angular/forms';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  product!: Product;


  itemsCart = this.cartService.getItems();

  constructor(private cartService: CartService, private formBuilder: FormBuilder) { }


  ngOnInit(): void {
  }


  removeProduct(product: Product): void {
    this.cartService.removeProduct(product);
  }

}

