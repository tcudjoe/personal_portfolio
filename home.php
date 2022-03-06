<?php
    include('./classes/contactQueries.php');

    $contactObject = new contactQueries();

    // Insert Record in contact table
  if(isset($_POST['submit'])) {
    $contactObject->insertContact($_POST);
  }
    // var_dump($contactObject);exit;
?>
<div>
    <section id="home-section">
        <div class="container">
            <img src="./img/tv-static.gif" alt="tv static gif">
            <h1>
                <a href="" class="typewrite" data-period="2000" data-type='["Welcome to my portfolio!", "Feel free to look around.", "Don&#39;t hesitate to leave your contact information!", "Have a good day!"]'>
                    <span class="wrap"></span>
                </a>
            </h1>
        </div>
    </section>
</div>

<div>
    <section id="about-section">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <h1>Who am I?</h1>
                    <p>lorem ipsum dolor sit amet, consectetur adip</p>
                    <p>lorem ipsum dolor sit amet, consectetur adip</p>
                    <p>lorem ipsum dolor sit amet, consectetur adip</p>
                    <p>lorem ipsum dolor sit amet, consectetur adip</p>
                    <p>lorem ipsum dolor sit amet, consectetur adip</p>
                    <p>lorem ipsum dolor sit amet, consectetur adip</p>
                    <p>lorem ipsum dolor sit amet, consectetur adip</p>
                    <p>lorem ipsum dolor sit amet, consectetur adip</p>
                    <p>lorem ipsum dolor sit amet, consectetur adip</p>
                    <p>lorem ipsum dolor sit amet, consectetur adip</p>
                    <p>lorem ipsum dolor sit amet, consectetur adip</p>
                    <p>lorem ipsum dolor sit amet, consectetur adip</p>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                    <img src="./img/IMG_1650.jpg" alt="Ty Cudjoe Profile Picture">
                </div>
            </div>
        </div>
    </section>
</div>

<!-- skills-section -->
<div>
    <section id="skills-section">
        <div class="container">
            <div class="row">
                <div id="skill-bar-wrapper">
                    <div class="text-left">
                        <h1 class="skill-bartext">Skills</h1>

                        HTML<span style="float:right;">85%</span>
                        <div class="skillbar-container clearfix" data-percent="85%">
                            <div class="skills" style="background: white;"></div>
                        </div>

                        CSS<span style="float:right;">65%</span>
                        <div class="skillbar-container clearfix" data-percent="65%">
                            <div class="skills" style="background: white;"></div>
                        </div>

                        Bootstrap<span style="float:right;">85%</span>
                        <div class="skillbar-container clearfix" data-percent="85%">
                            <div class="skills" style="background: white;"></div>
                        </div>

                        JavaScript<span style="float:right;">40%</span>
                        <div class="skillbar-container clearfix" data-percent="40%">
                            <div class="skills" style="background: white;"></div>
                        </div>

                        VueJS<span style="float:right;">20%</span>
                        <div class="skillbar-container clearfix" data-percent="20%">
                            <div class="skills" style="background: white;"></div>
                        </div>

                        Python<span style="float:right;">30%</span>
                        <div class="skillbar-container clearfix" data-percent="30%">
                            <div class="skills" style="background: white;"></div>
                        </div>

                        PHP<span style="float:right;">65%</span>
                        <div class="skillbar-container clearfix" data-percent="65%">
                            <div class="skills" style="background: white;"></div>
                        </div>

                        MySQL<span style="float:right;">85%</span>
                        <div class="skillbar-container clearfix" data-percent="85%">
                            <div class="skills" style="background: white;"></div>
                        </div>

                        Git/Github<span style="float:right;">80%</span>
                        <div class="skillbar-container clearfix" data-percent="80%">
                            <div class="skills" style="background: white;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<div>
    <section id="projects-section">
        <div class="container">
            <div class="row">
                <h1>Projects</h1>
                <div class="col-12 wrapper" style="transform-style: preserve-3d;" data-tilt>
                    <a href="#">
                        <img id="tiltable" style="transform: translateZ(50px)" src="./img/jpg1.jpg" alt="">
                    </a>
                    <p>Aprèsdesheuresapparel.com</p>
                </div>
                <div class="col-12 wrapper" style="transform-style: preserve-3d;" data-tilt>
                    <a href="#">
                        <img id="tiltable" style="transform: translateZ(50px)"
                            src="./img/placeholders/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg" alt="">
                    </a>
                    <p>Progressive Monitor App</p>
                </div>
            </div>
            <div class="row">
                <div>
                    <a href="index.php?content=projects">
                        <button class="btn btnCenter">View more</button>
                    </a>
                </div>
            </div>
        </div>
    </section>
</div>

<div>
    <section id="contact-section">
        <div class="container">
            <div class="row">
                <h1>Contact</h1>
                <form action="index.php?content=home" method="post">
                    <div class="col-12">
                        <div class="mb-3">
                            <input type="text" name="name" class="form-control" id="exampleFormControlInput1"
                                placeholder="John Doe">
                        </div>
                        <div class="mb-3">
                            <input type="text" name="phonenumber" class="form-control" id="exampleFormControlInput1"
                                placeholder="+31612345678">
                        </div>
                        <div class="mb-3">
                            <input type="email" name="email" class="form-control" id="exampleFormControlInput1"
                                placeholder="john@doe.com">
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" name="message" id="exampleFormControlTextarea1" rows="3"
                                placeholder="Type your message here..."></textarea>
                        </div>
                        <button type="submit" name="submit" value="submit" class="btn btn-contact">Submit</button>
                    </div>
                </form>
                <div class="col-12 contactInfo">
                    <label>Email:</label>
                    <p>Tyra20015@gmail.com</p>
                    <br>
                    <label>Website:</label>
                    <p>Tcudjoe.com</p>
                    <p></p>
                </div>

            </div>
        </div>
    </section>
</div>