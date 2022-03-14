<?php
 include './classes/databaseQueries.php';
 $object = new databaseQueries();
 $projects = $object->displayProjectsContent();
 var_dump($projects);
//  if (isset($_GET['pagename'])) {
//     require_once './classes/databaseQueries.php';
//     $conn = new mysqli($servername, $username,$password,$database);


//     $pagename = $_GET['pagename'];

//     $sql = "SELECT * FROM projects WHERE pagename = '$pagename'";

//     $result = mysqli_query($conn, $sql);

//     $row = mysqli_fetch_assoc($result);

//     //var_dump($row);

// } else {
//     echo 'doei';
// }
 foreach ($projects as $project){
?>

<section class="backgroundImg" style="background-image: url('./img<?php echo $project['filename'];?>')">
</section>
<section>
    <div class="container">
        <div class="row">
            <p><?php echo $project['description']?></p>
        </div>
    </div>
</section>
<?php }?>