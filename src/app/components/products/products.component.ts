import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { RouterModule, Route} from '@angular/router';
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
