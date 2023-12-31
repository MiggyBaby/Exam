<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>StreetWise OverSize</title>
    <link rel="stylesheet" href="main.css">
    <script src="main2.js"></script>
</head>
<body>
    <header>
        <h1>StreetWise OverSize</h1>
        <h5>SHOP PAGE</h5>
    </header>

    <nav>
        <ul>
            <li><a href="home2.php">Home</a></li> <!-- HOME-->
            <li><a href="main2.php">Shop</a></li>  <!-- SHOP -->
            <li><a href="developer2.php">Developer</a></li> <!-- DEVELOPER-->
            <li><a class="cart-button" href="cart2.php">View Cart</a></li>
            <li> <a class = "logout" href = "login.php" > Logout </a> </li>
            
        </ul>
    </nav>

    <ul class="product-list">
        <li class="product">
            <img src="shirt1.png" alt="Oversize Shirt 1" width="400px" height="400px">
            <h2>Camping Trials</h2>
            <p>2 Kids Lost In a Creepy Forest.</p>
            <h3>Price:₱499</h3>
            <button onclick="addToCart('Camping Trials', 499)">Add to Cart</button>
        </li>

        <li class="product">
            <img src="ShiftyPlace.png" alt="Oversize Shirt 2" width="400px" height="400px">
            <h2>Shifty Place</h2>
            <p>A Guy Lost in an Unknown Place.</p>
            <h3>Price: ₱499</h3>
            <button onclick="addToCart('Shifty Place', 499)">Add to Cart</button>
        </li>

        <li class="product">
            <img src="Mysterious.png" alt="Oversize Shirt 3" width="400px" height="400px">
            <h2>Mysterious</h2>
            <p> Stranded in a Mysterious Place</p>
            <h3>Price: ₱499</h3>
            <button onclick="addToCart('Mysterious', 499)">Add to Cart</button>
        </li>

        <li class="product">
            <img src="Living The Undead.png" alt="Oversize Shirt 4" width="400px" height="400px">
            <h2>Living The Undead</h2>
            <p> A Witty Name for a T-Shirt</p>
            <h3>Price: ₱499</h3>
            <button onclick="addToCart('Living The Undead', 499)">Add to Cart</button>
        </li>

        <li class="product">
            <img src="SkulledTitan.png" alt="Oversize Shirt 5" width="400px" height="400px">
            <h2>Skulled Titan</h2>
            <p>A Combination of A Titan and a Skull</p>
            <h3>Price: ₱399</h3>
            <button onclick="addToCart('Skulled Titan', 399)">Add to Cart</button>
        </li>

        <li class="product">
            <img src="YakuzaDragon.png" alt="Oversize Shirt 6" width="400px" height="400px">
            <h2>Yakuza Dragon</h2>
            <p>Yakuza and a Dragon as One.</p>
            <h3>Price: ₱399</h3>
            <button onclick="addToCart('Yakuza Dragon', 399)">Add to Cart</button>
        </li>

        <li class="product">
            <img src="MessyDoodle.png" alt="Oversize Shirt 7" width="400px" height="400px">
            <h2>Messy Doodle</h2>
            <p>Tangled All Over The Place.</p>
            <h3>Price: ₱499</h3>
            <button onclick="addToCart('Messy Doodle', 499)">Add to Cart</button>
        </li>

        <li class="product">
            <img src="BeautyInColors.png" alt="Oversize Shirt 8" width="400px" height="400px">
            <h2>Beauty In Colors</h2>
            <p>Let Them Know Who You Are.</p>
            <h3>Price: ₱399</h3>
            <button onclick="addToCart('Beauty In Colors', 399)">Add to Cart</button>
        </li>

        <li class="product">
            <img src="SpaceTronaut.png" alt="Oversize Shirt 9" width="400px" height="400px">
            <h2>SpaceTronaut</h2>
            <p>Austronaut in Space.</p>
            <h3>Price: ₱599</h3>
            <button onclick="addToCart('Space Tronaut', 599)">Add to Cart</button>
        </li>


    </ul>

    <li class="product">
        <button class="newItem" onclick="showNewItemForm()">Add an Item +</button>
    </li>

    <div id="new-item-form" style="display: none;">
        <h3>Add a New Item</h3>
        <label for="product-name">Product Name:</label>
        <input type="text" id="product-name">
        <br>
        <label for="product-price">Price (₱):</label>
        <input type="number" id="product-price">
        <br>
        <button onclick="addNewItem()">Add Item</button>
    </div>
    
    

    <div class="cart-container">
        <h2>Your Cart</h2>
        <ul id="cart-items">
            <!-- Cart items will be displayed here -->
        </ul>
    </div>

    <li class="product" id="placeholder" style="display: none;">
        <img src="placeholder.png" alt="Empty Slot" width="400px" height="400px">
        <h2>Empty Slot</h2>
        <p>Click "Add Item" to fill this slot.</p>
        <h3>Price: ₱0</h3>
    </li>

    <footer>
        <p>&copy; The Official StreetWise OverSize - 2023 -</p>
    </footer>
</body>
</html>