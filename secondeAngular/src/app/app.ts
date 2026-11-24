import { Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer';
import { HeaderComponent } from './components/header/header';
import { NavbarComponent } from './components/navbar/navbar';
import { ProductDetailsComponent } from './components/product-details/product-details';
import { ProductListComponent } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, NavbarComponent, ProductListComponent, ProductDetailsComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App { title = 'ElectroShop'; }
