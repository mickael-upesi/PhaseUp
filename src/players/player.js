export default class Player {
  constructor (game, name, positionX, positionY) {
    this.player = game.add.sprite(positionX, positionY, name)
    // Mettre la physique sur le player
    game.physics.enable(this.player, Phaser.Physics.ARCADE) 
    // Player ne tombe pas hors de l'ecran
    this.player.body.collideWorldBounds = true
    // Set rebond
    this.player.body.bounce.set(.1)
    this.player.body.gravity.y = 1000
    game.playerActive = this.player
  }

  getPlayer () {
    return this.player
  }

  static moveLoop (game) {
    // DOWN KEY
    if (game.input.keyboard.addKey(Phaser.Keyboard.LEFT).isDown) {
      // LEFT
      game.playerActive.body.velocity.x = -200
    } else if (game.input.keyboard.addKey(Phaser.Keyboard.RIGHT).isDown) {
      // RIGHT
      game.playerActive.body.velocity.x = 200
    } else {
      game.playerActive.body.velocity.x = 0
    }

    if (game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).isDown && game.playerActive.body.touching.down) {
      game.playerActive.body.velocity.y = -500
    }
  }
}