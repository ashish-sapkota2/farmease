<?php
	require_once "stripe-php-master/init.php";
	require_once "products.php";

$stripeDetails = array(
		"secretKey" => "sk_test_51NJHMzSISKP1aPXfuMObPDUIjWTBahzpvFoi2OSeLmhqhwr6kblBANAFJLwROBCXnRYU6DuUrWzGnb2vdTdrggk800g5y0f5LW",  //Your Stripe Secret key
		"publishableKey" => "pk_test_51NJHMzSISKP1aPXf3kpgTq30nAoQz9V1YaFH3X5fZJhgeLrvgU8THkeucIy6KADbosO0lLfHljvMAPEWNshMRMGH00BD8dV8z7"  //Your Stripe Publishable key
	);

	// Set your secret key: remember to change this to your live secret key in production
	// See your keys here: https://dashboard.stripe.com/account/apikeys
	\Stripe\Stripe::setApiKey($stripeDetails['secretKey']);

	
?>
