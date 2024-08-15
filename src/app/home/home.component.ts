import { Component, inject, OnInit } from '@angular/core';
import { ProductsApiService } from '../products-api.service';
import { IProducts } from '../iproducts';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

 private readonly  _ProductsApiService = inject(ProductsApiService)

 productsData:IProducts[] = []
 ngOnInit(): void {
   this._ProductsApiService.getProducts().subscribe({
    next:(res)=>{
      this.productsData = res
console.log(res)
    },
    error:(err)=>{
      console.log(err);
      
    }
   })
 }

}
