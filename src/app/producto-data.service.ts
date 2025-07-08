import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from './product-list/Product';

const URL = 'https://68683011d5933161d70b093e.mockapi.io/productos/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoDataService {

  constructor(private http: HttpClient) {

   }

  public getAllProducts():Observable<Product[]>{

      return this.http.get<Product[]>(URL)
        .pipe(
          tap((products:Product[])=>products.forEach(product=> product.quantity=0))
          
        );//devuelve un observable
  }

  public insertProduct(product:Partial<Product>): Observable<Product> {
    return this.http.post<Product>(URL, product);
      
  }

}
