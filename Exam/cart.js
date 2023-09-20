// Retrieve the cart items from local storage
const cartItemsJSON = localStorage.getItem("cartItems");
const cartItems = cartItemsJSON ? JSON.parse(cartItemsJSON) : [];


// Display the cart contents
const cartContent = document.getElementById("cartContent");


if (cartItems.length === 0) {
    cartContent.innerHTML = "<p> Your cart is empty. </p>";
} else {
    const cartList = document.createElement("ul");


    cartItems.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Product Name: ${item.name}, Price: $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
    });


    cartContent.appendChild(cartList);
}


function confirmCart() {
    // Notification for success order
    alert("Hehehehehe, thank you!")
    // Remove cart items from local storage
    localStorage.removeItem("cartItems");


    // Refresh the page to update the cart content
    location.reload();
}


function clearCart() {
    // Notification for clearing order
    alert("Clear order successful!");
    // Remove cart items from local storage
    localStorage.removeItem("cartItems");


    // Refresh the page to update the cart content
    location.reload();
}



