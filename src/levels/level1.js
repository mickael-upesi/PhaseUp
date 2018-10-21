import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js';
import Ludivine from '../players/ludivine'
import Doryan from '../players/doryan'

export default (game) => {

  game.walls = game.add.group();

  let level = [
    '                      ',
    '                      ',
    '                      ',
    '                      ',
    '                      ',
    '                      ',
    'xxxxxxxxxxxxxxxxxxxxxx',
  ]

  for (let i = 0; i < level.length; i++) {
    for (let j = 0; j < level[i].length; j++) {

      if (level[i][j] == 'x') {
        let wall = game.add.sprite(30 + 20 * j, document.querySelector('canvas').height, 'sol')
        game.walls.add(wall)
        wall.body.collideWorldBounds = true
        wall.body.immovable = true
      }
    }
  }

  let ludivine = new Ludivine(game)
  let doryan = new Doryan(game)
}