<?php

//Ouputs the header for the page and opening body tag
function outputHeader($title){
    echo '<!DOCTYPE html>';
    echo '<html>';
    echo '<head>';
    echo '<title>' . $title . '</title>';
    echo '<!-- Link to external style sheet -->';
    echo '<link rel="stylesheet" type="text/css" href="styles.css">';
    echo '</head>';
    echo '<body>';
}

/* Ouputs the banner and the navigation bar
    The selected class is applied to the page that matches the page name variable */
function outputNavigation($pageName){
    //Output banner and first part of navigation
    echo '<div class="navbar">';
    
    //Array of pages to link to
    $linkNames = array("Home", "Game", "HowToPlay" , "SignUp", "SignIn", "Leaderboard", "Contact");
    $linkAddresses = array("index.php", "game.php", "SignUp.php", "SignIn.php", "Contact.php", "Leaderboard.php", "HowTo.php");
    
    //Output navigation
    for($x = 0; $x < count($linkNames); $x++){
        echo '<a ';
        if($linkNames[$x] == $pageName){
            echo 'class="selected" ';
        }
        echo 'href="' . $linkAddresses[$x] . '">' . $linkNames[$x] . '</a>';
    }
    echo '</div>';
}

//Outputs closing body tag and closing HTML tag
function outputFooter(){
    echo '</body>';
    echo '</html>';
}