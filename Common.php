<?php
function outputNavbar($pagename){
    
    echo '<div class="navbar">';
    
    $pagenames = array("Home", "Game", "Signin", "Signup");
    $pageAddresses = array("index.php", "Game.php", "Sign-in.php", "Sign-up.php");

    for($i = 0; $i < count($pagenames); $i++){

        echo '<a' . 'href="' . $pageAddresses[$i] . '">' . $pagenames[$i] . '</a>';
    }
    echo '</div>';
    
            
}
?>
