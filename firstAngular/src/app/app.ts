
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // Part 2: Store Information
  storeName: string = 'ElectroShop';
  storeDescription: string = 'Your favorite electronics store';
  storeAddress: string = 'Amman, Jordan';
  isStoreOpen: boolean = true;
  currency: string = 'USD';

  // Part 3: Products Information
  productNames: string[] = [
    'Laptop',
    'Smartphone',
    'Headphones',
    'Smart Watch',
    'Keyboard'
  ];

  productPrices: number[] = [750, 450, 80, 120, 45];

  featuredProduct = {
    name: 'Laptop',
    price: 750,
    description: 'High-performance laptop'
  };

  // Part 4: Store Status
  storeStatus: string = this.isStoreOpen
    ? 'We Are Open'
    : 'We Are Closed';

  // Part 5: Discount
  discountPercentage: number = 10;
  finalPrice: number = 0;

  // Part 6: Store Summary
  totalProducts: number = 0;
  highestPrice: number = 0;
  lowestPrice: number = 0;
  totalValue: number = 0;

  constructor() {

    // Calculate discounted price
    if (this.discountPercentage > 0) {
      this.finalPrice =
        this.featuredProduct.price -
        (this.featuredProduct.price * this.discountPercentage / 100);
    } else {
      this.finalPrice = this.featuredProduct.price;
    }

    // Calculate summary
    this.totalProducts = this.productNames.length;

    this.highestPrice = this.productPrices[0];
    this.lowestPrice = this.productPrices[0];

    for (let price of this.productPrices) {

      this.totalValue += price;

      if (price > this.highestPrice) {
        this.highestPrice = price;
      }

      if (price < this.lowestPrice) {
        this.lowestPrice = price;
      }
    }
  }
}
