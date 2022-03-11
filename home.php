<?php
    include('./classes/databaseQueries.php');

    // $contactObject = new databaseQueries();
    $object = new databaseQueries();
    $projects = $object->displayProjects();

    // Insert Record in contact table
  if(isset($_POST['submit'])) {
    $object->insertContact($_POST);
  }
    // var_dump($contactObject);exit;
?>
<div>
    <section id="home-section">
        <div class="container">
            <img src="./img/tv-static.gif" alt="tv static gif">
            <h1>
                <a href="" class="typewrite" data-period="2000"
                    data-type='["Welcome to my portfolio!", "Feel free to look around.", "Don&#39;t hesitate to leave your contact information!", "Have a good day!"]'>
                    <span class="wrap"></span>
                </a>
            </h1>
            <section id="section10" class="demo">
                <a href="#about-section"><span></span></a>
            </section>
        </div>
    </section>
</div>

<!-- About me-section -->
<div>
    <section id="about-section">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <h1>Who am I?</h1>
                    <p>Hi,
                        <br>
                        My name is <span>T. Cudjoe</span>, I am a Junior developer and welcome to my portfolio.
                        <br>
                        <br>
                        I want to, first and foremost, thank you for visiting my portfolio website. Which probably means
                        that I intrigued
                        you enough to take a look around 😉
                        <br>
                        <br>
                        Let me tell you about me:
                        <br>
                        <ul>
                            <li><span>I always work efficient.🔥</span> <br> I always try to do my
                                best to work as neat as possible so that mij
                                colleagues can understand what ive written by using comments.</li>
                            <br>
                            <li><span>I am goal oriented. 🥅</span> <br> I work best When there is a deadline or a goal
                                that
                                has to be reached.
                                That’s when I don’t let distractions distract me so I can get most out of my time. And I
                                do
                                sometimes work outside of office hours if it is needed.</li>
                            <br>
                            <li><span>I am studious. 📚</span> <br> I love to learn new things about anything. Which
                                means that
                                I
                                love to learn things not only in the tech field, but really anything. This makes it
                                easier for
                                me to adjust to new environments and new languages.</li>
                        </ul>
                        <br>
                        I hope this gives you a bit of an idea as to who I am and whether I am a great fit for you and
                        you work culture.
                        <br>
                        <br>
                        Kind regards,
                        <br>
                        T. Cudjoe
                    </p>
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

<!-- projects-section -->
<div>
    <section id="projects-section">
        <div class="container">
            <div class="row">
                <h1>Projects</h1>
                <?php foreach ($projects as $project) {?>
                <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 wrapper"
                    style="transform-style: preserve-3d;" data-tilt>
                    <a href="index.php?content=<?php echo $project['pagename']?>">
                        <img id="tiltable" style="transform: translateZ(50px)"
                            src="./img/<?php echo $project['filename']?>" alt="">
                    </a>
                    <p><?php echo $project['name']?></p>
                </div>
                <?php }?>
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

<!-- contact-section -->
<div>
    <section id="contact-section">
        <div class="container">
            <div class="row">
                <h1>Contact</h1>
                <form action="index.php?content=home" method="post"
                    class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div class="">
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
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 contactInfo">
                    <label>Email:</label>
                    <p>Tyra20015@gmail.com</p>
                    <br>
                    <label>Phonenumber:</label>
                    <p>+31 6 15 36 47 92</p>
                    <br>
                    <label>Website:</label>
                    <p>Tcudjoe.com</p>
                </div>

            </div>
        </div>
    </section>
</div>