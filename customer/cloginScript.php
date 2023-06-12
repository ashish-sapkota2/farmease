<?php
session_start(); // Starting Session
$error = ''; // Variable To Store Error Message

require('../sql.php'); // Includes Login Script

if (isset($_POST['customerlogin'])) {
    $customer_email = $_POST['cust_email'];
    $customer_password = $_POST['cust_password'];

    $checkquery = "SELECT * FROM `custlogin` WHERE email='".$customer_email."'";
    $result = mysqli_query($conn, $checkquery);
    $rowcount = mysqli_num_rows($result);
    if ($rowcount == 1) {
        $row = mysqli_fetch_assoc($result);
        $hashedPassword = $row['password'];

        // Verify the entered password against the stored hashed password
        if (password_verify($customer_password, $hashedPassword)) {
            $_SESSION['customer_login_user'] = $customer_email; // Initializing Session

            // $deletequery="DELETE FROM cart";
            // $deletecart=mysqli_query($conn,$deletequery);

            header("location: csend_otp.php"); // Redirecting To Other Page
        } else {
            $error = "Username or Password is invalid";
            header("location: clogin.php?error=" . urlencode($error)); // Redirect with error message
        }
    } else {
        $error = "Username or Password is invalid";
        header("location: clogin.php?error=" . urlencode($error)); // Redirect with error message
    }

    mysqli_close($conn); // Closing Connection.
}


?>
