import { Component, EventEmitter, Input, OnChanges, Output, signal, SimpleChanges } from '@angular/core';

export interface CartRequest {
  productName: string;
  quantity: number;
}

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetailsComponent implements OnChanges {
  @Input() productName = '';
  @Input() productDescription = '';
  @Input() productPrice = 0;
  @Input() isAvailable = false;
  @Input() productImage = '';

  @Output() addToCart = new EventEmitter<CartRequest>();

  // The selected quantity is reactive state owned by this child component.
  quantity = signal(1);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['productName'] && !changes['productName'].firstChange) {
      this.quantity.set(1);
    }
  }

  increaseQuantity(): void {
    this.quantity.update(currentQuantity => currentQuantity + 1);
  }

  decreaseQuantity(): void {
    this.quantity.update(currentQuantity => Math.max(1, currentQuantity - 1));
  }

  addProductToCart(): void {
    this.addToCart.emit({ productName: this.productName, quantity: this.quantity() });
  }
}
