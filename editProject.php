<?php
    include './functions.php';
    is_authorised(['admin']);
    include './classes/databaseQueries.php';
    $projectsObj = new databaseQueries();

    //edit record
    if(isset($_GET['id']) && !empty($_GET['id'])){
        $editProject = $_GET['id'];
        $project = $projectsObj->displayProjectUpdate();
    }

    //update record
    if(isset($_POST['update'])){
        $projectsObj->updateProjects($_POST);
    }


    ?>

<div class="container">
    <form class="readProjects" method="post" action="index.php?content=editProject">
        <?php
        $projects = $projectsObj->displayProjectUpdate();
        foreach($projects as $id => $project) {
        ?>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Filename:</label>
            <input type="text" name="filename" class="form-control" value="<?php echo $project['filename']; ?>" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Name:</label>
            <input type="text" name="name" class="form-control" value="<?php echo $project['name']; ?>" id="exampleInputPassword1">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Pagename:</label>
            <input type="text" name="pagename" class="form-control" value="<?php echo $project['pagename']; ?>" id="exampleInputPassword1">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Github link:</label>
            <input type="text" name="githublink" class="form-control" value="<?php echo $project['githublink']; ?>" id="exampleInputPassword1">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Website link:</label>
            <input type="text" name="websitelink" class="form-control" value="<?php echo $project['websitelink']; ?>" id="exampleInputPassword1">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Paragraph 1</label>
            <textarea class="form-control" name="p1" id="exampleFormControlTextarea1" value="<?php echo $project['p1']; ?>" rows="3"></textarea>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Paragraph 2</label>
            <textarea class="form-control" name="p2" id="exampleFormControlTextarea1" value="<?php echo $project['p2']; ?>" rows="3"></textarea>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Paragraph 3</label>
            <textarea class="form-control" name="p3" id="exampleFormControlTextarea1" value="<?php echo $project['p3']; ?>" rows="3"></textarea>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Paragraph 4</label>
            <textarea class="form-control" name="p4" id="exampleFormControlTextarea1" value="<?php echo $project['p4']; ?>" rows="3"></textarea>
        </div>
        <?php } ?>
        <a href="index.php?content=editProjects">
            <input type="hidden" name="id" value="<?php echo $project['id']?>">
            <button type="submit" name="update" value="update" class="btn btn-primary">Update</button>
        </a>
    </form>
</div>