/* website window resolution is 1422.22 x 520 */
/**  
 * menue class scene used for choosing type of gameplay Numbers or Words 
 * */
export default class Menu extends Phaser.Scene {
     constructor() {
          super("Menu");
     }

     // preloading game assets 
     preload() {
          // loading game assets
          this.load.image("btn", "../assets/PlayBtn.png");
          this.load.image("bg", "../assets/m_bg3.jpg");
          this.load.image("play", "../assets/Playbtns.png");
          this.load.image("title", "../assets/title.png");
          this.load.image("select", "../assets/Selectbtn.jpg");

          // loading sounds
          this.load.audio("music", "../assets/Sounds/Music.mp3");
     }

     // main game logic generated
     create() {
          // configuring background music properties
          this.music = this.sound.add("music");
          var musicConfig = {
               mute: false,
               volume: 0.02,
               rate: 1,
               detune: 0,
               seek: 0,
               loop: true,
               delay: 0,
          };

          var startWords;
          var startNumbers;
          var titletxt;
          // var inputfield;

          document.getElementById("userInput").style.display = "none";

          let levelProgress = document.getElementById("progressContainer");
          let randomElem = document.getElementById("randomElem");

          this.add.image(400, 300, "bg");
          this.add.image(650, 300, "select");
          this.add.image(480, 300, "select");
          this.add.image(550, 100, "title");

          // game title
          titletxt = this.add.text(490, 80, "Memory Master", {
               font: "17px Comic Sans MS",
               fill: "black",
          });

          // button to initiate the words gameplay scene
          startWords = this.add.text(430, 280, "Numbers", {
               font: "25px Comic Sans MS",
               fill: "green",
          });
          startWords.setInteractive({ useHandCursor: true });
          startWords.on("pointerdown", () => {
               //   displying level progress bar
               levelProgress.style.display = "block";

               // switching scenes
               this.scene.switch("PlayNumbers"), this.music.play(musicConfig);
               randomElem.style.letterSpacing = "10px";
          });

          // button to initial the numbers gameplay scene
          startNumbers = this.add.text(620, 280, "Words", {
               font: "25px Comic Sans MS",
               fill: "red",
          });
          startNumbers.setInteractive({ useHandCursor: true });
          startNumbers.on("pointerdown", () => {
               this.scene.switch("playWords");

               levelProgress.style.display = "block";
               randomElem.style.letterSpacing = "0";

               this.music.play(musicConfig);

               // setting initial values
               localStorage.setItem("level", 0);
               localStorage.setItem("loses", 0);
          });
     }
}
