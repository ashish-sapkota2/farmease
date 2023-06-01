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

        $row = mysqli_fetch_assoc($result2);
        $availableQuantity = $row['quantity'];
        $availableprice = $row['price'];

        // Calculate the remaining quantity that can be added to the cart
        $updatedQuantity = $availableQuantity + $quantity;
        $updatedprice = $availableprice + $price;
        $query3 = "SELECT quantity FROM production_approx WHERE crop = '$crop'";
        $result3 = mysqli_query($conn, $query3);
    
        if ($row = mysqli_fetch_assoc($result3)) {
            $maxQuantity = $row['quantity'];
    
            if ($updatedQuantity > $maxQuantity) {
                //echo "Error: Total quantity exceeds the available quantity.";
                $_SESSION['error_message'] = "Error: Total quantity exceeds the available quantity.";
                header("Location: cbuy_crops.php?action=add&id=$tradeID");
                exit;
            }
        }
    
       // Update the quantity
       $query4 = "UPDATE cart SET quantity = $updatedQuantity, price = $updatedprice WHERE cust_id = '$cust_pid' AND cropname = '$crop'";
       $result4 = mysqli_query($conn, $query4);

        if ($result4) {
         //   echo "Item quantity updated in cart" . "<br>";
            $_SESSION['success_message'] = "Item quantity and price updated in cart";
        } else {
           // echo "Error updating item quantity in cart: " . mysqli_error($conn) . "<br>";
            $_SESSION['error_message'] = "Error updating item quantity and price in cart: " . mysqli_error($conn);
        }
    }else{
            
    
        // Item does not exist, insert a new record
        // Check if the quantity exceeds the available quantity
        $query5 = "SELECT quantity FROM production_approx WHERE crop = '$crop'";
        $result5 = mysqli_query($conn, $query5);
    
        if ($row = mysqli_fetch_assoc($result5)) {
            $maxQuantity = $row['quantity'];
    
            if ($quantity > $maxQuantity) {
              //  echo "Error: Total quantity exceeds the available quantity.";
                $_SESSION['error_message'] = "Error: Total quantity exceeds the available quantity.";
                header("Location: cbuy_crops.php?action=add&id=$tradeID");
                exit;
            }
        }
        $query6 = "INSERT INTO cart (cust_id, cropname, quantity, price) VALUES ('$cust_pid', '$crop', '$quantity', '$price')";
        $result6 = mysqli_query($conn, $query6);
    
        if ($result6) {
           // echo "Item added to cart" . "<br>";
            $_SESSION['success_message'] = "Item added to cart";

        } else {
           // echo "Error adding item to cart: " . mysqli_error($conn) . "<br>";
           $_SESSION['error_message'] = "Error adding item to cart: " . mysqli_error($conn);
        }
    }
    header("Location: cbuy_crops.php?action=add&id=$tradeID");
    exit;
}

if (isset($_POST["add_to_cart"])) {
    if (!isset($_SESSION["shopping_cart"])) {
        $_SESSION["shopping_cart"] = array();
    }

    $tradeID = $_POST['tradeid'];
    $crop = $_POST['crops'];
    $quantity = $_POST['quantity'];
    $price = $_POST['price'];

    // Check if the item already exists in the cart
    $item_exists = false;
    foreach ($_SESSION["shopping_cart"] as $key => $value) {
        if ($value['item_id'] == $tradeID) {
            $item_exists = true;
            // Check if adding the quantity exceeds the maximum available quantity
            $total_quantity = $value['item_quantity'] + $quantity;
            $total_price = $value['item_price'] + $price;

            $query = "SELECT quantity FROM production_approx WHERE crop = '$crop'";
            $result = mysqli_query($conn, $query);

            if ($row = mysqli_fetch_assoc($result)) {
                $availableQuantity = $row['quantity'];
                $availableprice = $row['price'];

                if ($total_quantity > $availableQuantity) {
             // Display an error message if the total quantity exceeds the available quantity
           //  echo "Error: Total quantity exceeds the available quantity";
           $_SESSION['error_message'] = "Error: Total quantity exceeds the available quantity.";
           header("Location: cbuy_crops.php?action=add&id=$tradeID");  
           exit;
         } else {
             // Update the quantity
             $_SESSION["shopping_cart"][$key]["item_quantity"] = $total_quantity;
             $_SESSION["shopping_cart"][$key]["item_price"] = $total_price;
             break;
         }
     }
 }
}

if (!$item_exists) {
 // Item does not exist, add it to the cart
 $item_array = array(
     'item_id' => $tradeID,
     'item_name' => $_POST["crops"],
     'item_price' => $_POST["price"],
     'item_quantity' => $_POST["quantity"]
 );
 array_push($_SESSION['shopping_cart'], $item_array);
}

header("Location: cbuy_crops.php?action=add&id=$tradeID");
exit;
}

// if (isset($_POST['logout'])) {
//     // Clear shopping cart data
//     unset($_SESSION['shopping_cart']);

//     // Destroy the session
//     session_destroy();

//     // Redirect to the login page or any other page
//     header("Location: index.php");
//     exit;
// }
?>
