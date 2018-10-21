import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js';
import UpMario from '../UpMario'

var menuGroup;
var menuTween;

export default (game) => {
  var logo = game.add.sprite(225, 50, 'phaser')
  logo.anchor.setTo(0, 0)

  menuGroup = game.add.group();
  var menuButton = game.add.button(game.width / 2, game.height - 30, 'play', toggleMenu(game));
  menuButton.anchor.set(0.5);
  menuGroup.add(menuButton);

  // var thankYou = game.add.button(game.width / 2, game.height + 130, "play", launchGame(game));
  // thankYou.anchor.set(0.5);
  // menuGroup.add(thankYou);
}

function toggleMenu(game){
  if(menuGroup.y === 0){
    menuTween = game.add.tween(menuGroup).to({
      y: -180
    }, 500, Phaser.Easing.Bounce.Out, true);
  }
  if(menuGroup.y === -180){
    menuTween = game.add.tween(menuGroup).to({
      y: 0
    }, 500, Phaser.Easing.Bounce.Out, true);
  }
}

