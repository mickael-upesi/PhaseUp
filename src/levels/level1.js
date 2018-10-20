import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js';
import Players from '../players/players'

export default (game) => {
  let ludivine = Players.createPlayer(game, 'ludivine')
  let doryan = Players.createPlayer(game, 'doryan')
}