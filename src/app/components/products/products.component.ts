import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from '../../services/products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$!:  Observable<Product[]>



  constructor(private productservice: ProductService) { }

  ngOnInit(){
    this.products$ = this.productservice.getProducts();
  }

}
