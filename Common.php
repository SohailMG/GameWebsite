<?php

//Ouputs the html doctype template
function outputhtmlTemp($title){
    echo '<!DOCTYPE html>';
    echo '<html>';
    echo '<head>';
    echo '<title>' . $title . '</title>';
    echo '<link rel="stylesheet" type="text/css" href="style.css">';
    echo '</head>';
    echo '<body>';
}

/* Ouputs the banner and the navigation bar
    The selected class is applied to the page that matches the page name variable */
function outputBannerNavigation($pageName){
    //Output banner and first part of navigation
    echo '<header></header>';
    echo '<div class="navbar">';
    
    //Array of pages to link to
    $linkNames = array("Home", "Game", "How to play", "Leaderboard", "Contact");
    $linkAddresses = array("index.php", "Game.php", "HowToPlay.php", "Leaderboard.php", "Contact.php");
    
    //Output navigation
    for($x = 0; $x < count($linkNames); $x++){
        echo '<a ' . 'href="' . $linkAddresses[$x] . '">' . $linkNames[$x] . '</a>';
        
    }
    echo '</div>';
}

//Outputs closing body tag and closing HTML tag
function outputFooter(){
    echo '</body>';
    echo '</html>';
}

