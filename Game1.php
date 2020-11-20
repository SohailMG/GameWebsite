<?php
    include_once('CommonPhp/GameCommon.php');
    OutputHtmlHead();
    OutputNav()
?>
<script type="module" src=" //cdn.jsdelivr.net/npm/phaser@3.24.1/dist/phaser.js"></script>
<script type="module" src="scripts/bootGame.js"></script>
<script type="module" src="scripts/Menu.js"></script>
<script type="module" src="scripts/Numbers.js"></script>
<script type="module" src="scripts/Words.js"></script>
<script type="module" src="scripts/gameConfig.js"></script>


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
<div id="GameWon">
    <div id="Overtxt2" style="color: green; font-size: 40px;text-shadow: 0 10px 10px black;"><b>You Win</b></div>
    <div id="levelend2" style="color: brown; font-size: 30px;text-shadow: 0 10px 10px black;">Level Reached:
    </div>
    <div id="scoreend2" style="color: brown; font-size: 30px;text-shadow: 0 10px 10px black;">Highest Score:
    </div>
    <button id="retry2">Try Again</button>
</div>
<?php
Outputfooter()
?>