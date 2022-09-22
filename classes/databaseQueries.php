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
            $created_at = $this->conn->real_escape_string($_POST['created_at']);
            $responded = $this->conn->real_escape_string($_POST['responded']);
            $query="INSERT INTO contact(name, email, message, phonenumber, created_at, responded) VALUES('$name','$email','$message', $phonenumber, '$created_at', '$responded')";
            $sql = $this->conn->query($query);
            if ($sql==true) {
                header("Location: index.php?content=message&alert=form-success");
            }else{
                header("Location: index.php?content=message&alert=form-error");
            }
        }

        public function displayProjects($perPage)
        {
            $query = "SELECT * FROM projects ORDER BY id DESC limit $perPage";
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

        public function insertProjects() {

        }

        public function displayProjectUpdate()
        {
            $id =$this->conn->real_escape_string($_GET["id"]);
            $query = "SELECT * FROM projects WHERE id = '$id'";
            $result = $this->conn->query($query);
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

        public function displayProjectsContent(){
            $pagename =$this->conn->real_escape_string($_GET["pagename"]);
            $query = "SELECT * FROM projects WHERE pagename = '$pagename'";
            $result = $this->conn->query($query);
            if(isset($_GET['pagename'])){
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

        public function updateProjects($postData) {
            $filename = $this->conn->real_escape_string($_POST['filename']);
            $name = $this->conn->real_escape_string($_POST['name']);
            $githublink = $this->conn->real_escape_string($_POST['githublink']);
            $websitelink = $this->conn->real_escape_string($_POST['websitelink']);
            $p1 = $this->conn->real_escape_string($_POST['p1']);
            $p2 = $this->conn->real_escape_string($_POST['p2']);
            $p3 = $this->conn->real_escape_string($_POST['p3']);
            $p4 = $this->conn->real_escape_string($_POST['p4']);
            $id = $this->conn->real_escape_string($_POST['id']);
            if (!empty($id) && !empty($postData)) {
                $query = "UPDATE projects SET filename = '$filename', name = '$name', githublink = '$githublink', websitelink = '$websitelink', p1 = '$p1', p2 = '$p2', p3 = '$p3', p4 = '$p4' WHERE id = '$id'";
                $sql = $this->conn->query($query);
                if ($sql==true) {
                    header("Location: index.php?content=message&alert=updateProject-success");
                }else{
                    header("Location: index.php?content=message&alert=updateProject-error");

                }
                }
        }

        public function displayContactInfo($perPage){
            $query = "SELECT * FROM contact ORDER BY id DESC limit $perPage";
            $result = $this->conn->query($query);

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

        public function readMessages(){
            $id =$this->conn->real_escape_string($_GET["id"]);
            $query = "SELECT * FROM contact WHERE id = $id";
            $result = $this->conn->query($query);

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

        public function pagination(){
            $query = "SELECT * FROM contact ORDER BY id DESC";
            $result = $this->conn->query($query);

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