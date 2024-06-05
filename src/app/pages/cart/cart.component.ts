import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  products: any = []
  constructor(public productsService: ProductsService) {

  }

  ngOnInit() {
    this.productsService.getProductsForBasket().subscribe((data: any)=>{
      this.products = data
      console.log(data)
    })

  }
}
