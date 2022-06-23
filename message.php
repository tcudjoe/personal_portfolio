<?php
    $alert = (isset($_GET["alert"]))? $_GET["alert"]: "default";
    $id = (isset($_GET["id"]))? $_GET["id"]: "";
    $pwh = (isset($_GET["pwh"]))? $_GET["pwh"]: "";
    $username = (isset($_GET["username"]))? $_GET["username"]: "";

    switch($alert){
        case 'no-login':
            echo '<div class="alert alert-danger text-center container" style="color: white; margin-top: 50px;" role="alert">
                    one of the 2 fields was not filled in.
                    Try again...
                  </div>';
            header("Refresh: 3.5; ./index.php?content=LoginPage");
        break;

        case 'error-login':
            echo '<div class="alert alert-danger text-center container" style="color: white; margin-top: 50px;" role="alert">
                    password or username was incorrect.
                    Try again...
                  </div>';
            header("Refresh: 3.5; ./index.php?content=LoginPage");
        break;

        case 'successfull-logout':
            echo '<div class="alert alert-success text-center container" style="color: white; margin-top: 50px;" role="alert">
                    You have been succesfully logged out.
                  </div>';
            header("Refresh: 3.5; ./index.php?content=LoginPage");
        break;
        case 'form-success':
            echo '<div class="alert alert-success text-center container" style="color: white; margin-top: 50px;" role="alert">
                    The form has successfully been submitted.
                  </div>';
            header("Refresh: 3.5; ./index.php?content=home");
        break;
        case 'form-error':
            echo '<div class="alert alert-error text-center container" style="color: white; margin-top: 50px;" role="alert">
                    Something went wrong. Please try again..
                  </div>';
            header("Refresh: 3.5; ./index.php?content=home#contact-section");
        break;
    }

?>