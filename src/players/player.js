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
      game.playerActive.loadTexture('doryan_right');
    } else if (game.input.keyboard.addKey(Phaser.Keyboard.RIGHT).isDown) {
      // RIGHT
      game.playerActive.body.velocity.x = 200
      game.playerActive.loadTexture('doryan_left');
    } //else if (game.input.keyboard.addKey(Phaser.keyCode(70)).isDown) {
      //console.log('tesst')
    //}
    else {
      console.log(game.input)
      game.playerActive.loadTexture('doryan');
      game.playerActive.body.velocity.x = 0
    }

    if ((game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).isDown || game.input.keyboard.addKey(Phaser.Keyboard.UP).isDown) && game.playerActive.body.touching.down) {
      game.playerActive.body.velocity.y = -700
    }
  }
}