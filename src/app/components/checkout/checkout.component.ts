import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/products.service'
import { FormBuilder } from '@angular/forms';
import { ShippingPrice } from '../../models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  shippingCosts = this.productService.getShippingPrices()

  shipping!: ShippingPrice;



  checkoutForm = this.formBuilder.group({
    name: '',
    city: '',
    address: '',
    shipping: ''
  })


  itemsCart = this.cartService.getItems();

  constructor(private cartService: CartService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.shippingCosts = this.productService.getShippingPrices();
  }

  onSubmit(): void {
    alert("Il tuo ordine è confermato, grazie!");
    console.log(this.itemsCart, this.checkoutForm.value)
    this.checkoutForm.reset();
    this.itemsCart = this.cartService.clearCart();
  }

  getChoosenShipping(shipping: ShippingPrice){
    console.log(shipping);

    this.checkoutForm.patchValue({
      shipping: shipping
    })
  }



}
