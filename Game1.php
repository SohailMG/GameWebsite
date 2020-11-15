<?php
    include_once('CommonPhp/GameCommon.php');
    OutputHtmlHead();
    OutputNav()
?>
<div id="wrapper">
    <script src="//cdn.jsdelivr.net/npm/phaser@3.24.1/dist/phaser.js"></script>
    <script src="scripts/Scene1.js"></script>
    <script src="scripts/Scene2.js"></script>
    <script src="scripts/easy.js"></script>
    <script src="scripts/hard.js"></script>
    <script src="scripts/gameConfig.js"></script>


    <button id="Clear"></button>
    <button id="tick"></button>

    <h1 id="num"></h1>
    <input id="numInput" type=" text " placeholder="Enter here" />
    <div id="BarContainer">
        <div id="myProgress">
            <div id="myBar"></div>
        </div>

    </div>
    <div id="GameOver">
        <div id="Overtxt" style="color: red; font-size: 40px;text-shadow: 0 10px 10px black;"><b>Game Over</b></div>
        <div id="levelend" style="color: brown; font-size: 30px;text-shadow: 0 10px 10px black;">Level Reached:
        </div>
        <div id="scoreend" style="color: brown; font-size: 30px;text-shadow: 0 10px 10px black;">Highest Score:
        </div>
        <button id="retry">Try Again</button>
    </div>
</div>
<?php
Outputfooter()
?>