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
    $phone =$data['phone_no'];

    $customerInfo = array(
        'name' => $name,
        'email' => $email,
        'phone' => $phone
    );

    $productDetails = array();

    // Create an array of product details for each crop
    for ($i = 0; $i < count($crops); $i++) {
        $productDetails[] = array(
            'identity' => $i + 1,
            'name' => $crops[$i],
            'total_price' => $price[$i],
            'quantity' => $quantity[$i],
            'unit_price' => $price[$i]
        );
    }

    $payloadData = array(
        'return_url' => 'https://test-pay.khalti.com/wallet',
        'website_url' => 'https://example.com/',
        'amount' => array_sum($price), // Total amount based on the prices of all crops
        'purchase_order_id' => 'test12',
        'purchase_order_name' => 'test',
        'customer_info' => $customerInfo,
        'amount_breakdown' => array(
            array(
                'label' => 'Total Amount',
                'amount' => arrray_sum($price) // Total amount based on the prices of all crops
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
            'Authorization: Key fd6d0d148b344d52bcbb4e26a2d63736',
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
