import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js';
import Levels from './levels'

export default class UpMario {
  static preload(game) {
    game.load.image('chaise', './assets/images/chaisse.png');
    game.load.spritesheet('ludivine', './assets/images/ludivine.png', {frameWidth: 32, frameHeight: 100 });
    game.load.spritesheet('doryan', './assets/images/doryan.png', {frameWidth: 32, frameHeight: 100 });
    game.load.image('sol', './assets/images/platform.png');
  }

  static update(game) {
    
  }

  static startLevel(level) {
    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

    function preload() { UpMario.preload(game) }

    function create() { Levels.createLevel(game, level) }

    function update() { UpMario.update(game) }

  }
}