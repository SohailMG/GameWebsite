/* website window resolution is 1422.22 x 520 */
/**
 * typewriter function used in how to play page
 * displying instructions on how the game is played
 */
var rules =
     "Welcome to memory master.You will be presented with a two digit number and you will have three seconds to memerise the number. If you guess the number correctly you will move to the next level.number becomes bigger each level. The highest number you guess the bigger the score. Have Fun :)";
var i = 0;
var speed = 50;

/** adding a sleep function */
function sleep(ms) {
     return new Promise((resolve) => setTimeout(resolve, ms));
}

// conts used in how to play page
const instructions = document.getElementById("instructions");
const clickmeBtn = document.getElementById("clickmebtn");
const rightTxt = document.getElementById("rightTxt");
const gotoGame = document.getElementById("gotoGame");

/**
second condition checks if there is full stop '.' then
function sleeps for 1000ms then continues. color of text also changes each full stop
*/

async function typeWriter() {
     if (i < rules.length) {
          instructions.style.color = "aqua";
          clickmeBtn.style.display = "none";
          rightTxt.style.display = "none";
          gotoGame.style.display = "block";
          instructions.innerHTML += rules.charAt(i);

          if (rules.charAt(i) == ".") {
               await sleep(1000);
          }
          i++;
          instructions.style.color = "";
          setTimeout(typeWriter, speed);
     }
}
