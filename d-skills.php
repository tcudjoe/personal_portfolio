<?php
    include './functions.php';
    is_authorised(['admin']);
    include './classes/databaseQueries.php';
    $object = new databaseQueries();
?>

<div class="container dashboard">
    <div class="row">
        <div class="col-12">
            <h1>Skills</h1>
            <p>This is the place to add, delete and edit skills!</p>
        </div>
        <div class="col-12">

        </div>
        <div class="col-12">
            <div>
                <table class="table table-dark table-striped-columns rounded">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Percentage</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                            $skills = $object->displaySkills(20);
                            foreach($skills as $id => $skill ){
                        ?>
                        <tr>
                            <td><?php  echo $skill['name'] ?></td>
                            <td><?php  echo $skill['percentage'] ?></td>
                            <td>
                                <a href="index.php?content=editSkill&id=<?php echo $skill['id'] ?>">
                                    <i class="bi bi-pencil-square"></i>
                                </a>
                            </td>
                            <td>
                                <a href="index.php?content=deleteSkill&id=<?php echo $skill['id'] ?>">
                                    <i class="bi bi-trash3"></i>
                                </a>
                            </td>
                        </tr>
                        <?php }?>
                    </tbody>
                </table>
                <a href="index.php?content=createSkill">
                    <div class="d-grid">
                        <button type="button" name="button" value="button" class="btn">Add Skill +</button>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>