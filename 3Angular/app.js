"use strict";
// Part 1: TypeScript variables
const storeName = "ElectroShop";
const storeDescription = "Your destination for laptops, phones, audio devices, and computer accessories.";
const currency = "USD";
let numberOfAvailableProducts = 3;
let isStoreOpen = true;
// Part 3: An array containing at least five electronic product names
const productNames = [
    "Laptop",
    "Mobile Phone",
    "Headphones",
    "Keyboard",
    "Computer Mouse",
];
// A multi-type array: product name, price, and availability
const mixedProductData = [
    "Laptop",
    650,
    true,
];
// Prices used for the conditional and counting exercises
const productPrices = [650, 899, 75, 45, 120];
// Part 4: Check whether the store is open or closed
const storeMessage = isStoreOpen
    ? "The store is currently open."
    : "The store is currently closed.";
console.log(storeMessage);
// Check a product price and return its price category
function getPriceCategory(price) {
    if (price > 500) {
        return "Expensive Product";
    }
    else if (price >= 100 && price <= 500) {
        return "Medium Price";
    }
    else {
        return "Affordable Product";
    }
}
console.log(`Laptop: ${getPriceCategory(650)}`);
// Display every product name using a loop
for (const productName of productNames) {
    console.log(productName);
}
// Count products whose price is greater than 100
let productsOver100 = 0;
for (const price of productPrices) {
    if (price > 100) {
        productsOver100++;
    }
}
console.log(`Products with a price greater than 100: ${productsOver100}`);
// Part 5: Function parameters and return types
function calculateDiscount(originalPrice, discountPercentage) {
    const discountAmount = originalPrice * (discountPercentage / 100);
    return originalPrice - discountAmount;
}
function checkProductAvailability(quantity) {
    return quantity > 0 ? "In Stock" : "Out of Stock";
}
function displayStoreMessage(message) {
    console.log(message);
}
// Part 6: Optional description and default currency parameters
function displayProductInfo(productName, productPrice, productDescription, productCurrency = "USD") {
    console.log(`Product: ${productName}`);
    console.log(`Price: ${productPrice} ${productCurrency}`);
    if (productDescription) {
        console.log(`Description: ${productDescription}`);
    }
}
// Part 7: Rest parameter
function calculateTotalPrice(...prices) {
    return prices.reduce((total, price) => total + price, 0);
}
// Examples of using the required functions
displayStoreMessage(`Welcome to ${storeName}!`);
console.log(`Discounted price: ${calculateDiscount(650, 10)} ${currency}`);
console.log(checkProductAvailability(numberOfAvailableProducts));
displayProductInfo("Laptop", 650, "Core i5, 8GB RAM");
console.log(`Total price: ${calculateTotalPrice(100, 200, 50, 150)}`);
console.log("Multi-type product data:", mixedProductData);
const products = [
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
const storeNameHeading = document.querySelector("#store-name");
const storeDescriptionElement = document.querySelector("#store-description");
const storeStatusElement = document.querySelector("#store-status");
const loadProductsButton = document.querySelector("#load-products");
const productsContainer = document.querySelector("#products-container");
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
function createProductCard(product) {
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
