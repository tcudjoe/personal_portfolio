<?php
    include './functions.php';
    is_authorised(['admin']);
    include './classes/databaseQueries.php';
    $projectsObj = new databaseQueries();
?>

<div class="container dashboard">
    <div class="row">
        <div class="col-12">
            <h1>Projects</h1>
            <p>This is the place to add, delete and edit projects!</p>
        </div>
        <div class="col-12">

        </div>
        <div class="col-12">
            <div>
                <table class="table table-dark table-striped-columns rounded">
                    <thead>
                        <tr>
                            <th scope="col">Filename</th>
                            <th scope="col">Name</th>
                            <th scope="col">Pagename</th>
                            <th scope="col">Githublink</th>
                            <th scope="col">Websitelink</th>
                            <th scope="col">p1</th>
                            <th scope="col">p2</th>
                            <th scope="col">p3</th>
                            <th scope="col">p4</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                            $projects = $projectsObj->displayProjects();
                            foreach($projects as $id => $project ){
                        ?>
                        <tr>
                            <td><?php  echo $project['filename'] ?></td>
                            <td><?php  echo $project['name'] ?></td>
                            <td><?php  echo $project['pagename'] ?></td>
                            <td><?php  echo $project['githublink'] ?></td>
                            <td><?php  echo $project['websitelink'] ?></td>
                            <td><?php  echo mb_strimwidth($project['p1'], 0, 40, "...") ?></td>
                            <td><?php  echo mb_strimwidth($project['p2'], 0, 40, "...") ?></td>
                            <td><?php  echo mb_strimwidth($project['p3'], 0, 40, "...") ?></td>
                            <td><?php  echo mb_strimwidth($project['p4'], 0, 40, "...") ?></td>
                            <td>
                                <a href="index.php?content=editProject&id=<?php echo $project['id'] ?>">
                                    <i class="bi bi-pencil-square"></i>
                                </a>
                            </td>
                            <td>
                                <a href="index.php?content=deleteProject&id=<?php echo $project['id'] ?>">
                                    <i class="bi bi-trash3"></i>
                                </a>
                            </td>
                        </tr>
                        <?php }?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>