// cart.js
document.addEventListener('DOMContentLoaded', () => {
    const cartItemsList = document.getElementById("cart-items");
    const totalCostDisplay = document.getElementById("total-cost");

    // Retrieve cart items from local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Display cart items on the page
    let totalCost = calculateTotalCost(cart);
    totalCostDisplay.textContent = `Total Ordered: ₱${totalCost}`;

    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];

        // ... (other code for displaying items)

        // Calculate the total cost
        totalCost += item.price * item.quantity;

        // Append elements to the item container
        // ...

        cartItemsList.appendChild(itemContainer);
    }

    // Update the total cost
    totalCostDisplay.textContent = `Total Ordered: ₱${totalCost}`;
    saveCartItems(cart);
});

function calculateTotalCost(cart) {
    return cart.reduce((total, item) => {
        const price = parseInt(item.price, 10);
        if (!isNaN(price) && item.quantity >= 0) {
            return total + price * item.quantity;
        }
        return total;
    }, 0);
}

// ... (other functions like saveCartItems)
