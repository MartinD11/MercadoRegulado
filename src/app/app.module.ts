import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MercadoreguladoAboutComponent } from './mercadoregulado-about/mercadoregulado-about.component';
import { MercadoComprasComponent } from './mercado-compras/mercado-compras.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import {HttpClient,HttpClientModule} from  '@angular/common/http';
import { InventoryComponent } from './inventory/inventory.component';
import { FormControlProductsComponent } from './form-control-products/form-control-products.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    MercadoreguladoAboutComponent,
    MercadoComprasComponent,
    CartComponent,
    InputIntegerComponent,
    InventoryComponent,
    FormControlProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
