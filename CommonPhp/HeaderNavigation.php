<?php

/* created fucntion to output the navigation bar and the header */
function outputHeaderNav($pageName){
    echo '<section>
    <header>
    <div class="Title"> 
    <div class="Memory"><a href="index.php">Memory</a></div>
    <div class="Master">Master</div>
    </div>
    <div id="gamelogo"></div>
    </header>
    <nav>
    <div class="navbar">';
    
    //array of page names and page links to point to 
    $pageNames = array("Home", "Game" ,"HowToPlay", "Leaderboard", "Contact");
    $pageLinks = array("index.php","Game.php", "HowToPlay.php", "Leaderboard.php", "Contact.php");
    
    /* 
    nav bar foor loop
    a loop to create <a tags in accordance
    to the lenght of pagenames array. 
    */
    for($i = 0; $i < count($pageNames); $i++){
        echo '<a ' ;
        if($pageNames[$i] == $pageName){
            echo 'class="selected" ';
        }
        echo 'href="' . $pageLinks[$i] . '">' . $pageNames[$i] . '</a>';
        
    // outputting sign in and sign up button with signout button hidden  
    }  
    echo '</div>';
    echo '<div id="signbtns">
            <p id="loggedIn"></p>
            <a id="signN" href="Sign-in.php"><b>Sign-in</b></a>
            <a id="signP" href=" Sign-up.php"><b>Sign-up</b></a>
            <a id="signO" href=" index.php" style="display:none" onclick="logOut()"><b>Sign-out</b></a>
        </div>';
    echo '</nav>';
}