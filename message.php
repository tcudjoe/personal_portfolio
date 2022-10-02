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
        case 'auth-error':
            echo '<div class="alert alert-error text-center container" style="color: white; margin-top: 50px;" role="alert">
                    You are not authorized to access this page.
                    <br>
                    You are being redirected to the login page.
                  </div>';
            header("Refresh: 3.5; ./index.php?content=loginPage");
        break;
        case 'updateProject-success':
            echo '<div class="alert alert-success text-center container" style="color: white; margin-top: 50px;" role="alert">
                    Project update succesful.
                  </div>';
            header("Refresh: 3.5; ./index.php?content=editProjects");
        break;
        case 'create-project-success':
            echo '<div class="alert alert-success text-center container" style="color: white; margin-top: 50px;" role="alert">
                    Project was created successfully.
                  </div>';
            header("Refresh: 3.5; ./index.php?content=editProjects");
        break;
        case 'create-project-error':
            echo '<div class="alert alert-error text-center container" style="color: white; margin-top: 50px;" role="alert">
                    Project was not created. Please try again later.
                  </div>';
            header("Refresh: 3.5; ./index.php?content=editProjects");
        break;
        case 'upload-image-error':
            echo '<div class="alert alert-error text-center container" style="color: white; margin-top: 50px;" role="alert">
            Something went wrong while creating this project. Probs something with the file. Check your code dumbass 🤦‍♀️
                  </div>';
            header("Refresh: 3.5; ./index.php?content=editProjects");
        break;
        case 'upload-file-type-error':
            echo '<div class="alert alert-error text-center container" style="color: white; margin-top: 50px;" role="alert">
                    You are supposed to upload files with type png. jpg, jpeg and/or gif. Why did you try anything else 😠
                  </div>';
            header("Refresh: 3.5; ./index.php?content=editProjects");
        break;
        case 'no-file-selected':
            echo '<div class="alert alert-error text-center container" style="color: white; margin-top: 50px;" role="alert">
                    You forgot to select a file weirdo🙄
                  </div>';
            header("Refresh: 3.5; ./index.php?content=editProjects");
        break;
    }

?>