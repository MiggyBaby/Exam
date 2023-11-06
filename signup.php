<!DOCTYPE html>
<html>
<head>
<style>
      body {
        text-align: center;
        padding: 2em 0;
        background: linear-gradient(to right, #0f1416, #2d373a, #666f73);
        background-position: auto;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
      }

      header {
        font-size: 50px;
        color: white;
        
      }

      .container {
        width: 300px;
        padding: 20px;
        border: 2px solid white;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 5px;
      }

      .first, .Last, .Email, .Password  {
        margin: 10px 0;
      }

      input {
        width: 50%;
        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.9);
      }
      .btn {
        background-color: rgb(41, 38, 38);
        text-decoration: none;
        margin-top: 10px;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 8px;
        width: 100%;
      }

      .button {
        margin-top: 10px;
      }

      button {
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        padding: 10px;
        width: 100%;
      }

      button[type="submit"] {
        background-color: rgb(41, 38, 38);
      }

      .signuperror {
        color: red;
        margin-top: 10px;
      }
       .signupstatus {
        color: green;
        margin-top: 10px;
      }
  </style>
</head>
<main>
 <div class="container">
    <header>Sign Up</header>

    <?php
    if(isset($_GET['error'])){
        if($_GET['error'] == "emptyfields") {
            echo '<p class="signuperror">Fill in all fields!</p>';
        }
        else if($_GET['error'] == "invaliduidmail") {
            echo '<p class="signuperror">Invalid username and email!</p>';
        }
        else if($_GET['error'] == "invaliduid") {
            echo '<p class="signuperror">Invalid username!</p>';
        }
        else if($_GET['error'] == "invalidmail") {
            echo '<p class="signuperror">Invalid e-mail!</p>';
        }
        else if($_GET['error'] == "passwordcheck") {
            echo '<p class="signuperror">Your passwords do not match!</p>';
        }
        else if($_GET['error'] == "usertaken") {
            echo '<p class="signuperror">Username is already taken!</p>';
        }
    }
    if(isset($_GET['signup']) && $_GET['signup'] == "success") {
        echo '<p class="signupstatus">Signup successful!</p>';
        echo '<div class="button">
                <a class="btn" href="header.php">Log In</a>
            </div>
            <div class="button">
                <button type="submit" id="Admin" onclick="location.href=\'#\'">Log In as Admin</button>
            </div>';
    }
    else {
        echo '<form id="myForm" action="includes/signup-inc.php" method="post">
            <div class="first">
                <input type="text" name="uid" placeholder="Username" id="userName">
            </div>
            <div class="Last">
                <input type="text" name="mail" placeholder="Email" id="lastName">
            </div>
            <div class="Email">
                <input type="password" name="pwd"  placeholder="Password" id="email">
            </div>
            <div class="Password">
                <input type="password" name="pwd-repeat" placeholder=" Repeat Password" id="password">
            </div>
            <div class="button">
                <button type="submit" name="signup-submit">Signup</button>
            </div>
        </form>';
    }
    ?>
</div>
</main>

<?php
    require "footer.php";
?>
</html>
