import { Component } from '@angular/core';
import { MercadoCartService } from '../mercado-cart.service';
import { Product } from '../product-list/Product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartList$!: Observable< Product[]>;

  //inyeccion de servicio 
  constructor(private cart:MercadoCartService){
    this.cartList$ = cart.cartList.asObservable();
  }

  getTotal(products: Product[]): number {
    return products.reduce((acc, p) => acc + (p.price * (p.quantity || 1)), 0);
}

vaciarCarrito(){
  this.cart.vaciarCarrito();
}

}
