/* 
                !Words gameplay
    * an array containig array of words
    * Random words are generating 
    * Each time guess is correct, word lengh increases
    * levels are stored in an array 
    
*/
export default class Words extends Phaser.Scene {
    constructor() {
        super("playWords");
    }
    preload() {
        // loading images
        this.load.image("BG", "../assets/Gamebg.jpg");
        this.load.image("field", "../assets/hudd.png");
        this.load.image("clear", "../assets/delete.png");
        this.load.image("playbtn", "../assets/play.png");
        this.load.image("home", "../assets/homeicon.png");
        this.load.image("tick", "../assets/tick.png");

        // loading sounds
        this.load.audio("ticking", "../assets/Sounds/Ticking.mp3");
        this.load.audio("winner", "../assets/Sounds/Winner.mp3");
        this.load.audio("loser", "../assets/Sounds/Loser.mp3");
        this.load.audio("click", "../assets/Sounds/Click.mp3");
    }

    create() {
        // declaring sound variables
        let ticking = this.sound.add("ticking");
        let winner = this.sound.add("winner");
        let loser = this.sound.add("loser");
        let click = this.sound.add("click");
        loser.setVolume(0.2);
        winner.setVolume(0.2);

        this.add.image(400, 300, "BG");
        this.add.image(400, 300, "field");

        // variables used for visual timer
        let numIn = document.getElementById("randomElem");
        let elem = document.getElementById("myBar");
        let numInpt = document.getElementById("numInput");
        let progress = document.getElementById("BarContainer");

        // setting base min and max values everytime game starts

        // variable will hold currently generated random number

        // generate random range of nums

        // play button game logic #######-----------------
        var playWords;
        var Clearbtn;
        var Homebtn;
        var Infotxt;
        var Infotxt2;
        var retrybtn;
        // var startbtn;

        // game information texts
        Infotxt = this.add.text(250, 50, "When ready press button", {
            font: "25px Comic Sans MS",
            color: "#fff",
        });
        Infotxt2 = this.add.text(230, 20, "Memerise the longest number", {
            font: "25px Comic Sans MS",
            color: "#fff",
        });

        // button to return back to menue scene
        Homebtn = this.add.image(300, 200, "home");
        Homebtn.setInteractive({ useHandCursor: true });
        Homebtn.on("pointerdown", () => {
            
            this.scene.switch("Menu"), click.play();
            document.getElementById("numInput").style.display = "none";
            document.getElementById("progressContainer").style.display = "none";
        });
        // button to clear the input field of any values
        Clearbtn = this.add.image(400, 400, "clear");
        Clearbtn.setInteractive({ useHandCursor: true });
        Clearbtn.on("pointerdown", () => {
            click.play();
            let inputField = document.getElementById("numInput");
            inputField.value = "";
        });

        // main game function generates all game logic and functions
        playWords = this.add.image(500, 200, "playbtn");
        playWords.setInteractive({ useHandCursor: true });
        playWords.on("pointerdown", function play() {
            // this.music.play(musicConfig.mute="true")
            click.play();
            vTimer();
            ticking.play();

            let lv1 = document.getElementById("level1");
            let lv2 = document.getElementById("level2");
            let lv3 = document.getElementById("level3");
            let lv4 = document.getElementById("level4");
            let lv5 = document.getElementById("level5");
            let lv6 = document.getElementById("level6");
            let lv7 = document.getElementById("level7");

            let current_level = JSON.parse(localStorage.getItem("level"));

            var lvls = [lv1, lv2, lv3, lv4, lv5, lv6, lv7];

            function levelProgress() {
                // declaring variables for level icons

                // setting color for current level
                lvls[current_level].style.backgroundColor = "seagreen";
            }

            let numInpt = document.getElementById("numInput");
            let randomElem = document.getElementById("randomElem").innerHTML;
            document.getElementById("randomElem").style.marginLeft = "38%";

            // creating max and min values in local storage

            // converting ranges from strange to usable js object

            let level = JSON.parse(localStorage.getItem("level"));

            let wordLevels = [
                ["Cep", "Yam", "Nut", "Haw"], // level 1
                ["Corn", "Lime", "Okra", "Pear"], // level 2
                ["Almond", "Banana", "Blewits", "Cooker"], // level 3
                ["academy", "Penguin", "History", "Jupiter"], // level 4
                ["Abdicate", "Squirrel", "Ordinary", "Innocent"], // level 5
                ["Xylophone ", "Integrity", "Charlotte", "Curiosity"], // level 6
                ["Antarctica", "Diabolical", "Absolution", "Illuminati"], // level 7
            ];

            function resetLevelVisual(){
                for (let i = 0; i < lvls.length; i++) {
                    lvls[i].style.backgroundColor = " rgba(128, 128, 128, 0.432)";
                }
            }

            function RandomWord() {
                var randomItem =
                    wordLevels[level][
                        Math.floor(Math.random() * wordLevels[level].length)
                    ];
                console.log(randomItem);

                document.getElementById("randomElem").innerHTML = randomItem;

                // retry function called to restart game from begining when user loses
                retrybtn = document.getElementById("retry");
                retrybtn.onclick = () => {
                    resetLevelVisual()


                    // reseting level progress icons back to original state
                    
                    document.getElementById("GameOver").style.display = "none";
                    document.getElementById("GameWon").style.display = "none";
                    // this.scene.restart();
                    document.getElementById("numInput");
                    document.getElementById("randomElem").innerHTML = "";
                    document.getElementById("levelend").innerHTML = "";
                    document.getElementById("scoreend").innerHTML = "";
                    // document.getElementById("Number").innerHTML = "";
                };

                // retry function called to restart game from begining when user wins
                var retrybtn2;
                retrybtn2 = document.getElementById("retry2");
                retrybtn2.onclick = () => {
                    resetLevelVisual()
                    document.getElementById("GameWon").style.display = "none";
                    // this.scene.restart();
                    document.getElementById("numInput").style.display = "block";
                    document.getElementById("randomElem").innerHTML = "";
                    document.getElementById("levelend2").innerHTML = "";
                    document.getElementById("scoreend2").innerHTML = "";
                    progress.style.display = "none";
                    numIn.style.display = "none";
                    numInpt.style.display = "none";
                    numInpt.value = "";
                };
            }

            // checking if input field is empty
            let maxScore = 10;
            let maxLevel = wordLevels.length;
            let winScreen = document.getElementById("GameWon");
            var userScore = randomElem.length;
            localStorage.setItem("isOver", false);

            if (numInpt.value == randomElem) {
                numInpt.value = "";

                localStorage.setItem("level", level + 1);

                // updating max and min values each time
                // adding to level and score values
                console.log(level);

                if (level == 7) {
                    // displying winner screen
                    winScreen.style.display = "block";
                    // playing sounds
                    winner.play();
                    ticking.stop();

                    // resseting level
                    localStorage.setItem("level", 0);

                    document.getElementById("levelend2").innerHTML =
                        "Reached Final Level " + level;
                    document.getElementById("scoreend2").innerHTML =
                        "Score " + maxScore;
                    return;
                }
                RandomWord();
                levelProgress();

                // showing the end results when game is over
            } else {
                localStorage.setItem("isOver", true);
                let isOver = localStorage.getItem('isOver');
                // localStorage.setItem("loses", oldLoses + 1);
                
                // let currentLoses = localStorage.getItem("loses");
                
                if (isOver) {
                    console.log(isOver)
                    // displaying game over screen
                    loser.play();
                    ticking.stop();
                    document.getElementById("GameOver").style.display = "block";
                    document.getElementById("levelend").innerHTML =
                    "Reached Level " + level;
                    document.getElementById("scoreend").innerHTML =
                    "Score " + userScore;
                    
                    localStorage.setItem("loses", 0);
                    localStorage.setItem("level", 0);

                    // hiding html elements
                    progress.style.display = "none";
                    numIn.style.display = "none";
                    numInpt.style.display = "none";
                    numInpt.value = "";
                    return;
                }

                // removing text from input field and resetting score and level texts
                numInpt.value = "";
            }

            progress.style.display = "block";
            numIn.style.display = "block";
            numInpt.style.display = "none";
        });

        // progress bar used as a visual timer

        function vTimer() {
            let i = 0;

            {
                if (i == 0) {
                    i = 1;

                    let width = 1;
                    let Speed = setInterval(frame, 15);

                    progress.style.display = "block";

                    function frame() {
                        if (width >= 100) {
                            progress.style.display = "none";
                            numIn.style.display = "none";
                            numInpt.style.display = "block";

                            clearInterval(Speed);
                            ticking.stop();
                            i = 0;
                        } else {
                            width++;
                            elem.style.width = width + "%";
                        }
                    }
                }
            }
        }
    }
}
