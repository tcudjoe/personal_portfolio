<?php
 include './classes/databaseQueries.php';
 $object = new databaseQueries();
 $projects = $object->displayProjectsContent();
//  var_dump($projects);
 foreach ($projects as $project){
?>

<section class="backgroundImg" style="background-image: url('./img/projectImg/<?php echo $project['filename'];?>')">
</section>
<section>
    <div class="container">
        <div class="row">
            <h2><?php echo $project['name']?></h2>
            <p><?php echo $project['description']?></p>
            <video width="100%" height="100%" controls>
                <source src="img/projectImg/<?php echo $project['videoFilename'];?>" type="video/mp4">
                <source src="img/projectImg/<?php echo $project['videoFilename'];?>" type="video/ogg">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
</section>
<?php }?>