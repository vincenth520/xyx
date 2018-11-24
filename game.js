require('./js/libs/weapp-adapter')
window.p2 = require('./js/libs/p2')
window.PIXI = require('./js/libs/pixi')
window.Phaser = require('./js/libs/phaser-split')

window.WIDTH = 750
window.SCALE = WIDTH / canvas.width
window.HEIGHT = canvas.height * SCALE

window.go = {
  game :null,
  userInfo:null,
  opponentInfo:null,
  common:require('./js/common'),
  server:null,
  lauchRoomId:null,
  battle:null,
}


const config = {
  width:WIDTH,
  height:HEIGHT,
  renderer:Phaser.CANVAS,
  canvas:canvas
}

const game = new Phaser.Game(config)

go.game = game

game.state.add('start', require('./js/states/start'))
game.state.add('menu', require('./js/states/menu'))
game.state.start('start')