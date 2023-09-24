import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';

import { Product, ProductResolved } from './product';
import { ProductService } from './product.service';

import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })

  export class ProductListResolver implements Resolve<Product[]> {
    products: ProductResolved[]=[]

    constructor(private productService: ProductService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
       return this.productService.getProducts().pipe()
    }
  }