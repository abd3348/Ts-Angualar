import { Component } from '@angular/core';

@Component({ selector: 'app-header', imports: [], templateUrl: './header.html', styleUrl: './header.css' })
export class HeaderComponent {
  storeName = 'ElectroShop';
  welcomeMessage = 'Welcome to your smart shopping destination';
  slogan = 'Everything You Need in One Place';
}
