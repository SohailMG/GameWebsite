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
          // loading scene images
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

          // adding sound files to scene
          let ticking = this.sound.add("ticking");
          let winner = this.sound.add("winner");
          let loser = this.sound.add("loser");
          let click = this.sound.add("click");
          loser.setVolume(0.2);
          winner.setVolume(0.2);

          // variables used for visual timer
          let randomNum = document.getElementById("randomElem");
          let userInput = document.getElementById("userInput");
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
                    (document.getElementById("userInput").style.display =
                         "none");
               document.getElementById("progressContainer").style.display =
                    "none";
          });
          // button to clear the input field of any values
          Clearbtn = this.add.image(400, 400, "clear");
          Clearbtn.setInteractive({ useHandCursor: true });
          Clearbtn.on("pointerdown", () => {
               click.play();
               let inputField = document.getElementById("userInput");
               inputField.value = "";
          });

          // main game function generates all game logic and functions
          playbtn = this.add.image(500, 200, "playbtn");
          playbtn.setInteractive({ useHandCursor: true });
          playbtn.on("pointerdown", function playgame() {
               visualTimer();
               click.play();
               ticking.play();

               let userInput = document.getElementById("userInput");
               let randomElem = document.getElementById("randomElem").innerHTML;

               // creating max and min values in local storage

               let oldRanges = localStorage.getItem("Range");
               // converting ranges from strange to usable js object
               let existingRanges = JSON.parse(oldRanges);

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
                         ticking.stop();
                         //   countDown();

                         for (let i = 0; i < lvls.length; i++) {
                              lvls[i].style.backgroundColor =
                                   " rgba(128, 128, 128, 0.432)";
                              lvls[i].style.boxShadow = " none";
                         }
                         document.getElementById("GameOver").style.display =
                              "none";
                         // this.scene.restart();
                         document.getElementById("userInput");
                         document.getElementById("randomElem").innerHTML = "";
                         document.getElementById("levelend").innerHTML = "";
                         document.getElementById("scoreend").innerHTML = "";
                         // document.getElementById("Number").innerHTML = "";
                    };
               }

               localStorage.setItem("isOver", false);
               // checking if input field is empty

               if (userInput.value == randomElem) {
                    userInput.value = "";

                    // updating max and min values each time
                    // adding to level and score values
                    let newRanges = {
                         min: minVal * 10,
                         max: maxVal * 10,
                         level: levels + 1,
                         scores: score + 1,
                    };

                    // storing new ranges back into localstorage
                    let str_newRanges = JSON.stringify(newRanges);
                    localStorage.setItem("Range", str_newRanges);

                    RandomNum(minVal, maxVal);
                    levelProgress();

                    // storeData used to update scores for currently logged user
                    storeData();
                    function storeData() {
                         let GameData = JSON.parse(
                              localStorage.getItem("GameData")
                         );
                         let Loggeduser = localStorage.getItem("loggedusr");

                         for (let i = 0; i < GameData.length; i++) {
                              if (Loggeduser == GameData[i].Username) {
                                   if (GameData[i].Scores < score) {
                                        GameData[i].Scores = score;
                                        GameData[i].Levels = levels;
                                        break;
                                   }
                              }
                         }
                         localStorage.setItem(
                              "GameData",
                              JSON.stringify(GameData)
                         );
                    }

                    // showing the end results when game is over
                    localStorage.setItem("score", score);
                    document.getElementById("levelend").innerHTML =
                         "Level Reached: " + levels;
                    document.getElementById("scoreend").innerHTML =
                         "Highest Score:  " + score + " Numbers";
               } else {
                    // setting value of isOver to true
                    localStorage.setItem("isOver", true);
                    let isOver = localStorage.getItem("isOver");

                    // checking if isOver is true
                    if (isOver) {
                         // playing gameover sound effect
                         gameOver();
                         return;
                    }
                    // removing text from input field
                    userInput.value = "";

                    // restarting from begining
                    localStorage.removeItem("Range");
                    localStorage.setItem("Range", str_Ranges);

                    // calling RandomNum function with current values of min and max
                    RandomNum(minVal, maxVal);
               }

               // showing progress bar and current random elm
               progress.style.display = "block";
               randomNum.style.display = "block";
               userInput.style.display = "none";
          });

          // progress bar used as a visual timer
          let bar = document.getElementById("myBar");

          function visualTimer() {
               let isFilled = true;

               if (isFilled == true) {
                    isFilled = false;

                    // setting init width of progress bar to 1
                    let width = 1;
                    let Speed = setInterval(frame, 15);

                    progress.style.display = "block";

                    /*
                    frame is used to determin if width of progress reached
                    end then will clear the interval 
                    else width is increamented 
                    */

                    function frame() {
                         if (width >= 100) {
                              progress.style.display = "none";
                              randomNum.style.display = "none";
                              userInput.style.display = "block";
                              clearInterval(Speed);
                              ticking.stop();
                              isFilled = true;
                         } else {
                              width++;
                              bar.style.width = width + "%";
                         }
                    }
               }
          }

          //  gameOver function
          function gameOver() {
               loser.play();
               ticking.stop();
               // displaying game over screen
               document.getElementById("GameOver").style.display = "block";
               // resetting values back to original state
               localStorage.removeItem("Range");
               localStorage.setItem("Range", str_Ranges);

               // hiding html elements
               progress.style.display = "none";
               randomNum.style.display = "none";
               userInput.style.display = "none";
               userInput.value = "";
               return;
          }
     }
}
