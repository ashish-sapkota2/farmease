<?php
try {
    // Retrieve the JSON payload sent from the AJAX request
    $payload = file_get_contents('php://input');
    $data = json_decode($payload, true);

    // Access the crops, quantity, price, email, and name values
    $crops = $data['crops'];
    $quantity = $data['quantity'];
    $price = $data['price'];
    $email = $data['email'];
    $name = $data['name'];
    $phone = $data['phone_no'];

    $customerInfo = array(
        'name' => $name,
        'email' => $email,
        'phone' => $phone
    );

    $productDetails = array();
    $totalPrice = 0; // Initialize total price

    // Create an array of product details for each crop
    for ($i = 0; $i < count($crops); $i++) {
        $unitPrice = $price[$i];
        $totalPrice += $unitPrice * $quantity[$i]; // Calculate the total price

        $productDetails[] = array(
            'identity' => $i + 1,
            'name' => $crops[$i],
            'total_price' => $unitPrice * $quantity[$i], // Calculate the total price for each crop
            'quantity' => $quantity[$i],
            'unit_price' => $unitPrice
        );
    }

    // Convert the total price to an integer
    $totalPrice = intval($totalPrice);

    $payloadData = array(
        'return_url' => 'https://test-pay.khalti.com/wallet',
        'website_url' => 'https://example.com/',
        'amount' => $totalPrice, // Total amount based on the sum of total prices for all crops
        'purchase_order_id' => $name,
        'purchase_order_name' => $email,
        'customer_info' => $customerInfo,
        'amount_breakdown' => array(
            array(
                'label' => 'Total Amount',
                'amount' => $totalPrice // Total amount based on the sum of total prices for all crops
            )
        ),
        'product_details' => $productDetails
    );

    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => 'https://a.khalti.com/api/v2/epayment/initiate/',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_POSTFIELDS => json_encode($payloadData),
        CURLOPT_HTTPHEADER => array(
            'Authorization: Key c26f2a09589346fea954cbc3e0000e28',
            'Content-Type: application/json'
        ),
    ));

    $response = curl_exec($curl);

    curl_close($curl);
    // Return the response as JSON
    header('Content-Type: application/json');
    echo $response;
} catch (Exception $e) {
    // Return an error response
    header('Content-Type: application/json');
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
?>