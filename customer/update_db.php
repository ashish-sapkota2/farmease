<?php
include ('csession.php');
include ('../sql.php');
$payload = file_get_contents('php://input');
$data = json_decode($payload, true);

// Retrieve the item IDs from the AJAX request
$crops = $data['crops'];
$quantity = $data['quantity'];
$price = $data['price'];
$email = $data['email'];
$name = $data['name'];
$phone = $data['phone_no'];

// Delete the cart items from the database
for ($i = 0; $i < count($crops); $i++) {
    // Perform the deletion operation based on the item ID
    // Replace this code with your actual logic to delete cart items

    // Example code:
    $query="UPDATE production_approx SET quantity=`quantity`- '".$quantity[$i]."' WHERE crop='".$crops[$i]."' ";
    // $query = "DELETE FROM cart WHERE cust_id = $itemId";
    $result = mysqli_query($conn, $query);
}

// Prepare the response
$response = array();

if ($result) {
    // Cart items deleted successfully
    $response['success'] = true;
} else {
    // Failed to delete cart items
    $response['success'] = false;
    $response['error'] = "Failed to delete cart items.";
}

// Return the response as JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
