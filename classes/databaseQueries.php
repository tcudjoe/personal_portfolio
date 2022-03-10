<?php
    class databaseQueries {
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

        public function insertContact($post)
        {
            $name = $this->conn->real_escape_string($_POST['name']);
            $phonenumber = $this->conn->real_escape_string($_POST['phonenumber']);
            $email = $this->conn->real_escape_string($_POST['email']);
            $message = $this->conn->real_escape_string($_POST['message']);
            $query="INSERT INTO contact(name, email, message, phonenumber) VALUES('$name','$email','$message', $phonenumber)";
            $sql = $this->conn->query($query);
            if ($sql==true) {
                // var_dump($sql, $query);exit;
                header("Location:index.php?content=home");
            }else{
                // var_dump($query, $sql);exit;
                header("Location:index.php?content=home");
            }
        }

        public function displayProjects()
        {
            $query = "SELECT * FROM projects ";
            $result = $this->conn->query($query);
            // echo $query;
            if($result){
                if ($result->num_rows > 0) {
                    $data = array();
                    while ($row = $result->fetch_assoc()) {

                            $data[] = $row;
                    }
                    return $data;
                }else{
                    echo "No found records";
                    }
            }else {
                echo "error in ".$query."<br>".$this->conn->error;
            }
        }
    }

?>