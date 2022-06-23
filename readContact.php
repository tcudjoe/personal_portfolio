<?php
    include './functions.php';
    is_authorised(['admin']);
    include './classes/databaseQueries.php';
    $contactObj = new databaseQueries();
?>
<div class="container">
    <div class="row ">
        <div class="col-12 readMessages">
            <h1>Contact messages</h1>
            <p>This is the place where you can check all the contact messages and edit the status if you have responded
                to them!</p>
        </div>
        <?php
            $contacts = $contactObj->readMessages();
            foreach($contacts as $contact){
        ?>
        <form class="" method="post" action="">
            <div class="mb-3">
                <label for="exampleInputName1" class="form-label">Name</label>
                <input type="text" name="name" class="form-control" value="<?php echo $contact["name"] ?>"
                    id="exampleInputName1" aria-describedby="emailHelp" disabled>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="text" name="email" class="form-control" value="<?php echo $contact["email"] ?>"
                    id="exampleInputEmail1" disabled>
            </div>
            <div class="mb-3">
                <label for="exampleInputPhonenumber1" class="form-label">Phonenumber</label>
                <input type="text" name="phonenumber" class="form-control" value="<?php echo $contact["phonenumber"] ?>"
                    id="exampleInputPhonenumber1" disabled>
            </div>
            <div class="mb-3">
                <label for="exampleInputTimestamp1" class="form-label">created at:</label>
                <input type="text" name="created_at" class="form-control" value="<?php echo $contact["created_at"] ?>"
                    id="exampleInputTimestamp1" disabled>
            </div>
            <div class="mb-3">
                <label for="exampleInputResponded1" class="form-label">Responded</label>
                <select class="form-select" aria-label="Default select example" name="responded">
                    <option selected>Open this select menu</option>
                    <option value="no" <?php if($contact["responded"] == "no") {echo "selected"; } ?>>No</option>
                    <option value="yes" <?php if($contact["responded"] == "yes") {echo "selected"; } ?>>Yes</option>
                    <option value="pending" <?php if($contact["responded"] == "pending") {echo "selected"; } ?>>Pending
                    </option>
                </select>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" name="message" id="exampleFormControlTextarea1"
                    value="<?php echo $contact["message"] ?>" rows="3" disabled></textarea>
            </div>
            <a href="">
                <input type="hidden" name="id" value="<?php echo $contact['id'] ?>">
                <button type="submit" name="update" value="update" class="btn">Submit</button>
            </a>
            <?php }?>

        </form>
    </div>
</div>