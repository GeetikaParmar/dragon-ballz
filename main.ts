info.onCountdownEnd(function () {
    game.setDialogCursor(sprites.builtin.forestSnake2)
    game.over(true)
    effects.confetti.startScreenEffect()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 100)
    music.baDing.play()
    info.changeScoreBy(1)
})
let projectile: Sprite = null
info.startCountdown(10)
let mySprite = sprites.create(sprites.builtin.forestSnake2, SpriteKind.Player)
sprites.builtin.forestSnake2.flipX()
mySprite.setPosition(7, 62)
controller.moveSprite(mySprite, 130, 130)
tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
    . . . . . . . 2 2 2 2 2 2 2 2 2 
    . . . . . . . 2 2 2 2 2 2 2 2 2 
    . . . . . . . 2 2 2 2 2 2 2 2 2 
    . . . . . . . 2 2 2 2 2 2 2 2 2 
    . . . . . . . 2 2 2 2 2 2 2 2 2 
    . . . . . . . 2 2 2 2 2 2 2 2 2 
    . . . . . . . 2 2 2 2 2 2 2 2 2 
    . . . . . . . 2 2 2 2 2 2 2 2 2 
    . . . . . . . 2 2 2 2 2 2 2 2 2 
    . . . . . . . 2 2 2 2 2 2 2 2 2 
    . . . . . . . 2 2 2 2 2 2 2 2 2 
    . . . . . . . 2 2 2 2 2 2 2 2 2 
    . . . . . . . 2 2 2 2 2 2 2 2 2 
    . . . . . . . 2 2 2 2 2 2 2 2 2 
    . . . . . . . 2 2 2 2 2 2 2 2 2 
    . . . . . . . 2 2 2 2 2 2 2 2 2 
    `, [], TileScale.Sixteen))
scene.setBackgroundColor(11)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
forever(function () {
    music.playMelody("A F E F D G E F ", 120)
    mySprite.startEffect(effects.fire)
})
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(sprites.dungeon.collectibleRedCrystal, -100, 0)
    projectile.x = 160
    projectile.y = randint(5, 100)
})
