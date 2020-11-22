/* 
                !Numbers gameplay
    * Generating random numbers in a given range
    * Range increases if guess is correct
    * Progress Bar used as visual timer
*/

export default class Numbers extends Phaser.Scene {
    constructor() {
        super("PlayNumbers");
    }
    preload() {
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

        this.add.image(400, 300, "BG");
        this.add.image(400, 300, "field");

        let ticking = this.sound.add("ticking");
        let winner = this.sound.add("winner");
        let loser = this.sound.add("loser");
        let click = this.sound.add("click");
        loser.setVolume(0.2);
        winner.setVolume(0.2);

        // variables used for visual timer
        let numIn = document.getElementById("randomElem");
        let elem = document.getElementById("myBar");
        let numInpt = document.getElementById("numInput");
        let progress = document.getElementById("BarContainer");

        // setting base min and max values everytime game starts
        var Ranges = { min: 10, max: 90, level: 1, scores: 2 };
        let str_Ranges = JSON.stringify(Ranges);
        localStorage.setItem("Range", str_Ranges);

        // variable will hold currently generated random number

        // generate random range of nums

        // play button game logic #######-----------------
        var playbtn;
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
            click.play();
            this.scene.switch("Menu"),
                (document.getElementById("numInput").style.display = "none");
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
        playbtn = this.add.image(500, 200, "playbtn");
        playbtn.setInteractive({ useHandCursor: true });
        playbtn.on("pointerdown", function playgame() {

            visualTimer();
            click.play();
            ticking.play();

            


            let numInpt = document.getElementById("numInput");
            let randomElem = document.getElementById("randomElem").innerHTML;

            // creating max and min values in local storage

            let oldRanges = localStorage.getItem("Range");
            let loses = localStorage.getItem("loses");
            // converting ranges from strange to usable js object
            let existingRanges = JSON.parse(oldRanges);
            let oldLoses = JSON.parse(loses);

            // retrieving base values for min and max
            // storing current level and score
            let maxVal = existingRanges.max;
            let minVal = existingRanges.min;
            let levels = existingRanges.level;
            let score = existingRanges.scores;

            // level progress visuals 
        let lv1 = document.getElementById("level1");
        let lv2 = document.getElementById("level2");
        let lv3 = document.getElementById("level3");
        let lv4 = document.getElementById("level4");
        let lv5 = document.getElementById("level5");
        let lv6 = document.getElementById("level6");
        let lv7 = document.getElementById("level7");

        let current_level = levels;

        var lvls = [lv1, lv2, lv3, lv4, lv5, lv6, lv7];

        function levelProgress() {
            // declaring variables for level icons

            // setting color for current level
            lvls[current_level - 1].style.backgroundColor = "seagreen";
        }



            // generating random numbers between given range
            function RandomNum(min, max) {
                var number = Math.floor(Math.random() * max + 1) + min;
                document.getElementById("randomElem").innerHTML = number;

                // retry function called to restart game from begining
                retrybtn = document.getElementById("retry");
                retrybtn.onclick = () => {
                    for (let i = 0; i < lvls.length; i++) {
                        lvls[i].style.backgroundColor = " rgba(128, 128, 128, 0.432)";
                        lvls[i].style.boxShadow = " none";
                    }
                    document.getElementById("GameOver").style.display = "none";
                    // this.scene.restart();
                    document.getElementById("numInput");
                    document.getElementById("randomElem").innerHTML = "";
                    document.getElementById("levelend").innerHTML = "";
                    document.getElementById("scoreend").innerHTML = "";
                    // document.getElementById("Number").innerHTML = "";
                };
            }
            // checking if input field is empty

            if (numInpt.value == randomElem) {
                numInpt.value = "";

                // updating max and min values each time
                // adding to level and score values
                let newRanges = {
                    min: minVal * 10,
                    max: maxVal * 10,
                    level: levels + 1,
                    scores: score + 1,
                };

                let str_newRanges = JSON.stringify(newRanges);
                localStorage.setItem("Range", str_newRanges);

                RandomNum(minVal, maxVal);
                levelProgress()

                // storeData used to update scores for currently logged user
                storeData();
                function storeData() {
                    let GameData = JSON.parse(localStorage.getItem("GameData"));
                    let Loggeduser = localStorage.getItem("loggedusr");

                    for (let i = 0; i < GameData.length; i++) {
                        if (Loggeduser == GameData[i].Username) {
                            GameData[i].Scores = score;
                            GameData[i].Levels = levels;
                            break;
                        }
                    }
                    localStorage.setItem("GameData", JSON.stringify(GameData));
                }

                // showing the end results when game is over
                localStorage.setItem("score", score);
                document.getElementById("levelend").innerHTML =
                    "Level Reached: " + levels;
                document.getElementById("scoreend").innerHTML =
                    "Highest Score:  " + score + " Numbers";
            } else {
                localStorage.setItem("loses", oldLoses + 1);
                let currentLoses = localStorage.getItem("loses");

                if (currentLoses == "1") {
                    loser.play();
                    // displaying game over screen
                    document.getElementById("GameOver").style.display = "block";
                    // resetting values back to original state
                    localStorage.removeItem("Range");
                    localStorage.setItem("Range", str_Ranges);
                    localStorage.setItem("loses", 0);

                    // hiding html elements
                    progress.style.display = "none";
                    numIn.style.display = "none";
                    numInpt.style.display = "none";
                    numInpt.value = "";
                    return;
                }

                // removing text from input field and resetting score and level texts
                numInpt.value = "";

                // restarting from begining
                localStorage.removeItem("Range");
                localStorage.setItem("Range", str_Ranges);
                RandomNum(minVal, maxVal);
            }

            progress.style.display = "block";
            numIn.style.display = "block";
            numInpt.style.display = "none";
        });

        // level progress visuals

        // progress bar used as a visual timer
        
        

        function visualTimer() {
            var i = 0;

            {
                if (i == 0) {
                    i = 1;

                    let width = 1;
                    let Speed = setInterval(frame, 25);

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

