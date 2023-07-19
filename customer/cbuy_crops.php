<?php
include ('csession.php');
include ('../sql.php');

ini_set('memory_limit', '-1');

if(!isset($_SESSION['customer_login_user'])){
header("location: ../index.php");} // Redirecting To Home Page
$query4 = "SELECT * from custlogin where email='$user_check'";
              $ses_sq4 = mysqli_query($conn, $query4);
              $row4 = mysqli_fetch_assoc($ses_sq4);
              $para1 = $row4['cust_id'];
              $para2 = $row4['cust_name'];
              $email =$row4['email'];
              $name =$row4['cust_name'];
              $phone_no =$row4['phone_no'];
              
		  
?>

<!DOCTYPE html>
<html>
  <head>
 
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb"
        crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh"
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ"
        crossorigin="anonymous"></script>
</head>
<?php include ('cheader.php');  ?>
  <body class="bg-white" id="top">
<?php include ('cnav.php');  ?>
<section class="section section-shaped section-lg">
  <div class="shape shape-style-1 shape-primary">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

<div class="container ">		
  <div class="row row-content">
    <div class="col-md-12 mb-3">
      <div class="card text-dark bg-gradient-danger mb-3">
				<div class="card-header">
				  <span class=" text-color display-4" > Buy Crops </span>
				</div>
				<div class="card-body ">
			    <table class="table table-striped table-bordered table-responsive-md btn-table  ">
            <thead class=" text-dark text-center">
              <tr>
				        <th>Crop Name</th>
                <th>Quantity (in KG)</th>
                <th>Price (in Rs)</th>
						    <th>Add Item</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <form method="POST" action="cbuy_redirect.php">
                  <td>
                    <div class="form-group">
                      <?php
                        // Query the database table for crops with quantity greater than zero
                        $sql = "SELECT crop, quantity FROM production_approx WHERE quantity > 0";
                        $result = $conn->query($sql);

                        // Populate dropdown menu options with the crop names and available quantity
                        echo "<select id='crops' name='crops' class='form-control text-dark'>";
                        echo "<option value=''>Select Crop</option>";
                        while ($row = $result->fetch_assoc()) {
                        echo "<option value='" . $row["crop"] . "' data-quantity='" . $row["quantity"] . "'>" . $row["crop"] . "</option>";
                        }
                        echo "</select>";
                      ?>
                    </div>
		              </td>
              <input type="hidden" name="tradeid" id="tradeid" value="">
                <td>
                  <div class="form-group">
                    <input id="quantity" type="number" placeholder="Available Quantity" name="quantity" required class="form-control text-dark" min="1" max ="1">
                  </div>
                </td>
                <td>
                  <div class="form-group">
                    <input id="price" type="text" value="0" name="price" readonly class="form-control text-dark">
                  </div>
                </td>
                <td>
                  <div class="form-group">
                    <button class="btn btn-success form-control" name="add_to_cart" type="submit" disabled>Add To Cart</button>
                  </div>
                </td>
              </form></tr>
						</tbody>
          </table> 
	
<script>
  // JavaScript code to update the max attribute based on the selected crop's available quantity

  document.getElementById('crops').addEventListener('change', function() {
    var selectedOption = this.options[this.selectedIndex];
    var quantityInput = document.getElementById('quantity');
    quantityInput.max = selectedOption.getAttribute('data-quantity');
    quantityInput.value = ""; // Reset the quantity input field
    checkQuantityValidity(); // Call the function to check the quantity validity
  });

  // Function to check the quantity validity and enable/disable the Add to Cart button
  function checkQuantityValidity() {
    var quantityInput = document.getElementById('quantity');
    var addToCartButton = document.getElementsByName('add_to_cart')[0];

    if (parseInt(quantityInput.value) <= parseInt(quantityInput.max)) {
      addToCartButton.disabled = false; // Enable the Add to Cart button
    } else {
      addToCartButton.disabled = true; // Disable the Add to Cart button
    }
  }

  // Event listener to check the quantity validity whenever the quantity input field is changed

  document.getElementById('quantity').addEventListener('input', function() {
    checkQuantityValidity(); // Call the function to check the quantity validity
  });
</script>

		<h3 class=" text-title">Order Details</h3>
			<div class="table-responsive">
				<table class="table table-striped table-bordered table-responsive-md btn-table display text-dark" id="myTable">
					<tr class=" bg-dange text-dark">
						<th width="40%">Item Name</th>
						<th width="10%">Quantity (in KG)</th>
						<th width="20%">Price (in Rs.)</th>				
						<th width="5%">Action</th>
					</tr>

<?php
$userlogin = $_SESSION['customer_login_user'];
require('../sql.php'); // Includes SQL connection script
// Retrieve cust_id from the custlogin table based on the customer's email
$query1 = "SELECT cust_id FROM custlogin WHERE email = '" . $userlogin . "';";
$run = mysqli_query($conn, $query1);
$row = mysqli_fetch_array($run);
$cust_pid = $row['0'];

// Retrieve cart items from the cart table based on the cust_id
$query2 = "SELECT cid, cropname, quantity, price FROM cart WHERE cust_id = '$cust_pid';";
$result = mysqli_query($conn, $query2);


if (mysqli_num_rows($result) > 0) {
    $total = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        ?>
        <tr class="bg-white">
            <td><?php echo ucfirst($row["cropname"]); ?></td>
            <td><?php echo $row["quantity"]; ?></td>
            <td>Rs. <?php echo $row["price"]; ?></td>
            <td>
                <a href="cbuy_crops.php?action=delete&id=<?php echo $row["cid"]; ?>" type="button" class="btn btn-red btn-block">Remove</a>
            </td>
        </tr>
        <?php
        $total += $row["price"];
    }

if (isset($_GET["action"]) && $_GET["action"] == "delete" && isset($_GET["id"])) {
    $delete_id = $_GET["id"];

    // Remove the item from the database
    $query3 = "DELETE FROM cart WHERE cid = '$delete_id';";
    $result3 = mysqli_query($conn, $query3);

    if ($result3) {
        echo '<script>alert("Item Removed")</script>';
        echo '<script>window.location="cbuy_crops.php"</script>';
    } else {
        echo '<script>alert("Failed to remove item")</script>';
    }
}
?>
<tr class="text-dark">
    <td colspan="2" align="right">Total</td>
    <td align="right"><strong>Rs. <?php echo number_format($total, 2); ?></strong></td>
    <td>
        <a href= "#" data-amount=10 id='payment-button' class="btn btn-primary pay-khalti" type="submit">Pay with Khalti</a>
      
    </td>
</tr>		
					
<?php
		}else {
			// No items found in the cart
			echo "<tr><td colspan='4'>No items in the cart</td></tr>";
			}
			if (isset($_SESSION['error_message'])) {
			echo '<div class="error-message">' . $_SESSION['error_message'] . '</div>';
			unset($_SESSION['error_message']); // Remove the error message from the session
		}
				
?>
						
	</table>
</div>
</div>
</div>				 		  
</div>
</div>
</div>
		 
</section>
<?php require("footer.php");?>
<script type="text/javascript">
document.getElementById("payment-button").addEventListener("click", function(){
  // Retrieve the cart item IDs
  var itemIds = [];
  <?php
    $query2 = "SELECT * FROM cart WHERE cust_id = '$cust_pid';";
    $result = mysqli_query($conn, $query2);

    while ($row = mysqli_fetch_assoc($result)) {
        $itemId = $row['cust_id'];
  ?>
  itemIds.push(<?php echo $itemId; ?>);
  <?php
    }
  ?>

  var crops = [];
  var quantity = [];
  var price = [];
  var email = "<?php echo $email; ?>";
  var name = "<?php echo $name; ?>";
  var phone_no = "<?php echo $phone_no; ?>";
  <?php
    $query2 = "SELECT cid, cropname, quantity, price FROM cart WHERE cust_id = '$cust_pid';";
    $result = mysqli_query($conn, $query2);
    
    while ($row = mysqli_fetch_assoc($result)) {
        $cropname = $row['cropname'];
        $quantity = $row['quantity'];
        $price = ($row['price'] / $row['quantity'])*100;
        ?>
        crops.push("<?php echo $cropname; ?>");
        quantity.push("<?php echo $quantity; ?>");
        price.push("<?php echo $price; ?>");    
        <?php
    }
    ?>
    console.log("Crops: ", crops);
    console.log("Quantity: ", quantity);
    console.log("Price: ", price);
    console.log("Email: ", email);
    console.log("Name: ", name);
    console.log("Phone_no: ", phone_no);

    $.ajax({
  url: 'khalti/verify.php',
  type: 'POST',
  dataType: 'json',
  contentType: 'application/json',
  data: JSON.stringify({ crops: crops, quantity: quantity, price: price, email: email, name: name, phone_no: phone_no }),
  success: function(response) {
    // Process the response
    console.log(response);
    if (response.payment_url) {
      // Redirect the user to the payment URL
      
      window.location.href = response.payment_url;
      // Execute the subsequent AJAX requests only if the first request is successful
      $.ajax({
        url: 'corders.php',
        type: 'POST',
        dataType: 'json',
        data: JSON.stringify({ crops: crops, quantity: quantity, price: price, email: email, name: name, phone_no: phone_no }),
        success: function(response) {
          // Process the response
          console.log(response);
          if (response.success) {
            // Order placed successfully
            // Redirect the user to the payment page or perform any other actions

            // Execute the next AJAX request
            $.ajax({
              url: 'update_db.php',
              type: 'POST',
              dataType: 'json',
              data: JSON.stringify({ itemIds: itemIds, crops: crops, quantity: quantity, price: price, email: email, name: name, phone_no: phone_no }),
              success: function(response) {
                // Process the response
                console.log(response);
                if (response.success) {
                  // Cart items updated in the database successfully
                  // Redirect the user to the payment page or perform any other actions

                  // Execute the final AJAX request
                  $.ajax({
                    url: 'delete_cart_items.php',
                    type: 'POST',
                    dataType: 'json',
                    data: { itemIds: itemIds },
                    success: function(response) {
                      // Process the response
                      console.log(response);
                      if (response.success) {
                        // Cart items deleted successfully
                        // Redirect the user to the payment page or perform any other actions
                      } else {
                        // Failed to delete cart items
                        console.error(response.error);
                      }
                    },
                    error: function(error) {
                      // Handle any error that occurred during the AJAX request
                      console.error(error);
                    }
                  });
                } else {
                  // Failed to update cart items in the database
                  console.error(response.error);
                }
              },
              error: function(error) {
                // Handle any error that occurred during the AJAX request
                console.error(error);
              }
            });
            
          } else {
            // Failed to place order items
            console.error(response.error);
          }
        },
        error: function(error) {
          // Handle any error that occurred during the AJAX request
          console.error(error);
        }
      });
    }
  },
  error: function(error) {
    // Handle any error that occurred during the AJAX request
    console.error(error);
  }
});
});
</script>	
								
												
<script>
				$(document).ready( function () {
    $('#myTable').DataTable();
} );
</script>

						
<script> 
document.getElementById("crops").addEventListener("change", function() {   
  var crops = jQuery('#crops').val();   
  jQuery.ajax({     
    url: 'ccheck_quantity.php',     
    type: 'post',     
    data: 'crops=' + crops,     
    success: function(result) { 
		      try {
				 var result = JSON.parse(result);
				  
				 var cquantity = parseInt(result.quantityR);
				 var TradeId = parseInt(result.TradeIdR);  
				  console.log(result);

				 if (cquantity > 0) {         
						document.getElementById("quantity").placeholder = cquantity;         
					   
						document.getElementById("tradeid").value = TradeId;
					  } else {         
						document.getElementById("quantity").placeholder = "Select Crop";       
					  } 

			} catch (error) {
				  console.log('Error:', error);
			}

	  
    }   
  }); 
}); 
</script>    

<script>
  document.getElementById("quantity").addEventListener("change", function() {
const addToCartBtn = document.querySelector('[name="add_to_cart"]');
    var quantity = jQuery('#quantity').val();
	  var crops = jQuery('#crops').val();
		
    jQuery.ajax({
      url: 'ccheck_price.php',
      type: 'post',
      data: { crops: crops, quantity: quantity },
      success: function(result) {
			var cprice = parseInt(result);
			if(cprice>0){
				document.getElementById("price").value = cprice;
				addToCartBtn.removeAttribute('disabled');
			}
			else{
				document.getElementById("price").value = "0";
			}
		}
	});
});
</script>

	<script>

const quantityInput = document.getElementById("quantity");

quantityInput.addEventListener("change", () => {
  const max = document.getElementById("quantity").placeholder.value;
  
  if (quantityInput.value > max) {
    alert(`Maximum quantity exceeded. Please enter a quantity less than or equal to ${max}.`);
    quantityInput.value = max;
  }
});
</script>

</body>
</html>