<?php
        include('Common.php');
        outputhtmlTemp("Home Page");
        outputBannerNavigation("Home")
?>
        <div class="signbtns">
            <p>Are you registered?</p>
            <a class="selected" href="Sign-in.php">Sign-in</a>
            <a class="selected" href="Sign-up.php">Sign-up</a>
        </div>        


    <main>
            <div class="box1">
                <h1>Welcome to Memory Master</h1> 
                <div class="questions">           
                <ul>How good is your visual memory?</ul>
                <ul>How many numbers can you remember in a short amount of time?</ul>
                <ul> Test your memory strength and become the Memory Master</ul>
                </div>
            </div>
            <div class="box2">
                <img src="Images/Brainlogo.jpg" alt="">
            </div>
    </main>


    <footer>
        <p>This is the footer info</p>
    </footer>


<?php
    outputfooter();
?>