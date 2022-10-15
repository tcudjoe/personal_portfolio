<?php
    include './classes/databaseQueries.php';
    $object = new databaseQueries();
    $experiences = $object->displayExperience(20);
?>

<div class="container projects">
    <div class="row">
        <h1>Experiences</h1>
        <small>These are the places I've worked at, how long I worked at those places and the title that I got when I was workink at those places.</small>
        <?php
            foreach ($experiences as $experience){
        ?>
        <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 wrapper appear"
            style="transform-style: preserve-3d;">
            <h3 style="color: rgb(234, 234, 234);"><?php echo $experience["function"] ?></h3>
            <a class="companySite" href="<?php echo $experience["companywebsite"]?>" target="_blank">
                <h3><?php echo $experience["company"] ?></h3>
            </a>
            <p style="text-align:left;"><?php echo $experience["summary"]?></p>
            <p style="text-align:left;"><?php echo $experience["period"]?></p>
            <p style="text-align:left;"><?php echo $experience["place"]?></p>
        </div>
        <?php } ?>
    </div>
</div>