# ElectroShop – Angular Day 2

An Angular product-management page built with five reusable standalone components:

- `HeaderComponent`
- `NavbarComponent`
- `ProductListComponent`
- `ProductDetailsComponent`
- `FooterComponent`

The project demonstrates interpolation, property binding, event binding, two-way binding, disabled states, product editing, and quantity controls. The five product cards are written manually in the template, without `*ngFor` or `@for`, as required by the assignment.

The follow-up lab adds reactive state and multi-component communication:

- `signal()` and `update()` manage product and quantity state.
- `AppComponent` passes product data through `@Input()`.
- `ProductDetailsComponent` emits the selected name and quantity through `@Output()` and `EventEmitter`.
- `ShoppingCartComponent` receives the selection and calculates the total price.
- Laptop and Wireless Headphones can be switched using the same reusable product-details component.

## Run the project

```bash
npm install
npm start
```

Then open `http://localhost:4200`.

## Verify

```bash
npm run build
npm test -- --watch=false
```
