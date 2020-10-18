<!DOCTYPE html>
<?php
        include('Common.php');
        outputhtmlTemp("Home Page");
        outputBannerNavigation("Home")
?>
        <div class="signbtns">
            <p>Sign in or register</p>
            <a class="selected" href="Sign-in.php">Sign-in</a>
            <a class="selected" href="Sign-up.php">Sign-up</a>
        </div>        


    <main>
            <div class="box1">
                <h1>Welcome to Memory Master</h1>            
                <p>How good is your visual memory? how many numbers can you remember in a short amount of time?. Test your memory strength and become the Memory Master</p>
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