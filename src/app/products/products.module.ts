import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { PoductsDetailsComponent } from './components/poducts-details/poducts-details.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';



@NgModule({
  declarations: [
    AllProductsComponent,
    PoductsDetailsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProductsModule { }
