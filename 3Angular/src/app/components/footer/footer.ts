import { Component } from '@angular/core';

@Component({ selector: 'app-footer', imports: [], templateUrl: './footer.html', styleUrl: './footer.css' })
export class FooterComponent {
  storeName = 'ElectroShop';
  storeAddress = '25 Technology Street, Amman, Jordan';
  contactEmail = 'hello@electroshop.com';
  copyrightMessage = '© 2026 ElectroShop. All rights reserved.';
}
