<?php

/* created fucntion to output the navigation bar and the header */
function outputHeaderNav($pageName){
    //Output banner and first part of navigation
    echo '<section>
    <header>
    <div id="gamelogo"></div>
    </header>
    <nav>
    <div class="navbar">';
    
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
    echo '<div id="signbtns">
            <p id="loggedIn"><b></b></p>
            <a id="signN" href="Sign-in.php"><b>Sign-in</b></a>
            <a id="signP" href=" Sign-up.php"><b>Sign-up</b></a>
        </div>';
    echo '</nav>';
}
?>