export default class easy extends Phaser.Scene {
    constructor() {
        super("playEasy");
    }
    preload() {
        this.load.image("BG", "../assets/Gamebg.jpg");
        this.load.image("field", "../assets/hudd.png");
        this.load.image("clear", "../assets/delete.png");
        this.load.image("playbtn", "../assets/play.png");
        this.load.image("home", "../assets/homeicon.png");
        this.load.image("tick", "../assets/tick.png");
    }

    create() {
        this.add.image(400, 300, "BG");
        this.add.image(400, 300, "field");

        // variables used for visual timer
        let numIn = document.getElementById("num");
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
            this.scene.switch("playGame"),
                (document.getElementById("numInput").style.display = "none");
        });
        // button to clear the input field of any values
        Clearbtn = this.add.image(400, 400, "clear");
        Clearbtn.setInteractive({ useHandCursor: true });
        Clearbtn.on("pointerdown", () => {
            let inputField = document.getElementById("numInput");
            inputField.value = "";
        });

        // main game function generates all game logic and functions
        playbtn = this.add.image(500, 200, "playbtn");
        playbtn.setInteractive({ useHandCursor: true });
        playbtn.on("pointerdown", function playgame() {
            visualTimer();
            let numInpt = document.getElementById("numInput");
            let num = document.getElementById("num").innerHTML;

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

            let user = localStorage.getItem("loggedusr");
            let ranking = { User: user, Score: score, Level: levels };


            // generating random numbers between given range
            function RandomNum(min, max) {
                var number = Math.floor(Math.random() * max + 1) + min;
                document.getElementById("num").innerHTML = number;

                // retry function called to restart game from begining
                retrybtn = document.getElementById("retry");
                retrybtn.onclick = () => {
                    document.getElementById("GameOver").style.display = "none";
                    // this.scene.restart();
                    document.getElementById("numInput");
                    document.getElementById("num").innerHTML = "";
                    document.getElementById("levelend").innerHTML = "";
                    document.getElementById("scoreend").innerHTML = "";
                    // document.getElementById("Number").innerHTML = "";
                };
            }
            // checking if input field is empty

            if (numInpt.value == num) {
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
                localStorage.setItem("Ranking", JSON.stringify(ranking));
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