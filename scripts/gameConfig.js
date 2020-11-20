
import bootGame from './Scene1.js';
import playGame from './Scene2.js';
import playEasy from './easy.js';
import PlayHard from './hard.js';


var config = {
    width: 800,
    height: 600,
    scene: [bootGame, playGame, playEasy, PlayHard]
};
var game = new Phaser.Game(config);