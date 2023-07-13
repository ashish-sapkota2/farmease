<?php
include ('csession.php');
ini_set('memory_limit', '-1');

if(!isset($_SESSION['customer_login_user'])){
header("location: ../index.php");} // Redirecting To Home Page
$query4 = "SELECT * from custlogin where email='$user_check'";
              $ses_sq4 = mysqli_query($conn, $query4);
              $row4 = mysqli_fetch_assoc($ses_sq4);
              $para1 = $row4['cust_id'];
              $para2 = $row4['cust_name'];
              $para3 = $row4['password'];
			  $para5 = $row4['email'];
			  $para6 = $row4['phone_no'];
			  $para7 = $row4['province'];
			  $para8 = $row4['district'];
			  $para9 = $row4['address'];
        $para12 = $row4['photo'];

		  
if(isset($_POST['custupdate']))
  {
	  $id = ($_POST['id']);
	  $name = ($_POST['name']);
	  $email = ($_POST['email']);
	  $mobile = ($_POST['mobile']);
	  $province = ($_POST['province']);
		$district = ($_POST['district']);
		$address = ($_POST['address']);
		$pass = ($_POST['pass']);
    $photo= $_FILES["photo"]["name"];
    $tempname=$_FILES["photo"]["tmp_name"];
    $extension = pathinfo($photo, PATHINFO_EXTENSION); // Get the file extension
    $folder = "../assets/c_image/$mobile.$extension";
    // $folder="../assets/u_image/$mobile.jpg";
    move_uploaded_file($tempname, $folder);

$query5 = "SELECT ProvinceName from province where PrCode ='$province'";
	$ses_sq5 = mysqli_query($conn, $query5);
              $row5 = mysqli_fetch_assoc($ses_sq5);
              $provincename = $row5['ProvinceName'];
              
    $hashedPassword = password_hash($pass, PASSWORD_DEFAULT);	  
    $updatequery1 = "UPDATE custlogin set  cust_name='$name', email='$email', phone_no='$mobile',  province='$provincename',  district='$district',  address='$address', password='$hashedPassword', photo='$folder'  where cust_id='$id'";mysqli_query($conn, $updatequery1);
	 header("location: cprofile.php");
  }			  
?>


<!DOCTYPE html>
<html>
<?php include ('cheader.php');  ?>

  <body class="bg-white" id="top">
  
<?php include ('cnav.php');  ?>
 	
  <section class="section section-shaped section-lg">
    <div class="shape shape-style-1 shape-primary">
<!-- ======================================================================================================================================== -->

<div class="container ">
    
    	 <div class="row">
          <div class="col-md-8 mx-auto text-center">
            <span class="badge badge-danger badge-pill mb-3">Profile</span>
          </div>
        </div>
		
          <div class="column column-content">
            <div class="col-md-12 mb-3">
			
			
				<div class="card">
                <div class="card-body bg-gradient-warning">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="<?php echo $para12?>" alt="student" class="rounded-circle img-fluid" width="202px">
                    <div class="mt-3">
                      <h4>                Welcome     <?php echo $login_session ?></h4>
                      		  <button data-toggle="modal" data-target="#edit" class="btn btn-danger">Edit Profile</button>


                    </div>
                  </div>
                </div>
              </div>			 		  
            </div>
			
			
                <div class="col-md-12">
              <div class="card mb-3">
                <div class="card-body bg-gradient-success">
				
                  <div class="row mb-1">
                    <div class="col-sm-3">
                      <h6 class="mb-0 font-weight-bold">Customer ID</h6>
                    </div>
                    <div class="col-sm-9 text-dark">
                      <?php echo $para1 ?>
                    </div>
                  </div>
				
                  
				  
                  <div class="row mb-1">
                    <div class="col-sm-3">
                      <h6 class="mb-0 font-weight-bold">Customer Name</h6>
                    </div>
                    <div class="col-sm-9 text-dark">
                      <?php echo $para2 ?>
                    </div>
                  </div>
              
				  
                  <div class="row mb-1">
                    <div class="col-sm-3">
                      <h6 class="mb-0 font-weight-bold">Email Address</h6>
                    </div>
                    <div class="col-sm-9 text-dark">
                      <?php echo $para5 ?>
                    </div>
                  </div>
                 
				   
				    <div class="row mb-1">
                    <div class="col-sm-3">
                      <h6 class="mb-0 font-weight-bold">Mobile No</h6>
                    </div>
                    <div class="col-sm-9 text-dark">
                      <?php echo $para6 ?>
                    </div>
                  </div>
               
				   
				       <div class="row mb-1">
                    <div class="col-sm-3">
                      <h6 class="mb-0 font-weight-bold">Province</h6>
                    </div>
                    <div class="col-sm-9 text-dark">
                      <?php echo $para7 ?>
                    </div>
                  </div>
			  
				       <div class="row mb-1">
                    <div class="col-sm-3">
                      <h6 class="mb-0 font-weight-bold">District</h6>
                    </div>
                    <div class="col-sm-9 text-dark">
                      <?php echo $para8 ?>
                    </div>
                  </div>
				  
				     <div class="row mb-1">
                    <div class="col-sm-3">
                      <h6 class="mb-0 font-weight-bold">Address</h6>
                    </div>
                    <div class="col-sm-9 text-dark">
                      <?php echo $para9 ?>
                    </div>
                  </div>
				  
				     <!-- <div class="row mb-1">
                    <div class="col-sm-3">
                      <h6 class="mb-0 font-weight-bold">Pincode</h6>
                    </div>
                    <div class="col-sm-9 text-dark">
                      <?php echo $para10 ?>
                    </div>
                  </div> -->
				  
				  
				     <div class="row mb-1">
                    <div class="col-sm-3">
                      <h6 class="mb-0 font-weight-bold">Password</h6>
                    </div>
                    <div class="col-sm-9 text-dark">
                      ******** 
                    </div>
                  </div>
                   

				  
                </div>
              </div>
            </div>				

<!-- Edit Profile  Modal -->

    <div id="edit" class="modal fade" role="dialog">
      <div class="modal-dialog modal-lg" role="content">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Edit Profile</h4>
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div class="modal-body bg-gradient-danger">
		  
		  
            <form
              class="col s12 l5 white-text"
              method="POST"
              autocomplete="new-password"
              enctype="multipart/form-data"
			 
            >
			
              <div class="form-group row">
                <label
                  for="name"
                  class="col-md-3 col-form-label text-black"
                  >Customer ID</label
                >
                <div class="col-md-9">
                  <input
				  name="id"
                    class="form-control "
                    value="<?php echo "$para1"?>"
                    readonly
                  />
                </div>
              </div>
			  
			   <div class="form-group row">
                <label for="staffid" class="col-md-3 col-form-label text-black" > Customer Name </label>
                <div class="col-md-9">
                  <input class="form-control" type="text" name="name" value="<?php echo "$para2"?>" />
                </div>				
              </div>
			  
			  <div class="form-group row">
                <label for="staffid" class="col-md-3 col-form-label text-black" > Email Address </label>
                <div class="col-md-9">
                  <input class="form-control" type="email" name="email" value="<?php echo "$para5"?>" readonly />
                </div>
              </div>
			  
			  <div class="form-group row">
                <label for="staffid" class="col-md-3 col-form-label text-black" > Mobile No </label>
                <div class="col-md-9">
                  <input class="form-control" type="number" min="0" name="mobile" value="<?php echo "$para6"?>" />
                </div>
              </div>
			  
			  
			  
			  <div class="form-group row">
                <label for="staffid" class="col-md-3 col-form-label text-black" > Province <strong class="text-default"> *</strong></label>
                <div class="col-md-9">
                  <select onChange="getdistrict(this.value);"  name="province" id="province" class="form-control" required="true" >
                    <option value=""><?php echo "$para7"?></option>
                   	<?php $query =mysqli_query($conn,"SELECT * FROM province");
					while($row=mysqli_fetch_array($query))
					{ ?>
					<option value="<?php echo $row['PrCode'];?>"><?php echo $row['ProvinceName'];?></option>
					<?php
					}
					?>
                    </select>
                </div>
              </div>
			  
			    <div class="form-group row">
                <label for="staffid" class="col-md-3 col-form-label text-black" > District <strong class="text-default"> *</strong></label>
                <div class="col-md-9">
					<select  name="district" id="district-list" class="form-control" required="true">
				<option value=""><?php echo "$para8"?></option>
				</select>
                </div>
              </div>
			  
			  <div class="form-group row">
                <label for="staffid" class="col-md-3 col-form-label text-black" > Address </label>
                <div class="col-md-9">
                  <input class="form-control" type="text" name="address" value="<?php echo "$para9"?>" />
                </div>
              </div>
			  
			  
			  		 <div class="form-group row">
                <label for="staffid" class="col-md-3 col-form-label text-black" > Password </label>
			   <div class="col-9">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1"><i class="fas fa-lock"></i></span>
              </div>
              <input name="pass" type="password" class="input form-control" id="password" placeholder="password" required="true" aria-label="password" aria-describedby="basic-addon1" />
              <div class="input-group-append">
                <span class="input-group-text" onclick="password_show_hide();">
                  <i class="fas fa-eye" id="show_eye"></i>
                  <i class="fas fa-eye-slash d-none" id="hide_eye"></i>
                </span>
              </div>
            </div>
          </div>
		   </div>
			  
       <div class="form-group row">
                <label for="staffid" class="col-md-3 col-form-label text-black" > Photo <strong class="text-default"> *</strong></label>
                <div class="col-md-9">
                  <input class="form-control" type="file" name="photo" required="true"/>
                </div>				
              </div>
			   <div class="form-group row">
                <label for="staffid" class="col-md-3 col-form-label text-white" >  </label>
                <div class="col-md-9">
            <button name="custupdate" class=" btn-block btn btn-success"><span class="glyphicon glyphicon-edit"></span> Submit</button>		
                </div>		
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
 
  
			
          </div>
        </div>
		 
</section>
    <?php require("footer.php");?>
	
</body>
  <script>
  function password_show_hide() {
  var x = document.getElementById("password");
  var show_eye = document.getElementById("show_eye");
  var hide_eye = document.getElementById("hide_eye");
  hide_eye.classList.remove("d-none");
  if (x.type === "password") {
    x.type = "text";
    show_eye.style.display = "none";
    hide_eye.style.display = "block";
  } else {
    x.type = "password";
    show_eye.style.display = "block";
    hide_eye.style.display = "none";
  }
}
</script>

		  <script>
function getdistrict(val) {
	$.ajax({
	type: "POST",
	url: "cget_district.php",
	data:'province_id='+val,
	success: function(data){
		$("#district-list").html(data);
	}
	});
}

</script>	
</html>