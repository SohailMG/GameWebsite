<?php
function OutputHtmlHead()
{
    echo '<!DOCTYPE html>
        <html lang="en">
    
        <head>
        <meta charset="UTF-8" />
        <title>game</title>
        <link rel="stylesheet" href="styles/Index.css">
        <link rel="stylesheet" href="styles/RegistForms.css">
        <link rel="stylesheet" href="styles/Game.css">
        <link rel="stylesheet" href="styles/Contact.css">
        <link rel="stylesheet" href="styles/HowToPlay.css">
        <link rel="stylesheet" href="styles/LeaderBoard.css">
    </head>';
}


function OutputNav()
{
    echo '<body>
        <header>
        <div class="Title">
            <div class="Memory"><a href="index.php">Memory</a></div>
            <div class="Master">Master</div>
        </div>
        <div id="gamelogo"></div>
        </header>
        <nav>
    <div class="navbar">
    <a href="index.php">Home</a>
    <a class="selected" href="Game1.php">Game</a>
    <a href="HowToPlay.php">HowToPlay</a>
    <a href="Leaderboard.php">Leaderboard</a>
    <a href="Contact.php">Contact</a>
    </div><div id="signbtns">
            <p id="loggedIn"></p>
            <a id="signN" href="Sign-in.php"><b>Sign-in</b></a>
            <a id="signP" href=" Sign-up.php"><b>Sign-up</b></a>
            <a id="signO" href=" index.php" style="display:none" onclick="logOut()"><b>Sign-out</b></a>
        </div></nav>';
}

function Outputfooter()
{
    echo '<footer id="footer">
    <!--footer devided into 4 sections-->
    <div id="section1">
        <h1>Memory Master</h1>
        <p>This game is developed by Sohail, and the purpose of the game is mainly testing the extent to which user
            can
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
    <div id="section3">
        <div id="followOn">Follow On
            <div id="facebook-icon">
                <a href="https://www.facebook.com/"><img src="Images/facebook.png" alt=""></a>
            </div>
            <div id="twitter-icon">
                <a href="https://twitter.com/">
                    <img src="Images/twitter.png" alt="">
                </a>
            </div>
            <div id="instagram-icon">
                <a href="https://www.instagram.com/">
                    <img src="Images/instagram.jpg" alt="">
                </a>
            </div>
            <div id="github-icon">
                <a href="https://github.com/SohailMG">
                    <img src="Images/Github.png" alt="">
                </a>
            </div>
        </div>
    </div>
    <div id="section4">
        <h1>Stay Updated</h1>
        <input type="text" name="Email" placeholder="Enter Email ">
        <button id="subbtn">Subscribe</button>
    </div>
    
</footer>
<script type="text/javascript" src="src/Typewriter.js"></script>
<script type="text/javascript" src="src/Contact.js"></script>
<script type="text/javascript" src="src/formValidation.js"></script>
<script type="text/javascript" src="src/leaderboard.js"></script>
</body>
</html>';
}