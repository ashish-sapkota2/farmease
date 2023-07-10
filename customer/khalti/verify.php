<?php
try {
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
        CURLOPT_POSTFIELDS => '{
            "return_url": "https://test-pay.khalti.com/wallet",
            "website_url": "https://example.com/",
            "amount": 1300,
            "purchase_order_id": "test12",
            "purchase_order_name": "test",
            "customer_info": {
                "name": "Ashim Upadhaya",
                "email": "example@gmail.com",
                "phone": "9811496763"
            },
            "amount_breakdown": [
                {
                    "label": "Mark Price",
                    "amount": 1000
                },
                {
                    "label": "VAT",
                    "amount": 300
                }
            ],
            "product_details": [
                {
                    "identity": "1234567890",
                    "name": "Khalti logo",
                    "total_price": 1300,
                    "quantity": 1,
                    "unit_price": 1300
                }
            ]
        }',
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