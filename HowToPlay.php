<?php
    include_once('CommonPhp/HeaderNav.php');
    outputHtml("HowToPlay");
    outputBannerNavigation("HowToPlay")

?>
<!-- grid containing two items  -->
<!-- grid item 1 containes typewriter and button  -->
<div class="grid-container">
    <div class="grid-item grid-item-1">
        <button id="clickmebtn" onclick=" typeWriter()">Click Me</button>
        <p id="instructions"></p>
    </div>
    <!-- grid item 2 containes  text and button to go to game page -->
    <div class="grid-item grid-item-2">
        <p id="rightTxt">To view instructions on how the game is played click the button to the left</p>
        <a id="gotoGame" href="webPages/Game.php">
            <h1>Goto Game</h1>
        </a>
    </div>
</div>



<?php
    include_once('CommonPhp/footer.php');
    outputfooter();
?>