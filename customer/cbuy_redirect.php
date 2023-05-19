<?php
session_start();
ini_set('memory_limit', '-1');
$userlogin = $_SESSION['customer_login_user'];
require('../sql.php'); // Includes SQL connection script

if (isset($_POST['add_to_cart'])) {
    $crop = $_POST['crops'];
    $quantity = $_POST['quantity'];
    $tradeID = $_POST['tradeid'];
    $price = $_POST['price'];

    $query1 = "SELECT cust_id FROM custlogin WHERE email = '$userlogin'";
    $run = mysqli_query($conn, $query1);
    $row = mysqli_fetch_array($run);
    $cust_pid = $row[0];

    // Check if the item already exists in the cart
    $query2 = "SELECT * FROM cart WHERE cust_id = '$cust_pid' AND cropname = '$crop'";
    $result2 = mysqli_query($conn, $query2);

    if (mysqli_num_rows($result2) > 0) {
        // Item already exists, update the quantity
        $query3 = "UPDATE cart SET quantity = quantity + $quantity WHERE cust_id = '$cust_pid' AND cropname = '$crop'";
        $result3 = mysqli_query($conn, $query3);

        if ($result3) {
            echo "Item quantity updated in cart" . "<br>";
        } else {
            echo "Error updating item quantity in cart: " . mysqli_error($conn) . "<br>";
        }
    } else {
        // Item does not exist, insert a new record
        $query4 = "INSERT INTO cart (cust_id, cropname, quantity, price) VALUES ('$cust_pid', '$crop', '$quantity', '$price')";
        $result4 = mysqli_query($conn, $query4);

        if ($result4) {
            echo "Item added to cart" . "<br>";
        } else {
            echo "Error adding item to cart: " . mysqli_error($conn) . "<br>";
        }
    }
}

if (isset($_POST["add_to_cart"])) {
    if (!isset($_SESSION["shopping_cart"])) {
        $_SESSION["shopping_cart"] = array();
    }

    $tradeID = $_POST['tradeid'];

    $item_array_id = array_column($_SESSION["shopping_cart"], "item_id");

    if (!in_array($tradeID, $item_array_id)) {
        $item_array = array(
            'item_id' => $tradeID,
            'item_name' => $_POST["crops"],
            'item_price' => $_POST["price"],
            'item_quantity' => $_POST["quantity"]
        );
        array_push($_SESSION['shopping_cart'], $item_array);
    } else {
        foreach ($_SESSION["shopping_cart"] as $keys => $values) {
            if ($values["item_id"] == $tradeID) {
                $_SESSION["shopping_cart"][$keys]["item_quantity"] += $_POST["quantity"];
                break;
            }
        }
    }

    header("Location: cbuy_crops.php?action=add&id=$tradeID");
}
if (isset($_POST['logout'])) {
    // Clear shopping cart data
    unset($_SESSION['shopping_cart']);

    // Destroy the session
    session_destroy();

    // Redirect to the login page or any other page
    header("Location: index.php");
    exit;
}
?>
