import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartsComponent } from './components/carts/carts.component';



@NgModule({
  declarations: [
    CartComponent,
    CartsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartsModule { }
