<?php
  function sanitize($raw_data) {
      global $conn;
      $data = htmlspecialchars($raw_data);
      $data = mysqli_real_escape_string($conn, $data);
      $data = trim($data);
      return $data;
  }

 function mk_password_hash_from_microtime() {
  $mut = microtime();
  $time = explode(" ", $mut);

  $password = $time[1] * $time[0];
  $password_hash = password_hash($password, PASSWORD_BCRYPT);

  $hour = mktime(1, 0, 0, 1, 1, 1970);
  $date_formatted = date("d-m-Y", ($time[1] + $hour));
  $time_formatted = date("H:i:s", ($time[1] + $hour));

  return array("password_hash" => $password_hash,
               "date"          => $date_formatted,
               "time"          => $time_formatted);
  }

  function is_authorised($userroles) {
    if (!isset($_SESSION["id"])){
      // var_dump($_SESSION["id"]);exit();
      return header("Location: ./index.php?content=message&alert=auth-error");
    }elseif (!in_array($_SESSION["userrole"], $userroles)) {
      return header("Location: ./index.php?content=message&alert=auth-error-user");
    }else {
      return true;
    }
  }

  function fileUpload() {
    $target_dir = "img/projectImg/";
    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
    if(isset($_POST["submit"])){
        $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
        if($check !== false){
            echo "file is an image - " . $check["mime"] . ".";
            $uploadOk = 1;
        }else{
            echo "file is not an image.";
            $uploadOk = 0;
        }
    }

    if (file_exists($target_file)) {
      echo "Sorry, file already exists.";
      $uploadOk = 0;
    }

    if ($_FILES["fileToUpload"]["size"] > 500000) {
      echo "Sorry, your file is too large.";
      $uploadOk = 0;
    }

    if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
      && $imageFileType != "gif" ) {
      echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
      $uploadOk = 0;
    }

    if ($uploadOk == 0) {
      echo "Sorry, your file was not uploaded.";
    // if everything is ok, try to upload file
    } else {
      if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "The file ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " has been uploaded.";
      } else {
        echo "Sorry, there was an error uploading your file.";
      }
    }
  }
?>