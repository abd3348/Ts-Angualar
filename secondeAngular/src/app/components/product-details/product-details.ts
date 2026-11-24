import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({ selector: 'app-product-details', imports: [FormsModule], templateUrl: './product-details.html', styleUrl: './product-details.css' })
export class ProductDetailsComponent {
  productName = 'Laptop';
  productDescription = 'High-performance laptop built for demanding work and everyday creativity.';
  productPrice = 750;
  productImage = 'assets/laptop.svg';
  quantity = 1;
  isAvailable = true;
  discountPercentage = 10;
  get discountedPrice(): number { return this.productPrice * (1 - this.discountPercentage / 100); }
  increaseQuantity(): void { this.quantity++; }
  decreaseQuantity(): void { if (this.quantity > 1) this.quantity--; }
  saveChanges(): void { alert(`${this.productName} details were updated successfully.`); }
}
