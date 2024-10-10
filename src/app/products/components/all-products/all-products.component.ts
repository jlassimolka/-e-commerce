import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];
  loading:boolean=false;
  cartProducts:any[]=[]

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading=true
    this.service.getAllproducts().subscribe(
      (res: any) => {
        this.products = res;
        this.loading=false
      },
      (error) => {
        this.loading=false
        alert("Error");
      }
    );
  }

  getCategories() {
    this.loading=true
    this.service.getAllCategories().subscribe(
      (res: any) => {
        this.categories = res;
        this.loading=false
        
      },
      (error) => {
        this.loading=false
        alert("Error");
      }
    );
  }

  filterCategory(event: any) {
    const value = event.target.value;

    if (value === 'all') {
      // Show all products
      this.products = this.products;
    } else {
      // Filter products by category
      this.getProductsCategory(value);
    }
  }

  getProductsCategory(keyword: string) {
    this.loading=true
    this.service.getProductsByCategory(keyword).subscribe(
      (res: any) => {
        this.loading=false
        this.products = res;
      },
      (error) => {
        alert("Error");
      }
    );
  }
  addToCart(event:any)
  {
    if ("cart" in localStorage)
    {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist=this.cartProducts.find(item =>item.id==event.id)
      if(exist){
        alert("product is already in your cart")
      }else {
        this.cartProducts.push(event)
      localStorage.setItem("cart" ,JSON.stringify(this.cartProducts))

      }
      this.cartProducts.push(event)
      localStorage.setItem("cart" ,JSON.stringify(this.cartProducts))
    }else{
      this.cartProducts.push(event)
      localStorage.setItem("cart" ,JSON.stringify(this.cartProducts))
    }
    
  }
}
