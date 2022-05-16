import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product, ShippingPrice } from 'src/app/models/product';
import { map} from 'rxjs/operators';



@Injectable()
export class ProductService {

  products$!: Observable<Product[]>
  shippingPrices$!: Observable<ShippingPrice[]>



  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.products$ = this.http
      .get<Product[]>('http://localhost:4201/products')
  }

  getProduct(id: number | string){
    return this.getProducts()
      .pipe(
        map((products: Product[]) => products.find(p => p.id === +id))
      );
  }

  getShippingPrices(): Observable<ShippingPrice[]>{
    return this.http
    .get<ShippingPrice[]>('http://localhost:4201/prices');
  }
}

