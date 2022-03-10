<div class="container">
    <div class="row">
        <h1>Projects</h1>
        <?php
            include './classes/databaseQueries.php';
            $object = new databaseQueries();
            $projects = $object->displayProjects();

            foreach ($projects as $project){
        ?>
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 wrapper" style="transform-style: preserve-3d;"
            data-tilt>
            <a href="#">
                <img id="tiltable" style="transform: translateZ(50px)" src="./img/<?php echo $project['filename'] ?>" alt="">
            </a>
            <p><?php echo $project['name']?></p>
        </div>
        <?php } ?>
        <!-- <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 wrapper" style="transform-style: preserve-3d;"
            data-tilt>
            <a href="#">
                <img id="tiltable" style="transform: translateZ(50px)"
                    src="./img/placeholders/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg" alt="">
            </a>
            <p>Progressive Monitor App</p>
        </div> -->
    </div>
</div>
</div>