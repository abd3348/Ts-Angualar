// Part 1: TypeScript variables
const storeName: string = "ElectroShop";
const storeDescription: string =
  "Your destination for laptops, phones, audio devices, and computer accessories.";
const currency: string = "USD";
let numberOfAvailableProducts: number = 3;
let isStoreOpen: boolean = true;

// Part 3: An array containing at least five electronic product names
const productNames: string[] = [
  "Laptop",
  "Mobile Phone",
  "Headphones",
  "Keyboard",
  "Computer Mouse",
];

// A multi-type array: product name, price, and availability
const mixedProductData: (string | number | boolean)[] = [
  "Laptop",
  650,
  true,
];

// Prices used for the conditional and counting exercises
const productPrices: number[] = [650, 899, 75, 45, 120];

// Part 4: Check whether the store is open or closed
const storeMessage: string = isStoreOpen
  ? "The store is currently open."
  : "The store is currently closed.";

console.log(storeMessage);

// Check a product price and return its price category
function getPriceCategory(price: number): string {
  if (price > 500) {
    return "Expensive Product";
  } else if (price >= 100 && price <= 500) {
    return "Medium Price";
  } else {
    return "Affordable Product";
  }
}

console.log(`Laptop: ${getPriceCategory(650)}`);

// Display every product name using a loop
for (const productName of productNames) {
  console.log(productName);
}

// Count products whose price is greater than 100
let productsOver100: number = 0;

for (const price of productPrices) {
  if (price > 100) {
    productsOver100++;
  }
}

console.log(`Products with a price greater than 100: ${productsOver100}`);

// Part 5: Function parameters and return types
function calculateDiscount(originalPrice: number, discountPercentage: number,): number {
  const discountAmount: number = originalPrice * (discountPercentage / 100);
  return originalPrice - discountAmount;
}

function checkProductAvailability(quantity: number): string {
  return quantity > 0 ? "In Stock" : "Out of Stock";
}

function displayStoreMessage(message: string): void {
  console.log(message);
}

// Part 6: Optional description and default currency parameters
function displayProductInfo(productName: string, productPrice: number, productDescription?: string, productCurrency: string = "USD",): void {

  console.log(`Product: ${productName}`);
  console.log(`Price: ${productPrice} ${productCurrency}`);

  if (productDescription) {
    console.log(`Description: ${productDescription}`);
  }
}

// Part 7: Rest parameter
function calculateTotalPrice(...prices: number[]): number {
  return prices.reduce((total, price) => total + price, 0);
}

// Examples of using the required functions
displayStoreMessage(`Welcome to ${storeName}!`);
console.log(`Discounted price: ${calculateDiscount(650, 10)} ${currency}`);
console.log(checkProductAvailability(numberOfAvailableProducts));
displayProductInfo("Laptop", 650, "Core i5, 8GB RAM");
console.log(`Total price: ${calculateTotalPrice(100, 200, 50, 150)}`);
console.log("Multi-type product data:", mixedProductData);

// Main practical requirement: exactly three electronic products
interface Product {
  name: string;
  description: string;
  price: number;
}

const products: Product[] = [
  {
    name: "Laptop",
    description: "Core i5, 8GB RAM",
    price: 650,
  },
  {
    name: "Headphones",
    description: "Wireless Bluetooth headphones",
    price: 75,
  },
  {
    name: "Keyboard",
    description: "Mechanical gaming keyboard",
    price: 45,
  },
];

// Select the required HTML elements
const storeNameHeading = document.querySelector<HTMLHeadingElement>("#store-name");
const storeDescriptionElement =
  document.querySelector<HTMLParagraphElement>("#store-description");
const storeStatusElement =
  document.querySelector<HTMLParagraphElement>("#store-status");
const loadProductsButton =
  document.querySelector<HTMLButtonElement>("#load-products");
const productsContainer =
  document.querySelector<HTMLDivElement>("#products-container");

// Display the store information on the page
if (storeNameHeading) {
  storeNameHeading.textContent = storeName;
}

if (storeDescriptionElement) {
  storeDescriptionElement.textContent = storeDescription;
}

if (storeStatusElement) {
  storeStatusElement.textContent = isStoreOpen ? "Open now" : "Closed now";
  storeStatusElement.classList.toggle("status--closed", !isStoreOpen);
}

// Build and return one product card
function createProductCard(product: Product): HTMLElement {
  const card = document.createElement("article");
  const name = document.createElement("h3");
  const description = document.createElement("p");
  const price = document.createElement("p");

  card.className = "product-card";
  description.className = "product-card__description";
  price.className = "product-card__price";

  name.textContent = product.name;
  description.textContent = product.description;
  price.textContent = `${product.price} ${currency}`;

  card.append(name, description, price);
  return card;
}

// Products are displayed only after the user clicks the button
loadProductsButton?.addEventListener("click", () => {
  if (!productsContainer) {
    return;
  }

  productsContainer.replaceChildren();

  for (const product of products) {
    productsContainer.append(createProductCard(product));
  }

  loadProductsButton.textContent = "Products Loaded";
  loadProductsButton.disabled = true;
});
