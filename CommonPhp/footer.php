<?php

/* function that outputs the footer layout for each page
it also outputs the closing tags for each page */

function outputFooter()
{
    echo '</section>';
    echo '<footer>
<!--footer devided into 4 sections-->
<div class="section1">
    <h1>Memory Master</h1>
    <p>This game is developed by Sohail, and the purpose of the game is mainly testing the extent to which user can
        remember a series of numbers in a short amount of time.</p>
</div>
<!--links to pages-->
<div class="section2">
    <a href="index.php">Home</a>
    <a href="Game.php">Game</a>
    <a href="HowToPlay.php">HowToPlay</a>
    <a href="Leaderboard.php">Leaderboard</a>
    <a href="Contact.php">Contact</a>
</div>
<!--social media links-->
<div class="section3">
    <div class="followOn">Follow On
        <div class="facebook-icon">
            <a href="https://www.facebook.com/"><img src="Images/facebook.png" alt=""></a>
        </div>
        <div class="twitter-icon">
            <a href="https://twitter.com/">
                <img src="Images/twitter.png" alt="">
            </a>
        </div>
        <div class="instagram-icon">
            <a href="https://www.instagram.com/">
                <img src="Images/instagram.jpg" alt="">
            </a>
        </div>
        <div class="github-icon">
            <a href="https://github.com/SohailMG">
                <img src="Images/Github.png" alt="">
            </a>
        </div>
    </div>
</div>
<div class="section4">
    <h1>Stay Updated</h1>
    <input type="text" name="Email" placeholder="Enter Email ">
    <button id="subbtn">Subscribe</button>
</div>
</div>
</footer>';

    echo '<script type="text/javascript" src="src/formValidation.js"></script>';
    echo '<script type="text/javascript" src="src/Typewriter.js"></script>';
    echo '<script type="text/javascript" src="src/Contact.js"></script>';
    echo '<script type="text/javascript" src="src/Leaderboard.js"></script>';
    echo '</body>';
    echo '</body>';
    echo '

</html>';
}