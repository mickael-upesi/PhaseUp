export default class Players {
  static createPlayer (game, player) {
    if (player === 'ludivine') {
      game.physics.arcade.gravity.y = 300;
      let player = game.add.sprite(400, 300, 'ludivine')
      game.physics.enable(player, Phaser.Physics.ARCADE)
      player.body.collideWorldBounds = true
    } else if (player === 'doryan') {
      game.physics.arcade.gravity.y = 300;
      let player = game.add.sprite(300, 300, 'doryan')
      game.physics.enable(player, Phaser.Physics.ARCADE)
      player.body.collideWorldBounds = true
      player.body.bounce.set(.3)
    }
    return player
  }
}