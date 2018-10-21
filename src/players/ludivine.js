import Player from './player'

export default class Ludivine extends Player {
  constructor (game) {
    super (game, 'ludivine', 50, document.querySelector('canvas').height - 180,)

    game.ludivine = this.player
  }
}