import level1 from './levels/level1'

export default class Levels {
  static createLevel (game, level) {
    switch (level) {
      case 1: level1(game)
    }
  }
}