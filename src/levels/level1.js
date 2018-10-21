import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js';
import Ludivine from '../players/ludivine'
import Doryan from '../players/doryan'

export default (game) => {

  game.walls = game.add.group();
  game.platforms = game.add.group()
  game.obstacles = game.add.group()

  let wall = game.add.sprite(0, game.height, 'sol')
  wall.body.collideWorldBounds = true
  wall.body.immovable = true
  game.walls.add(wall)

  let etagere = game.add.sprite(game.width - 200, game.height - 220, 'etagere')
  etagere.body.immovable = true
  
  game.obstacles.add(etagere)

  let ludivine = new Ludivine(game)
  let doryan = new Doryan(game)
}