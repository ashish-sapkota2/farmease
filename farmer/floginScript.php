<?php
session_start(); // Starting Session
$error = ''; // Variable To Store Error Message

require('../sql.php'); // Includes Login Script

if(isset($_POST['farmerlogin'])) {
  $farmer_email = $_POST['farmer_email'];
  $farmer_password = $_POST['farmer_password'];

  $farmerquery = "SELECT * FROM `farmerlogin` WHERE email='".$farmer_email."'";
  $result = mysqli_query($conn, $farmerquery);
  $rowcount = mysqli_num_rows($result);

  if ($rowcount == 1) {
    $row = mysqli_fetch_assoc($result);
    $hashedPassword = $row['password'];

    // Verify the entered password against the stored hashed password
    if (password_verify($farmer_password, $hashedPassword)) {
      $_SESSION['farmer_login_user'] = $farmer_email; // Initializing Session
      header("location: fsend_otp.php"); // Sending OTP
    } else {
      $error = "Username or Password is wrongg";
      // header("location: flogin.php?error=" . urlencode($error)); // Redirect with error message
echo $farmer_email;
echo $hashedPassword;
    }
  } else {
    $error = "Username or Password is wrong";
    header("location: flogin.php?error=" . urlencode($error)); // Redirect with error message
  }

  mysqli_close($conn); // Closing Connection
}
?>
