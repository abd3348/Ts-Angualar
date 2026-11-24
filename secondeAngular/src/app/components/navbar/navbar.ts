import { Component } from '@angular/core';

@Component({ selector: 'app-navbar', imports: [], templateUrl: './navbar.html', styleUrl: './navbar.css' })
export class NavbarComponent {
  selectedPage = 'Home';
  selectPage(pageName: string): void { this.selectedPage = pageName; }
}
