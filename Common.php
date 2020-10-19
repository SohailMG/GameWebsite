<?php

//Ouputs the html doctype template
function outputhtmlTemp($title){
    echo '<!DOCTYPE html>';
    echo '<html>';
    echo '<head>';
    echo '<title>' . $title . '</title>';
    echo '<link rel="stylesheet" href="style.css">';
    echo '<script src="web.js"></script>';
    echo '</head>';
    echo '<body>';
}

/* created fucntion to output the navigation bar and the header */
function outputBannerNavigation($pageName){
    //Output banner and first part of navigation
    echo '<header></header>';
    echo '<nav>';
    echo '<div class="navbar">';
    
    //Array of pages to link to
    $pageNames = array("Home", "Game", "How to play", "Leaderboard", "Contact");
    $pageLinks = array("index.php", "Game.php", "HowToPlay.php", "Leaderboard.php", "Contact.php");
    
    /* nav bar foor loop
    * a loop to create <a tags in accordance
    * to the lenght of pagenames array. 
    */
    for($i = 0; $i < count($pageNames); $i++){
        echo '<a ' . 'href="' . $pageLinks[$i] . '">' . $pageNames[$i] . '</a>';
        
    }
    echo '</div>';
    echo '</nav>';
}

//Outputs closing body tag and closing HTML tag
function outputFooter(){
    echo '</body>';
    echo '</html>';
}

