import {Component, Input} from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { ProductServices } from 'src/app/services/product.services';
import { tap } from 'rxjs';

@Component ({
  selector:'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() productItem:IProduct
  details:boolean = false

  constructor(private productService:ProductServices) {}

  removeProduct(id:number | undefined) {
    this.productService.deleteProduct(id).subscribe(response => console.log(response))
  }
}