import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  pageTitle = 'Dettagli prodotto';
  productPriceQuote: string = "Può essere tuo a soli: "
  product: Product | undefined
  private sub!: Subscription;

  constructor(private route: ActivatedRoute,
    private productservice: ProductService,
    private router: Router,
    private cartservice: CartService) {
  }

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(
      params => {
        let id = +params['id'];
        this.getProduct(id);
      });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  getProduct(id: number | string) {
    this.productservice.getProduct(id).subscribe(
      product => this.product = product);
  }

  addToCart(product: Product) {
    this.cartservice.addToCart(product);
    window.alert('Il prodotto è stato aggiunto al carrello')
  }
}



