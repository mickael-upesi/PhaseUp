import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js';
import Levels from './levels'
import Player from './players/player';

export default class UpMario {
  static preload(game) {
    game.stage.backgroundColor = "#ffffff";
    game.load.image('chaise', './assets/images/chaise.png'); // C
    game.load.image('ludivine', './assets/images/ludivine.png'); // L
    game.load.image('ludivine_right', './assets/images/ludivine_right.png');
    game.load.image('ludivine_left', './assets/images/ludivine_left.png');
    game.load.image('doryan', './assets/images/doryan.png'); // D
    game.load.image('doryan_left', './assets/images/doryan_left.png')
    game.load.image('doryan_right', './assets/images/doryan_right.png')
    game.load.image('sol', './assets/images/sol.png'); // X
    game.load.image('etagere', './assets/images/etagere.png'); // E
    game.load.image('pc_js', './assets/images/pc_js.png'); // J
    game.load.image('petit_bt', './assets/images/petit_button.png'); // B
    game.load.image('plante', './assets/images/plante.png'); // A
    game.load.image('platform_etagere', './assets/images/platform_etagere.png'); // G
    game.load.image('platform_volet', './assets/images/platform_volet.png'); // O
    game.load.image('platform', './assets/images/platform.png'); // P
    game.load.image('pouf_1', './assets/images/pouf_1.png'); // 3
    game.load.image('pouf', './assets/images/pouf.png'); // F
    game.load.image('rtfm', './assets/images/rtfm.png'); // R
    game.load.image('table', './assets/images/table.png'); // T
    game.load.image('vitre', './assets/images/vitre.png'); // I
    game.load.image('volet', './assets/images/volet.png'); // V
    game.load.image('fleche', './assets/images/fleche.png'); // V
    game.load.image('message', './assets/images/message.png');
  }

  static update(game) {
    game.physics.arcade.collide(game.ludivine, game.walls)
    game.physics.arcade.collide(game.doryan, game.walls)
    game.physics.arcade.collide(game.doryan, game.platforms)
    game.physics.arcade.collide(game.ludivine, game.platforms)
    game.physics.arcade.collide(game.doryan, game.obstacles)
    game.physics.arcade.collide(game.ludivine, game.obstacles)
    game.physics.arcade.collide(game.doryan, game.chaises)
    game.physics.arcade.collide(game.ludivine, game.chaises)
    game.physics.arcade.collide(game.chaises, game.obstacles)
    game.physics.arcade.overlap(game.doryan, game.btnlevel)
    game.physics.arcade.collide(game.ludivine, game.pc)
    Player.moveLoop(game)
  }

  static startLevel(level) {
    var game = new Phaser.Game(1000, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update })

    function preload() { UpMario.preload(game) }

    function create() { Levels.createLevel(game, level) }

    function update() { UpMario.update(game) }

  }
}