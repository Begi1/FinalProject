import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: any = []
  constructor(public productsService: ProductsService) {

  }

  ngOnInit() {
    this.productsService.getProducts().subscribe((data: any)=>{
      this.products = data
    })

  }
}
