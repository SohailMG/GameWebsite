<?php
    include_once('CommonPhp/HeaderNav.php');
    outputHtml("Game Page");
    outputBannerNavigation("Game")
?>

<div class="gameCanvas">
    <div id="startScreen">
        <div class="gameTitle">Memory Master</div>
        <p>Click Start to start the game</p>
        <button id="startGame-button" onclick=" startGame()">Play</button>
    </div>
    <div id="mainScreen">
        <div class="gameTitle">Memory Master</div>
    </div>
</div>

<?php
    include_once('CommonPhp/footer.php');
    outputfooter();
?>