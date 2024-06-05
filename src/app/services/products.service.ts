import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get("https://restaurant.stepprojects.ge/api/Products/GetAll")
  }

  getProductsForBasket() {
    return this.http.get("https://restaurant.stepprojects.ge/api/Baskets/GetAll")
  }

  deleteProductFromBasket(id: number) {
    this.http.delete("https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/" + id).subscribe()
  }

  addToCart(id:number, price: number){
    let product = {
      "quantity": 1,
      "price": price,
      "productId": id
    }

    this.http.post("https://restaurant.stepprojects.ge/api/Baskets/AddToBasket", product).subscribe()
  }

  deleteProductFromBasketOther(id: number) {
    this.http.delete("https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/" + id).subscribe()
  }

}
