
import BootGame from './BootGame.js';
import Menu from './Menu.js';
import PlayNumbers from './Numbers.js';
import PlayWords from './Words.js';


var config = {
    width: 800,
    height: 600,
    scene: [BootGame, Menu, PlayNumbers, PlayWords]
};
var game = new Phaser.Game(config);