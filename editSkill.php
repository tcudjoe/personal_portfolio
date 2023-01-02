<?php
    include './functions.php';
    is_authorised(['admin']);
    include './classes/databaseQueries.php';
    $object = new databaseQueries();

    //edit record
    if(isset($_GET['id']) && !empty($_GET['id'])){
        $editSkill = $_GET['id'];
        $skill = $object->displaySkillsUpdate();
    }

    //update record
    if(isset($_POST['update'])){
        $object->updateSkills($_POST);
    }


    ?>

<div class="container">
    <form class="readProjects" method="post" action="index.php?content=editSkill">
        <?php
        $skills = $object->displaySkillsUpdate();
        foreach($skills as $id => $skill) {
        ?>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Filename:</label>
            <input type="text" name="name" class="form-control" value="<?php echo $skill['name']; ?>" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Name:</label>
            <input type="number" name="percentage" class="form-control" value="<?php echo $skill['percentage']; ?>" id="exampleInputPassword1">
        </div>
        <?php } ?>
        <a href="index.php?content=d-skills">
            <input type="hidden" name="id" value="<?php echo $skill['id']?>">
            <button type="submit" name="update" value="update" class="btn btn-primary">Update</button>
        </a>
    </form>
</div>