<?php
    include './functions.php';
    is_authorised(['admin']);
    include './classes/databaseQueries.php';
    $projectsObj = new databaseQueries();

    //edit record
    if(isset($_GET['id']) && !empty($_GET['id'])){
        $editProject = $_GET['id'];
        $project = $projectsObj->displayProjects();
    }

    //update record
    if(isset($_POST['update']))
?>

<div class="container">
    <form class="readProjects">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="text" class="form-control" value="<?php echo $project['filename']; ?>" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="text" class="form-control" value="<?php echo $project['name']; ?>" id="exampleInputPassword1">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="text" class="form-control" value="<?php echo $project['pagename']; ?>" id="exampleInputPassword1">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="text" class="form-control" value="<?php echo $project['githublink']; ?>" id="exampleInputPassword1">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="text" class="form-control" value="<?php echo $project['webisitelink']; ?>" id="exampleInputPassword1">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" value="<?php echo $project['p1']; ?>" rows="3"></textarea>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" value="<?php echo $project['p2']; ?>" rows="3"></textarea>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" value="<?php echo $project['p3']; ?>" rows="3"></textarea>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" value="<?php echo $project['p4']; ?>" rows="3"></textarea>
        </div>
        <a href="">
            <input type="hidden" name="id" value="<?php echo $project['id']?>">
            <button type="submit" name="update" value="update" class="btn btn-primary">Submit</button>
        </a>
    </form>
</div>