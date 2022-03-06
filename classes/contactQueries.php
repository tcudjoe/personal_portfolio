<?php

    class contactQueries {
        private $servername = "localhost";
        private $username   = "root";
        private $password   = "";
        private $database   = "portfolio";
        public  $conn;


        // Database Connection
        public function __construct()
        {
            $this->conn = new mysqli($this->servername, $this->username,$this->password,$this->database);
            if(mysqli_connect_error()) {
             trigger_error("Failed to connect to MySQL: " . mysqli_connect_error());
            }else{
            return $this->conn;
            }
        }

        public function insertDataDrinks($post)
        {
            $name = $this->conn->real_escape_string($_POST['name']);
            $phonenumber = $this->conn->real_escape_string($_POST['phonenumber']);
            $email = $this->conn->real_escape_string($_POST['number']);
            $message = $this->conn->real_escape_string($_POST['message']);
            $query="INSERT INTO contact(name, email, message, phonenumber) VALUES('$name','$email','$message', $phonenumber)";
            $sql = $this->conn->query($query);
            if ($sql==true) {
                header("Location:message.php?alert=insert_drink_succes");
            }else{
                var_dump($query, $sql);
                header("Location:message.php?alert=insert_drink_error");
            }
        }
    }

?>