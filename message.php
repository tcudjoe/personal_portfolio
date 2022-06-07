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
    }

?>