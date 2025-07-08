import { Injectable } from '@angular/core';
import { Product } from './product-list/Product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MercadoCartService {

  private _cartList: Product[]=[];
  cartList: BehaviorSubject<Product[]>=new BehaviorSubject(this._cartList);

  constructor() {

   }

  addToCart(product: Product) {
    let item: Product | undefined =this._cartList.find((v1)=>v1.name==product.name);

    if(!item){
      this._cartList.push({... product});
    }else{
      item.quantity+= product.quantity;
    }
    console.log(this.cartList);
    this.cartList.next(this._cartList);
  }

  vaciarCarrito() {
    this._cartList=[];//asi no quedan en memoria y se vuelven a mostrar cuando se agregan nuvos productos luego de la compra
    this.cartList.next([]);

  
}

}
