import level1 from './levels/level1'

export default class Levels {
  static createLevel (game, level) {
    game.world.enableBody = true

    switch (level) {
      case 1: level1(game)
    }
  }
}