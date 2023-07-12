<?php
include('csession.php');
include('../sql.php');

$payload = file_get_contents('php://input');
$data = json_decode($payload, true);

// Retrieve the item IDs from the AJAX request
$crops = $data['crops'];
$quantity = $data['quantity'];
$price = $data['price'];
$email = $data['email'];
$name = $data['name'];
$phone = $data['phone_no'];

// Retrieve customer information from the database
$query = "SELECT * FROM custlogin WHERE email = '$email'";
$result = mysqli_query($conn, $query);
$row = mysqli_fetch_assoc($result);

// Count the number of crops
$countQuery = "SELECT COUNT(cropname) AS crops_count FROM cart WHERE cust_id = '".$row['cust_id']."'";
$countResult = mysqli_query($conn, $countQuery);
$countRow = mysqli_fetch_assoc($countResult);
$cropsCount = $countRow['crops_count'];

// Insert orders into the database
$date = date('d/m/Y');

$response = array();

if ($cropsCount > 0) {
    for ($i = 0; $i < $cropsCount; $i++) {
        $query1 = "INSERT INTO `orders` (`cust_id`, `cust_name`, `cropname`,`quantity`, `email`, `phone`, `address`, `date`,`status`) 
                   VALUES ('".$row['cust_id']."', '".$name."', '".$crops[$i]."','".$quantity[$i]."', '".$email."', '".$phone."', '".$row['address']."', '".$date."', 'Pending')";
        $result1 = mysqli_query($conn, $query1);
    }

    // Prepare the response
    if ($result1) {
        // Orders inserted successfully
        $response['success'] = true;
        $response['message'] = "Orders inserted successfully.";
    } else {
        // Failed to insert orders
        $response['success'] = false;
        $response['error'] = "Failed to insert orders.";
    }
} else {
    // No crops found for the customer
    $response['success'] = false;
    $response['error'] = "No crops found for the customer.";
}

// Return the response as JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
