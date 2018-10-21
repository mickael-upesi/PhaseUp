import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js';
import Ludivine from '../players/ludivine'
import Doryan from '../players/doryan'
import Levels from '../levels'
import { globalAgent } from 'http';

export default (game) => {
  let widht = 600; // 600
  game.walls = game.add.group();
  game.platforms = game.add.group()
  game.obstacles = game.add.group()
  game.chaises = game.add.group()

  let sol = game.add.sprite(0, widht - 10, 'sol');
  let sol2 = game.add.sprite(500, widht - 10, 'sol');
  sol.body.immovable = true
  sol2.body.immovable = true
  game.obstacles.add(sol); game.obstacles.add(sol2)
  /* Fond */
  let rtfm = game.add.sprite(500, widht - 250, 'rtfm');
  let etagere = game.add.sprite(750, widht - 210, 'etagere');
  let volet = game.add.sprite(150, widht - 370, 'volet');
  let volet2 = game.add.sprite(450, widht - 370, 'volet');
  let plante = game.add.sprite(920, widht - 470, 'plante');
  let fleche = game.add.sprite(800, widht - 350, 'fleche');
  rtfm.body.immovable = true
  etagere.body.immovable = true
  game.obstacles.add(etagere)
  volet.body.immovable = true
  volet2.body.immovable = true
  fleche.body.immovable = true
  /* Iterargible */ 
  let pc = game.add.sprite(15, widht - 370, 'pc_js');
  pc.body.immovable = true;
  
  game.chaise = game.add.sprite(228, widht - 250, 'chaise');
  game.physics.enable(game.chaise, Phaser.Physics.ARCADE)
  game.chaises.add(game.chaise)
  game.chaises.setAll('body.drag.x', 10000);
  game.chaise.body.gravity.y = 800;
  game.chaise.body.friction = 2;

  //game.obstacles.add(chaise)
  pc.body.immovable = true;

  game.pc = pc
  pc.body.onCollide = new Phaser.Signal();
  pc.body.onCollide.add(() => {
    console.log("OUVRIR LES STORES")
  }, this);
  
  let bt = game.add.sprite(300, widht - 550, 'petit_bt');
  bt.body.immovable = true
  game.btnlevel = bt
  bt.body.onOverlap = new Phaser.Signal();
  bt.body.onOverlap.add(() => {
    console.log("BAISSER LA PLATFORME DE L'ORDI")
  }, this);


  let platform1 = game.add.sprite(0, widht - 300, 'platform')
  game.platforms.add(platform1);
  platform1.body.immovable = true;
  let platform2 = game.add.sprite(950, widht - 350, 'platform')
  game.platforms.add(platform2);
  platform2.body.immovable = true;
  let platform3 = game.add.sprite(750, widht - 230, 'platform_etagere')
  game.platforms.add(platform3);
  platform3.body.immovable = true;
  let platform4 = game.add.sprite(150, widht - 400, 'platform_volet')
  game.platforms.add(platform4);
  platform4.body.immovable = true;
  let platform5 = game.add.sprite(450, widht - 400, 'platform_volet')
  game.platforms.add(platform5);
  platform5.body.immovable = true;
  let table = game.add.sprite(230, widht - 90, 'table')
  game.obstacles.add(table);
  table.body.immovable = true;

  let ludivine = new Ludivine(game)
  let doryan = new Doryan(game)
}