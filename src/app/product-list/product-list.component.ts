import { Component } from '@angular/core';
import { Product } from './Product';
import { MercadoCartService } from '../mercado-cart.service';
import { ProductoDataService } from '../producto-data.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
products: Product[] =[];
  
showModal:boolean= false;
modalMessage:string='';

constructor(private cart:MercadoCartService, private productosService:ProductoDataService){
}

ngOnInit(): void{
  this.productosService.getAllProducts().subscribe(data=> this.products = data);
}


addToCart(product:Product):void{
  
  if(product.quantity>0){
    this.cart.addToCart(product);
    product.stock-=product.quantity;
    product.quantity=0;
  }
  
}


maxReached(m:string){
  this.modalMessage = m;
  this.showModal = true;
}

closeModal() {
  this.showModal = false;
}

}
