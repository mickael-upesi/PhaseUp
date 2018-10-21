import Player from './player'

export default class Ludivine extends Player {
  constructor (game) {
    super (game, 'ludivine', 50, document.querySelector('canvas').height - 100)

    game.ludivine = this.player
  }
}