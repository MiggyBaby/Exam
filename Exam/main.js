function buttonMode(){
    alert("COMING SOON")
}
// Define a function to add items to the cart
function addToCart(itemName, price) {
    // Retrieve the current cart from local storage (if it exists)
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the item to the cart
    cart.push({ itemName, price });

    // Store the updated cart in local storage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to initialize the cart when the page loads
function initializeCart() {
    // Retrieve the cart from local storage (if it exists)
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Display the cart contents (you can customize this)
    var cartContent = document.getElementById('cart-content');
    cartContent.innerHTML = ''; // Clear the previous content

    cart.forEach(function (item, index) {
        cartContent.innerHTML += `<p>${item.itemName} - Price: ₱${item.price}</p>`;
    });
}

// Call the initializeCart function when the page loads
initializeCart();
