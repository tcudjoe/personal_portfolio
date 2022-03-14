<?php
 include './classes/databaseQueries.php';
 $object = new databaseQueries();
 $projects = $object->displayProjectsContent();
//  var_dump($projects);
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