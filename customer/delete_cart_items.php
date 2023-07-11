<?php
include ('csession.php');
include ('../sql.php');
// Retrieve the item IDs from the AJAX request
$itemIds = $_POST['itemIds'];

// Delete the cart items from the database
foreach ($itemIds as $itemId) {
    // Perform the deletion operation based on the item ID
    // Replace this code with your actual logic to delete cart items

    // Example code:
    $query = "DELETE FROM cart WHERE cust_id = $itemId";
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
