<<<<<<< HEAD
import Player from './player'

export default class Doryan extends Player {
  constructor (game) {
    super (game, 'doryan', 0, document.querySelector('canvas').height - 180)

    game.doryan = this.player
  }
=======
import Player from './player'

export default class Doryan extends Player {
  constructor (game) {
    super (game, 'doryan', 0, document.querySelector('canvas').height - 180, { jump: -700 })

    game.doryan = this.player
  }
>>>>>>> 027593fba51d5673aa811239756bc36ec565550f
}