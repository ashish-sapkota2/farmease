<?php
// mysqli_connect() function opens a new connection to the MySQL server.
$conn = mysqli_connect("localhost", "root", "", "agriculture_portal");
session_start();// Starting Session
// Storing Session
$user_check = $_SESSION['admin_login_user'];
// SQL Query To Fetch Complete Information Of User
$query = "SELECT admin_name from admin where email = '$user_check'";
$ses_sql = mysqli_query($conn, $query);
$row = mysqli_fetch_assoc($ses_sql);
$login_session = $row['admin_name'];
$CustID=$user_check;
?>

