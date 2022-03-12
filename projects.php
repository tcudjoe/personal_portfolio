<?php
    include './classes/databaseQueries.php';
    $object = new databaseQueries();
    $projects = $object->displayProjects();
    $project = $object->displayProjectsContent();
    if(isset($_GET['pagename'])){

    }
?>

<div class="container projects">
    <div class="row">
        <h1>Projects</h1>
        <small>These are all the projects I've made. Some may have been made for friends, some just for fun and some as
            freelance jobs.</small>
        <?php
            foreach ($projects as $project){
        ?>
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 wrapper" style="transform-style: preserve-3d;"
            data-tilt>
            <a href="index.php?content=articles&pagename=<?php echo $project['pagename']?>">
                <img id="tiltable" style="transform: translateZ(50px)" src="./img/<?php echo $project['filename'] ?>"
                    alt="">
            </a>
            <p><?php echo $project['name']?></p>
        </div>
        <?php } ?>
    </div>
</div>
</div>