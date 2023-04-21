import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { productArr } from './data/product';
import { ProductServices } from './services/product.services';
import { Observable, tap } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title:string = 'title'
  productArr$: Observable<IProduct[]>
  loading = false

  constructor(private productService:ProductServices) {}
  ngOnInit(): void {
    this.loading = true
    this.productArr$ = this.productService.getAllProduct().pipe(
      tap(() => this.loading = false)
    )
  }
}
