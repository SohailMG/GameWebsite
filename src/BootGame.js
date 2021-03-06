/* website window resolution is 1422.22 x 520 */
/**
 *   BootGame class is  initiates the game
 */
export default class BootGame extends Phaser.Scene {
     constructor() {
          super("BootGame");
     }
     /** loading game assets  into the scene */
     preload() {
          // loading game assets
          this.load.image("btn", "../assets/PlayBtn.png");
          this.load.image("bg", "../assets/m_bg3.jpg");
          this.load.image("play", "../assets/Playbtns.png");
          this.load.image("title", "../assets/title.png");
          this.load.image("select", "../assets/Selectbtn.jpg");
     }

     /** creating start game button and game title */
     create() {
          // variables for start menue
          var Playtxt;
          var titletxt;

          this.add.image(400, 300, "bg");
          this.add.image(550, 200, "play");
          this.add.image(550, 100, "title");
          // game title
          titletxt = this.add.text(490, 80, "Memory Master", {
               font: "17px Comic Sans MS",
               fill: "black",
          });
          // clickable text leades to scene 2
          Playtxt = this.add.text(530, 180, "Play", {
               font: "25px Comic Sans MS",
               fill: "black",
          });
          Playtxt.setInteractive({ useHandCursor: true });
          Playtxt.on("pointerdown", () => this.scene.switch("Menu"));
     }
}
