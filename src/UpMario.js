import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js';
import Levels from './levels'
import Player from './players/player';

export default class UpMario {
  static preload(game) {
    game.load.spritesheet('ludivine', './assets/images/ludivine.png', {frameWidth: 32, frameHeight: 100 })
    game.load.spritesheet('doryan', './assets/images/doryan.png', {frameWidth: 32, frameHeight: 100 })
    game.load.image('sol', './assets/images/sol.png')
  }

  static update(game) {
    game.physics.arcade.collide(game.ludivine, game.walls)
    game.physics.arcade.collide(game.doryan, game.walls)
    Player.moveLoop(game)
  }

  static startLevel(level) {
    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update })

    function preload() { UpMario.preload(game) }

    function create() { Levels.createLevel(game, level) }

    function update() { UpMario.update(game) }

  }
}