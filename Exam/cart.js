document.addEventListener('DOMContentLoaded', () => {
    const cartItemsList = document.getElementById("cart-items");
    const totalCostDisplay = document.getElementById("total-cost");

    // Retrieve cart items from local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Display cart items on the page
    let totalCost = 0;

    function createItemContainer(item, index) {
        // Create a container for each cart item
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("cart-item");

        // Create elements to display item details
        const itemName = document.createElement("span");
        itemName.textContent = `${item.productName} - Price: ₱${item.price}`;

        const quantityDisplay = document.createElement("span");
        quantityDisplay.textContent = `Quantity: ${item.quantity}`;

        // Create "Add" and "Subtract" buttons
        const addButton = document.createElement("button");
        addButton.textContent = "Add";
        addButton.addEventListener('click', () => {
            // Increase the quantity when the "Add" button is clicked
            item.quantity = parseInt(item.quantity, 10) || 0;
            item.quantity++;
            quantityDisplay.textContent = `Quantity: ${item.quantity}`;
            saveCartItems(cart);
            updateTotalCost(cart, totalCostDisplay);
        });

        const subtractButton = document.createElement("button");
        subtractButton.textContent = "Subtract";
        subtractButton.addEventListener('click', () => {
            // Decrease the quantity when the "Subtract" button is clicked
            item.quantity = parseInt(item.quantity, 10) || 0;
            if (item.quantity > 0) {
                item.quantity--;
                quantityDisplay.textContent = `Quantity: ${item.quantity}`;
                saveCartItems(cart);
                updateTotalCost(cart, totalCostDisplay);
            }
        });

        // Create a button to remove the item
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener('click', () => {
            // Remove the item from the cart
            cart.splice(index, 1);
            saveCartItems(cart);
            // Remove the item's container from the page
            itemContainer.remove();
            updateTotalCost(cart, totalCostDisplay);
        });

        // Calculate the total cost
        totalCost += item.price * item.quantity;

        // Append elements to the item container
        itemContainer.appendChild(itemName);
        itemContainer.appendChild(quantityDisplay);
        itemContainer.appendChild(addButton);
        itemContainer.appendChild(subtractButton);
        itemContainer.appendChild(removeButton);

        return itemContainer;
    }

    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        const itemContainer = createItemContainer(item, i);
        cartItemsList.appendChild(itemContainer);
    }

    // Display the total cost
    updateTotalCost(cart, totalCostDisplay);
});

function updateTotalCost(cart, totalCostDisplay) {
    // Calculate the total cost based on cart items
    let totalCost = 0;
    for (const item of cart) {
        totalCost += item.price * item.quantity;
    }
    totalCostDisplay.textContent = `Total Ordered: ₱${totalCost}`;
    saveCartItems(cart);
}

function saveCartItems(cart) {
    // Save the updated cart in local storage
    localStorage.setItem('cart', JSON.stringify(cart));
}

document.addEventListener('DOMContentLoaded', () => {
    const cartItemsList = document.getElementById("cart-items");
    const totalCostDisplay = document.getElementById("total-cost");
    const checkoutForm = document.getElementById("checkout-form");
    const addressInput = document.getElementById("address");

    // Retrieve cart items from local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // ...

    // Event listener for the checkout form submission
    checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const address = addressInput.value;
        if (cart.length === 0) {
            alert("Your cart is empty. Please add items to your cart before checking out.");
        } else if (!address) {
            alert("Please enter a valid shipping address.");
        } else {
            // Proceed with the order, and you can record the address here
            alert(`Thank you for your order! Your items will be shipped to: ${address}`);
            clearCart(); // You can implement this function to clear the cart
            

            
            // Add a timer to redirect to the "thank you" page after 3 seconds
            setTimeout(() => {
                window.location.href = "home2.php"; // Change the URL to the actual "thank you" page
            }, 2000); // 2000 milliseconds (2 seconds)
        }
    });

    // ...

    // Rest of your code to display and update the cart items
});

function clearCart() {
    // Implement this function to clear the cart
    // You can reset the cart array to an empty array and update the total cost display
}

