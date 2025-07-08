import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MercadoComprasComponent } from './mercado-compras/mercado-compras.component';
import { MercadoreguladoAboutComponent } from './mercadoregulado-about/mercadoregulado-about.component';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'Productos',
    pathMatch:'full'
  },
  {
    path:'Productos',
    component:MercadoComprasComponent
  },
  {
    path:'About',
    component:MercadoreguladoAboutComponent
  },
  {
    path:'Inventory',
    component:InventoryComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
