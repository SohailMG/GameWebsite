<?php

//Ouputs the html doctype template
function outputHtml($title){
    echo '<!DOCTYPE html>';
    echo '<html>';
    echo '<head>';
    echo '<title>' . $title . '</title>';
    echo '<link rel="stylesheet" href="style.css">';
    echo '</head>';
    echo '<body>';
}

/* created fucntion to output the navigation bar and the header */
function outputBannerNavigation($pageName){
    //Output banner and first part of navigation
    echo '<section>';
    echo '<header>
            <div id="gamelogo"></div>
            </header>';
    echo '<nav>';
    echo '<div class="navbar">';
    
    //Array of pages to link to
    $pageNames = array("Home", "Game", "HowToPlay", "Leaderboard", "Contact");
    $pageLinks = array("index.php", "Game.php", "HowToPlay.php", "Leaderboard.php", "Contact.php");
    
    /* nav bar foor loop
    * a loop to create <a tags in accordance
    * to the lenght of pagenames array. 
    */
    for($i = 0; $i < count($pageNames); $i++){
        echo '<a ' ;
        if($pageNames[$i] == $pageName){
            echo 'class="selected" ';
        }
        echo 'href="' . $pageLinks[$i] . '">' . $pageNames[$i] . '</a>';
        
    }  
    echo '</div>';
    echo '<div class="signbtns">
            <p><b>Are you registered?</b></p>
            <a id="signN" href="Sign-in.php"><b>Sign-in</b></a>
            <a id="signP" href=" Sign-up.php"><b>Sign-up</b></a>
        </div>';
    echo '</nav>';
}