class hard extends Phaser.Scene {
    constructor() {
        super("playHard");
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
        playbtn.on("pointerdown", function play() {
            visualTimer();
            let numInpt = document.getElementById("numInput");
            let num = document.getElementById("num").innerHTML;
            document.getElementById("num").style.marginLeft = "38%";

            // creating max and min values in local storage

            let loses = localStorage.getItem("loses");
            // converting ranges from strange to usable js object
            let oldLoses = JSON.parse(loses);

            let level = JSON.parse(localStorage.getItem("level"));

            function RandomWord() {
                let threeletters = [
                    "Cep",
                    "Fig",
                    "Hip",
                    "Pea",
                    "Yam",
                    "Nut",
                    "Haw",
                ];
                let fourletters = [
                    "Corn",
                    "Lime",
                    "Mast",
                    "Mung	",
                    "Ogen",
                    "Okra",
                    "Pear",
                ];
                let sixletters = [
                    "Almond",
                    "Banana",
                    "Blewits",
                    "Carrot",
                    "Celery",
                    "Cherry",
                    "Cooker",
                ];

                let wordLevels = [threeletters, fourletters, sixletters];

                var randomItem =
                    wordLevels[level][
                        Math.floor(Math.random() * wordLevels[level].length)
                    ];

                document.getElementById("num").innerHTML = randomItem;

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

            if (numInpt.value == num && level < 3) {
                numInpt.value = "";

                localStorage.setItem("level", level + 1);

                // updating max and min values each time
                // adding to level and score values

                RandomWord();

                // showing the end results when game is over
            } else {
                localStorage.setItem("loses", oldLoses + 1);
                localStorage.setItem("level", 0);
                let currentLoses = localStorage.getItem("loses");

                if (currentLoses == "1") {
                    // displaying game over screen
                    document.getElementById("GameOver").style.display = "block";

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