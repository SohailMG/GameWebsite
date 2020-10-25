/*
 * typewriter function used in how to play page
 * displying instructions on how the game is played
 */
var rules =
  "Welcome to memory master. When you start the game you will be presented with a two digit number and you will have three seconds to memerise the number. if you guess the number correctly you will move to the next level and the number will become bigger and bigger each level. the main goal of the game is to test how many numbers can you remember in a short amount of time and";
var i = 0;
var speed = 50;

/* adding a sleep function */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/* second condition checks if there is full stop '.' then
function sleeps for 1000ms then continues
*/
async function typeWriter() {
  if (i < rules.length) {
    document.getElementById("demo").innerHTML += rules.charAt(i);
    if (rules.charAt(i) == ".") {
      await sleep(1000);
    }
    i++;
    setTimeout(typeWriter, speed);
  }
}
