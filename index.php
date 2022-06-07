<?php session_start(); session_gc();?>
<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="apple-touch-icon" sizes="180x180" href="./img/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./img/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./img/favicon/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300&display=swap" rel="stylesheet">
    <title>tcudjoe.com</title>
</head>

<body>
    <header>
        <nav class="navbar navbar-expand fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    T. Cudjoe
                </a>
                <div>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="index.php?content=home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="index.php?content=projects">Projects</a>
                        </li>

                                <?php if(isset($_SESSION['id'])){
                                //   var_dump($_SESSION["id"]);exit();
                                    switch($_SESSION['userrole']){
                                        case 'admin':
                                            echo '
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                                                    dropdown menu
                                                </a>
                                                <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="index.php?content=dashboard">Dahboard</a></li>
                                                <li><a class="dropdown-item" href="index.php?content=logout">Logout</a></li>
                                                </ul>
                                            </li>';
                                        break;
                                        case '':
                                            echo '';
                                        break;
                                    }
                                } ?>


                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <main>
        <?php include("./content.php") ?>
    </main>

    <footer>
        <div class="">
            <div class="row">
                <ul class="iconSocial">
                    <a href="https://twitter.com/CudjoeTyra">
                        <i class="fa-brands fa-twitter fa-2xl"></i>
                    </a>
                    <a href="https://github.com/tcudjoe">
                        <i class="fa-brands fa-github fa-2xl"></i>
                    </a>
                    <a href="https://discordapp.com/users/magicalassembler#5251/">
                        <i class="fa-brands fa-discord fa-2xl"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/tcudjoe2401/">
                        <i class="fa-brands fa-linkedin fa-2xl"></i>
                    </a>
                </ul>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
    </script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/ec3fa6845f.js" crossorigin="anonymous"></script>
    <script src="./js/app.js"></script>
    <script src="./js/tilt.js"></script>
    <script src="./js/typewriter.js"></script>
    <script src="./js/pageAnimation.js"></script>
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    -->
</body>

</html>