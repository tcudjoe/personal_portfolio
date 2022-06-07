<?php

    include("classes/connectdb.php");
    include("./functions.php");

    $username = sanitize($_POST["username"]);
    $password = sanitize($_POST["password"]);

    if(empty($username) || empty($password)) {
        header("Location: ./index.php?content=message&alert=no-login");
    }else {
        $sql = "SELECT * FROM `users` WHERE `username` = '$username'";
        $result = mysqli_query($conn, $sql);

        if (!mysqli_num_rows($result)) {
            //username unknown
            header("Location: ./index.php?content=message&alert=error-login");
        }else {
            $record = mysqli_fetch_assoc($result);


            }if ($password !== $record["password"]) {
                //No password match
                // var_dump($record["password"], $record["username"], $sql, $record, $password,password_verify($password, $record["password"]));exit();
                header("Location: ./index.php?content=message&alert=error-login&username=$username");
            }else {

                header("Location: ./index.php?content=dashboard");
            }
    }
