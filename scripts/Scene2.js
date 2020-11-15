class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    preload() {
        // loading game assets 
        this.load.image('btn', '../assets/PlayBtn.png');
        this.load.image('bg', '../assets/m_bg3.jpg');
        this.load.image('play', '../assets/Playbtns.png');
        this.load.image('title', '../assets/title.png');
        this.load.image('select', '../assets/Selectbtn.jpg');


    }


    create() {
        var easyTxt;
        var hardTxt;
        var titletxt;



        this.add.image(400, 300, 'bg');
        this.add.image(650, 300, 'select');
        this.add.image(480, 300, 'select');
        this.add.image(550, 100, 'title');
        // game title 
        titletxt = this.add.text(490, 80, "Memory Master", {
            font: "17px Comic Sans MS",
            fill: "black",
        });
        // clickable text leades to scene 2
        easyTxt = this.add.text(450, 280, "Easy", {
            font: "25px Comic Sans MS",
            fill: "green",
        });
        easyTxt.setInteractive({ useHandCursor: true })
        easyTxt.on('pointerdown', () => {
            this.scene.switch("playEasy")

        });

        hardTxt = this.add.text(620, 280, "Hard", {
            font: "25px Comic Sans MS",
            fill: "red",
        });
        hardTxt.setInteractive({ useHandCursor: true })
        hardTxt.on('pointerdown', () => this.scene.switch("Scene1"), localStorage.setItem('loses', 0));
    }
}