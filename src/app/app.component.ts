import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { ProductServices } from './services/product.services';
import { Observable, tap } from 'rxjs';
import { ModalService } from './services/modal.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title:string = 'title'
  loading = false

  constructor(
    public productService:ProductServices,
    public modalService:ModalService
  ) {}
  ngOnInit(): void {
    this.loading = true;
    this.productService.getAllProduct().subscribe(() => {
      this.loading = false;
    })
  }
}
