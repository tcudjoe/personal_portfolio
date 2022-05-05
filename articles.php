<?php
 include './classes/databaseQueries.php';
 $object = new databaseQueries();
 $projects = $object->displayProjectsContent();
 //  var_dump($projects);
 foreach ($projects as $project){
        // var_dump($project['videoFilename']);exit;
?>

<section class="backgroundImg" style="background-image: url('./img/projectImg/<?php echo $project['filename'];?>')">
</section>
<section>
    <div class="container">
        <div class="row">
            <div class="col-12" style="background-color: black;">
                <h2 class="projectName"><?php echo $project['name']?></h2>
                <p class="projectDescription"><?php echo $project['description']?></p>
            </div>
            <div class="col-12">
            </div>
        </div>
    </div>
</section>
<?php }?>