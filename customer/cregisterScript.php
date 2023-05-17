<?php

session_start(); // Starting Session

require('../sql.php'); // Includes Login Script
global $error;

// function for email validation
function is_valid_email($email)
{
	global $conn;
	global $error;
	
     $slquery = "SELECT cust_id FROM custlogin WHERE email = '$email'";
     $selectresult = mysqli_query($conn, $slquery);
	 $rowcount=mysqli_num_rows($selectresult);
	   
	 if ($rowcount==true) {
		 
		$error = '
		
		<div class="alert alert-info alert-dismissible fade show text-center" id="popup" role="alert">
			<strong class="text-center text-dark ">This email already exists</strong>
			  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			  </button>
			</div>
		
		';
			
		return false;		
 }
    else  {
        return true;
     }

}


 
// function for password verification
function is_valid_passwords($password,$cpassword) 
{
	global $error;
	
if ($password != $cpassword) {
	
			$error = '
		
		<div class="alert alert-info alert-dismissible fade show text-center" id="popup" role="alert">
			<strong class="text-center text-dark ">Your passwords do not match. Please type carefully</strong>
			  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			  </button>
			</div>
		
		';
		
         return false;
     }
 else  {
        return true;
     }
}

// function for creating user
<<<<<<< HEAD
function create_user($name, $password, $email, $mobile, $provincename, $district, $city, $address, $pincode) 
{
	global $conn;
	
      $query = "INSERT INTO `custlogin` (cust_name, password, email, phone_no, C_province, C_District, city, address, pincode ) 
	  VALUES ('$name', '$password', '$email', '$mobile', '$provincename', '$district', '$city', '$address', '$pincode' )";
=======
function create_user($name, $password, $email, $mobile, $provincename, $district, $address) 
{
	global $conn;
	
      $query = "INSERT INTO `custlogin` (cust_name, password, email, phone_no, province, district, address) 
	  VALUES ('$name', '$password', '$email', '$mobile', '$provincename', '$district', '$address' )";
>>>>>>> 8087b81cda0e4bf1b1e99b0ddfe5fdb11ccd6899
      $result = mysqli_query($conn, $query);
      if($result){
          return true; // Success
      }else{
          return false; // Error somewhere
      }
}


// Code execution starts here after submit
if (isset($_POST['email']) && isset($_POST['password']) && isset($_POST['confirmpassword'])){

    // Reading form values
    $name = $_POST['name'];
    $email = $_POST['email'];	
	$mobile = $_POST['mobile'];
    $province = $_POST['province'];
	$district = $_POST['district'];
<<<<<<< HEAD
	$city = $_POST['city'];
=======
>>>>>>> 8087b81cda0e4bf1b1e99b0ddfe5fdb11ccd6899
	$address = $_POST['address'];
    $password = $_POST['password'];
    $cpassword = $_POST['confirmpassword'];


$query5 = "SELECT ProvinceName from province where PrCode ='$province'";
	$ses_sq5 = mysqli_query($conn, $query5);
              $row5 = mysqli_fetch_assoc($ses_sq5);
              $provincename = $row5['ProvinceName'];
			  
			  
    if (is_valid_email($email) == true && is_valid_passwords($password,$cpassword) == true)
    {	
<<<<<<< HEAD
        if (create_user($name, $password, $email, $mobile, $provincename, $district, $city, $address, $pincode )) {
=======
        if (create_user($name, $password, $email, $mobile, $provincename, $district, $address, )) {
>>>>>>> 8087b81cda0e4bf1b1e99b0ddfe5fdb11ccd6899
			$_SESSION['customer_login_user']=$email; // Initializing Session    
        header("location: ctwostep.php");
        }else{
			
						$error = '
		
		<div class="alert alert-info alert-dismissible fade show text-center" id="popup" role="alert">
			<strong class="text-center text-dark ">Error While Registering User</strong>
			  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			  </button>
			</div>
		
		';

        }
    }
}
    // You don't need to write another 'else' since this is the end of PHP code 
?>