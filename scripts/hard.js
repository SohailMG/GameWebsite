class hard extends Phaser.Scene {
    constructor() {
        super("playHard");
    }


    preload() {
        // loading game assets 
        this.load.image('btn', 'assets/PlayBtn.png');
        this.load.image('bg', 'assets/m_bg3.jpg');
        this.load.image('play', 'assets/Playbtns.png');
        this.load.image('title', 'assets/title.png');
        this.load.image('select', 'assets/Selectbtn.jpg');

    }

    create() {
        // variables for start menue 
        var Playtxt;
        var titletxt;



        this.add.image(400, 300, 'bg');
        this.add.image(550, 200, 'play');
        this.add.image(550, 100, 'title');
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
        Playtxt.setInteractive({ useHandCursor: true })
        Playtxt.on('pointerdown', () => this.scene.switch("playGame"));


    }
}