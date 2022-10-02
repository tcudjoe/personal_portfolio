<?php
    include './classes/databaseQueries.php';
    $object = new databaseQueries();
    $experiences = $object->displayExperiences(20);
?>

<div class="container projects">
    <div class="row">
        <h1>Experiences</h1>
        <small>These are all the projects I've made. Some may have been made for friends, some just for fun and some as
            freelance jobs.</small>
        <?php
            foreach ($experiences as $experience){
        ?>
        <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 wrapper appear"
            style="transform-style: preserve-3d;" data-tilt>
            <h2><?php echo $experience["function"] ?></h2>
            <h3><?php echo $experience["company"] ?></h3>
            <p><?php echo $experience["summary"]?></p>
            <p><?php echo $experience["period"]?></p>
            <p><?php echo $experience["place"]?></p>
            <a href="<?php echo $experience["companywebsite"]?>" target="_blank">
                <p><?php echo $experience["companywebsite"]?></p>
            </a>
        </div>
        <?php } ?>
    </div>
</div>