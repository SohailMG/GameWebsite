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
    echo '</nav>';
}

//Outputs closing body,html,and section tag
//linking javascript for each file
function outputFooter(){
    echo '</section>';
    echo '<footer><p>This is the footer info</p></footer>';
    echo '<script type="text/javascript" src="script.js"></script>';
    echo '</body>';
    echo '</html>';
}