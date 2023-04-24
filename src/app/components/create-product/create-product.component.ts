import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IInputField, IProduct } from 'src/app/models/product';
import { ModalService } from 'src/app/services/modal.service';
import { ProductServices } from 'src/app/services/product.services';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  inputFieldArr:IInputField[] = [{
    type:'text',
    placeholder:'Product name',
    formControlName:'title'
  }, {
    type:'number',
    placeholder:'Product price',
    formControlName:'price'
  }, {
    type:'text',
    placeholder:'Product description',
    formControlName:'description'
  }, {
    type:'text',
    placeholder:'Product image link',
    formControlName:'image'
  }, {
    type:'text',
    placeholder:'Product category',
    formControlName:'category'
  }, {
    type:'number',
    placeholder:'Product rating',
    formControlName:'rating'
  }
  ]
  form = new FormGroup({
    title: new FormControl<string>('',[
      Validators.required,
      Validators.minLength(6)
    ]),
    price: new FormControl<number>(0,[
      Validators.required
    ]),
    description: new FormControl<string>('',[
      Validators.required,
      Validators.minLength(6)
    ]),
    category: new FormControl<string>('',[
      Validators.required,
      Validators.minLength(3)
    ]),
    image: new FormControl<string>('https://i.pravatar.cc',[
      Validators.required,
      Validators.minLength(6)
    ]),
    rating: new FormControl<number>(0,[
      Validators.required
    ]),
  })

  constructor(
    private productService:ProductServices,
    private modalService:ModalService
  ) {}
  submit() {
    this.productService.createProduct({
      title:this.form.value.title as string,
      price:this.form.value.price as number,
      description:this.form.value.description as string,
      image:this.form.value.image as string,
      category:this.form.value.category as string,
      rating:{
        rate:10,
        count:1
      }
    }).subscribe(() => this.modalService.close())
  }
}
