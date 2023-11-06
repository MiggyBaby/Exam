// main.js
function addToCart(productName, price) {
    const item = { productName, price };

    // Retrieve the existing cart items from local storage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new item to the cart
    cart.push(item);

    // Save the updated cart in local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart button to show the number of items in the cart
    updateCartButton();
}

function updateCartButton() {
    const cartButton = document.querySelector('.cart-button');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartButton.textContent = `View Cart (${cart.length})`;
}