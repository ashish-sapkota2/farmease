
<style>
.topnav a {
  border-bottom: 3px solid transparent;
}

.topnav a:hover {
  border-bottom: 3px solid red;
}

.topnav a.activa {
  border-bottom: 3px solid red;
}

</style>	
	
  <script>
$("#nav li a").each(function() {   
    if (this.href == window.location.href) {
        $(this).addClass("activaa");
    }
});
  </script>

<!-- check -->
  <nav
  id="navbar-main"
      class="navbar navbar-expand-lg navbar-light fixed-top py-3 bg-light opacity-85" data-navbar-on-scroll="data-navbar-on-scroll">
      <div class="container"><a class="navbar-brand" href="#"><img class="d-inline-block align-top img-fluid" src="../assets/img/fm-logo.png" alt="" width="100" /><span class="text-theme font-monospace fs-4 ps-2"></span></a>
      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
         <div class="navbar-collapse collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">

         <ul class="navbar-nav align-items-lg-center ml-auto topnav" id="nav">

		
         <li class="nav-item px-2">
              <a href="cbuy_crops.php" class="nav-link">
                <span class="text-dark nav-link-inner--text font-weight-bold"
                  ><i class="text-dark fas fa-shopping-cart"></i> Buy Crops</span
                >
              </a>
            </li>

            <li class="nav-item px-2">
              <a href="corderhistory.php" class="nav-link">
                <span class="text-dark nav-link-inner--text font-weight-bold"
                  ><i class="fa fa-shopping-bag" aria-hidden="true"></i> My orders</span
                >
              </a>
            </li>

            <li class="nav-item px-2">
              <a href="cstock_crop.php" class="nav-link">
                <span class="text-dark nav-link-inner--text font-weight-bold"
                  ><i class="text-dark fad fa-store-alt"></i> Crop Stocks</span
                >
              </a>
            </li>
	
		
		   <li class="nav-item px-2" id="profile">
              <a href="cprofile.php" class="nav-link">
                <span class="nav-link-inner--text font-weight-bold"
                  ><i class="fas fa-user"></i> <?php echo $para2 ?> </span
                >
              </a>
            </li>
			
			
		  
		   <li class="nav-item px-2">
              <a href="clogout.php" class="nav-link">
                <span class="nav-link-inner--text font-weight-bold"
                  ><i class="text-danger fas fa-power-off"></i> Logout </span
                >
              </a>
</li>
          </ul>
          
        </div>
      </div>
    </nav>
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Chivo:wght@300;400;700;900&amp;display=swap" rel="stylesheet"> -->
    
  </body>
</html>
