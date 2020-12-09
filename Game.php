<?php
include_once('CommonPhp/GameCommon.php');
OutputHtmlHead();
OutputNav()
?>
<script type="module" src=" //cdn.jsdelivr.net/npm/phaser@3.24.1/dist/phaser.js"></script>
<script type="module" src="src/bootGame.js"></script>
<script type="module" src="src/Menu.js"></script>
<script type="module" src="src/Numbers.js"></script>
<script type="module" src="src/Words.js"></script>
<script type="module" src="src/gameConfig.js"></script>


<!-- level progress visualiser -->
<div id="progressContainer">
    <div id="levelProg">
        <div id="level1">Level 1</div>
        <div id="level2">Level 2</div>
        <div id="level3">Level 3</div>
        <div id="level4">Level 4</div>
        <div id="level5">Level 5</div>
        <div id="level6">Level 6</div>
        <div id="level7">Level 7</div>
    </div>
</div>

<!-- randomElm displays current random element  -->
<h1 id="randomElem"></h1>
<!-- input field used to let user input their guess -->
<input id="userInput" type=" text " placeholder="Enter here" />

<!-- progress bar used as timer -->
<div id="BarContainer">
    <div id="myProgress">
        <div id="myBar"></div>
    </div>

</div>

<!-- GameOver screen shows when game ends -->
<div id="GameOver">
    <div id="Overtxt" style="color: red; font-size: 40px;text-shadow: 0 10px 10px black;"><b>Game Over</b></div>
    <div id="levelend" style="color: brown; font-size: 30px;text-shadow: 0 10px 10px black;">Level Reached:
    </div>
    <div id="scoreend" style="color: brown; font-size: 30px;text-shadow: 0 10px 10px black;">Highest Score:
    </div>
    <button id="retry">Try Again</button>
</div>

<!-- GameWon shows if user reaches final level -->
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