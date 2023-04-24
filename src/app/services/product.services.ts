import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import { IProduct } from "../models/product";
import { Observable, catchError, throwError, tap} from "rxjs";
import { ErrorService } from "./error.service";

@Injectable({
  providedIn: 'root'
})

export class ProductServices {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {}
  products:IProduct[] = []


  getAllProduct():Observable<IProduct[]> {
    return this.http.get<IProduct[]>("https://fakestoreapi.com/products",{
      params: new HttpParams({
        fromObject: {
          limit:5
        }
      })
    }).pipe(
      tap(products => this.products = products),
      catchError(this.errorHandler.bind(this))
    )
  }
  createProduct(product:IProduct):Observable<IProduct> {
    return this.http.post<IProduct>("https://fakestoreapi.com/products",product)
      .pipe(
        tap(() => {
          this.products.push(product)
        }),
        catchError(this.errorHandler.bind(this))
      )
  }
  deleteProduct(id:number | undefined):Observable<IProduct> {
    return this.http.delete<IProduct>(`https://fakestoreapi.com/products/${id}`)
      .pipe(
        tap(product => {
          this.products = this.products.filter(({id}) => product.id !== id)
        }),
        catchError(this.errorHandler.bind(this))
      )
  }

  private errorHandler(error:HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message)
  }
}