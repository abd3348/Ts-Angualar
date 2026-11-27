import { Component, signal } from '@angular/core';
import { FooterComponent } from './components/footer/footer';
import { HeaderComponent } from './components/header/header';
import { NavbarComponent } from './components/navbar/navbar';
import { CartRequest, ProductDetailsComponent } from './components/product-details/product-details';
import { ProductListComponent } from './components/product-list/product-list';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, NavbarComponent, ProductListComponent, ProductDetailsComponent, ShoppingCartComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'ElectroShop';

  // Parent state: these Signals are passed to ProductDetailsComponent via @Input.
  productName = signal('Laptop');
  productDescription = signal('Dell Laptop, Core i7, 16GB RAM');
  productPrice = signal(850);
  productAvailability = signal(true);
  productImage = signal('assets/laptop.svg');
  activeProduct = signal<'laptop' | 'headphones'>('laptop');

  // Cart state: AppComponent receives the child event, then passes it to ShoppingCartComponent.
  cartProductName = signal('');
  cartProductPrice = signal(0);
  cartQuantity = signal(0);

  handleAddToCart(selection: CartRequest): void {
    this.cartProductName.set(selection.productName);
    this.cartProductPrice.set(this.productPrice());
    this.cartQuantity.set(selection.quantity);
  }

  showLaptop(): void {
    this.activeProduct.set('laptop');
    this.productName.set('Laptop');
    this.productDescription.set('Dell Laptop, Core i7, 16GB RAM');
    this.productPrice.set(850);
    this.productAvailability.set(true);
    this.productImage.set('assets/laptop.svg');
  }

  showHeadphones(): void {
    this.activeProduct.set('headphones');
    this.productName.set('Wireless Headphones');
    this.productDescription.set('Bluetooth Headphones');
    this.productPrice.set(120);
    this.productAvailability.set(true);
    this.productImage.set('assets/headphones.svg');
  }
}
