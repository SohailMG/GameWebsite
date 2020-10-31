
// this function used when play game button is pressed
// the screen changes to the main screen 
function startGame(){
  document.getElementById("startScreen").style.display="none";
  document.getElementById("mainScreen").style.display="block";
}


function myfunction() {
  document.location.href = "index.php";
  document.getElementById("signN").style.visibility="hidden"; 
}

/*
 * typewriter function used in how to play page
 * displying instructions on how the game is played
 */
var rules =
  "Welcome to memory master.You will be presented with a two digit number and you will have three seconds to memerise the number. If you guess the number correctly you will move to the next level.number becomes bigger each level. The highest number you guess the bigger the score. Have Fun :)";
var i = 0;
var speed = 50;

/* adding a sleep function */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/* second condition checks if there is full stop '.' then
function sleeps for 1000ms then continues. color of text also changes each full stop
*/
async function typeWriter() {
  if (i < rules.length) {
    document.getElementById("instructions").style.color = "aqua";
    document.getElementById("clickmebtn").style.display = "none";
    document.getElementById("rightTxt").style.display = "none";
    document.getElementById("gotoGame").style.display = "block";
    document.getElementById("instructions").innerHTML += rules.charAt(i);
    if (rules.charAt(i) == ".") {
      await sleep(1000);
    }
    i++;
    document.getElementById("instructions").style.color = "";
    setTimeout(typeWriter, speed);
  }
}