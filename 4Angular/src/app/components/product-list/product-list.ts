import { Component } from '@angular/core';

interface Product { name: string; description: string; price: number; image: string; availability: string; }

@Component({ selector: 'app-product-list', imports: [], templateUrl: './product-list.html', styleUrl: './product-list.css' })
export class ProductListComponent {
  products: Product[] = [
    { name: 'Laptop', description: 'High-performance laptop', price: 750, image: 'assets/laptop.svg', availability: 'Available' },
    { name: 'Smartphone', description: 'Latest smartphone', price: 450, image: 'assets/smartphone.svg', availability: 'Available' },
    { name: 'Headphones', description: 'Wireless headphones', price: 80, image: 'assets/headphones.svg', availability: 'Available' },
    { name: 'Smart Watch', description: 'Smart fitness watch', price: 120, image: 'assets/watch.svg', availability: 'Available' },
    { name: 'Keyboard', description: 'Mechanical keyboard', price: 45, image: 'assets/keyboard.svg', availability: 'Unavailable' },
  ];
  buyNow(productName: string): void { alert(`${productName} has been added to your cart!`); }
}
