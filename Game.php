<?php
    include_once('CommonPhp/MainTags.php');
    include_once('CommonPhp/HeaderNavigation.php');
    outputHtml("Game Page");
    outputHeaderNav("Game")
?>

<div class="gameCanvas">
    <div id="startScreen">
        <div class="gameTitle">Memory Master</div>
        <p>Click Start to start the game</p>
        <button id="startGame-button" onclick=" startGame()">Play</button>
    </div>
    <div id="selectionScreen">
        <div class="gameTitle">Memory Master</div>
        <h1>Choose Difficulty</h1>
        <p><b>Easy:</b> Timer is slower and starts with two digit number<br><b>Hard:</b> Timer is faster and starts with
            four
            digit number.

        </p>
        <button id="Easy">Easy</button>
        <button id="Hard">Hard</button>
    </div>
</div>

<?php
    include_once('CommonPhp/footer.php');
    outputfooter();
?>