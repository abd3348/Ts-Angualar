import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  imports: [],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.css',
})
export class ShoppingCartComponent {
  @Input() productName = '';
  @Input() productPrice = 0;
  @Input() selectedQuantity = 0;

  get totalPrice(): number {
    return this.productPrice * this.selectedQuantity;
  }
}
