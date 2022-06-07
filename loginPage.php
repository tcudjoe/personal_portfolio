<div class="container loginForm">
    <form action="./index.php?content=classes/login_script" method="post">
        <h1>Admin Login</h1>
        <div class="mb-3">
            <label for="exampleInputUsername1" class="form-label">Username:</label>
            <input name="username" type="text" class="form-control" placeholder="johndoe123" id="exampleInputUsername1" aria-describedby="usernameHelp">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password:</label>
            <input name="password" type="password" placeholder="***********" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-login">Submit</button>
    </form>
</div>