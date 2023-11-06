<!-- cart2.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cart Contents</title>
    <link rel="stylesheet" href="cart.css">
    <script src="cart.js"></script> <!-- Reference the new JavaScript file -->
</head>
<body>
    <h1>StreetWise OverSize</h1>
    <h5>ADDED TO CART</h5>

    <nav>
        <ul>
            <li><a href="home.php">Home</a></li> <!-- HOME-->
            <li><a href="main.php">Shop</a></li>  <!-- SHOP -->
            <li><a href="developer.php">Developer</a></li> <!-- DEVELOPER-->
            <li><a class="cart-button" href="cart.php">View Cart</a></li>
            <li> <a class="logout" href="login.php">Logout</a> </li>
        </ul>
    </nav>

    <div class="cart-container">
        <h2>Cart Items</h2>
        <ul id="cart-items">
            <!-- Cart items will be displayed here -->
        </ul>

        <!-- Display the total cost here -->
        <p id="total-cost">Total Ordered: ₱0</p>

        <!-- Checkout section -->
        <div id="checkout-section">
            <h2>Checkout</h2>
            <form id="checkout-form">
                <label for="address">Shipping Address:(Street,Lot,Phase,City)</label>
                <input type="text" id="address" required>
                <button type="submit">Checkout</button>
            </form>
        </div>
    </div>

    <footer>
        <p>&copy; The Official StreetWise OverSize - 2023 -</p>
    </footer>
</body>
</html>
