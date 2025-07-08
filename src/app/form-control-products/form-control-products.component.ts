import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductoDataService } from '../producto-data.service';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-form-control-products',
  standalone: false,
  templateUrl: './form-control-products.component.html',
  styleUrl: './form-control-products.component.scss'
})
export class FormControlProductsComponent {

  constructor(private productosService:ProductoDataService){

  }

  formInventory = new FormGroup({
  name: new FormControl<string>('', { nonNullable: true, validators: [Validators.required,Validators.minLength(5)] }),
  category: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
  price: new FormControl<number>(0, { nonNullable: true, validators: [Validators.required,Validators.min(1)] }),
  image: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
  quantity: new FormControl<number>(0, { nonNullable: true, validators: [Validators.required,Validators.min(1)] }),
  clearance: new FormControl<boolean>(false, { nonNullable: true })
});


  onSubmit() {
    //obtengo los valores del form, para asi poder obtener quantity e igualarlo al stock
  const formValue = this.formInventory.getRawValue();

  const producto: Partial<Product> = {
    ...formValue,//creo una copia del objeto
    stock: formValue.quantity, // asignamos stock igual a quantity
  };

  this.productosService.insertProduct(producto).subscribe(nuevo => {
    console.log('Producto creado:', nuevo);
    this.formInventory.reset();
  });

  
}


}
