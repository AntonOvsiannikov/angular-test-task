import { Injectable } from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import { IProduct } from "../models/product";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ProductServices {
  constructor(private http: HttpClient) {}

  getAllProduct():Observable<IProduct[]> {
    return this.http.get<IProduct[]>("https://fakestoreapi.com/products",{
      params: new HttpParams({
        fromObject: {
          limit:5
        }
      })
    })
  }
}