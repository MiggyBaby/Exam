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

function showNewItemForm() {
    const newItemForm = document.getElementById("new-item-form");
    newItemForm.style.display = "block";
}

function addNewItem() {
    const productNameInput = document.getElementById("product-name");
    const productPriceInput = document.getElementById("product-price");
    const productName = productNameInput.value;
    const productPrice = parseFloat(productPriceInput.value);

    if (productName && !isNaN(productPrice)) {
        addToCart(productName, productPrice);
        hideNewItemForm();
    }
}

function hideNewItemForm() {
    const newItemForm = document.getElementById("new-item-form");
    newItemForm.style.display = "none";
    clearNewItemFormInputs();
}

function clearNewItemFormInputs() {
    document.getElementById("product-name").value = "";
    document.getElementById("product-price").value = "";
}

document.addEventListener('DOMContentLoaded', () => {
    // ...

    // Create a function to update the placeholder
    function updatePlaceholder() {
        const placeholder = document.getElementById("placeholder");
        const emptySlot = cart.length === 0;

        if (emptySlot) {
            placeholder.style.display = "block";
        } else {
            placeholder.style.display = "none";
        }
    }

    // ...

    function addNewItem() {
        const productNameInput = document.getElementById("product-name");
        const productPriceInput = document.getElementById("product-price");
        const productName = productNameInput.value;
        const productPrice = parseFloat(productPriceInput.value);

        if (productName && !isNaN(productPrice)) {
            addToCart(productName, productPrice);
            hideNewItemForm();
            updatePlaceholder(); // Update the placeholder when an item is added
        }
    }

    // ...

    // Ensure the placeholder is updated when the page loads
    updatePlaceholder();
});

