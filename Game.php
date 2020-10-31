<?php
    include_once('CommonPhp/HeaderNav.php');
    outputHtml("Game Page");
    outputBannerNavigation("Game")
?>

<div class="gameCanvas">
    <div class="startScreen">
        <div class="gameTitle">Memory Master</div>
        <p>Click Start to start the game</p>
        <button id="startGame-button" onclick=" startGame()">Play</button>
    </div>
</div>

<?php
    include_once('CommonPhp/footer.php');
    outputfooter();
?>