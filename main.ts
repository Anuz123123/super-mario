namespace SpriteKind {
    export const Block = SpriteKind.create()
    export const Aktivist_1_1 = SpriteKind.create()
    export const Aktivist_2_2 = SpriteKind.create()
    export const Aktivist_3_3 = SpriteKind.create()
    export const Aktivist_4_4 = SpriteKind.create()
    export const Aktivist_5_5 = SpriteKind.create()
    export const Aktivist_6_6 = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const Tree = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (Mario.isHittingTile(CollisionDirection.Bottom)) {
        number_of_jumps = 0
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Block, function (sprite, otherSprite) {
    Mario.startEffect(effects.rings)
    Block_1.destroy(effects.spray, 500)
    AmmoLeft += 3
    Mario.sayText(AmmoLeft)
    pause(2000)
    effects.clearParticles(Mario)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (AmmoLeft > 0) {
        FireBall = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f f f f f . . 
            . . . . . . f f 4 4 2 4 4 f f . 
            . . . . f f f 2 2 2 4 4 5 5 5 f 
            f f f f f 2 2 2 4 4 4 5 4 4 5 f 
            f 2 2 2 2 2 2 2 2 2 4 4 5 4 5 f 
            f f f f f f 2 2 4 4 4 5 5 5 5 f 
            . . . . . f f f f 4 4 4 4 4 f f 
            . . . . . . . . f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Mario, 120, 5)
        Mario.startEffect(effects.halo, 200)
        pause(700)
        AmmoLeft += -1
        Mario.sayText(AmmoLeft)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Mario,
    [img`
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 2 2 2 . . 
        . . . . . e e e d d f d . . . . 
        . . . . e d e d d d f d d d . . 
        . . . . e d e e d d d f d d d . 
        . . . . e e d d d d f f f f . . 
        . . . . . . d d d d d d d . . . 
        . . . . . 2 2 8 2 2 2 . . . . . 
        . . . . 2 2 2 8 2 2 8 2 2 2 . . 
        . . . 2 2 2 2 8 8 8 8 2 2 2 2 . 
        . . . d d 2 8 5 8 8 5 8 2 d d . 
        . . . d d d 8 8 8 8 8 8 d d d . 
        . . . d d 8 8 8 8 8 8 8 8 d d . 
        . . . . . 8 8 8 . . 8 8 8 . . . 
        . . . . e e e . . . . e e e . . 
        . . . e e e e . . . . e e e e . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 2 . . d d d . . 
        . . . 2 2 2 2 2 2 2 2 2 d d . . 
        . . . e e e d d f d . 2 2 2 . . 
        . . e d e d d d f d d d 2 2 . . 
        . . e d e e d d d f d d d 2 . . 
        . . e e d d d d f f f f 2 . . . 
        . . . . d d d d d d d 2 2 . . . 
        . . 2 2 2 8 2 2 2 8 2 2 . . . . 
        d d 2 2 2 2 8 2 2 2 8 . . . e . 
        d d d 2 2 2 8 8 8 8 5 8 8 e e . 
        . d . . 8 8 8 5 8 8 8 8 8 e e . 
        . . e e 8 8 8 8 8 8 8 8 8 e e . 
        . e e e 8 8 8 8 8 . . . . . . . 
        . e e . . . . . . . . . . . . . 
        `,img`
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 2 2 2 . . 
        . . . . . e e e d d f d . . . . 
        . . . . e d e d d d f d d d . . 
        . . . . e d e e d d d f d d d . 
        . . . . e e d d d d f f f f . . 
        . . . . . . d d d d d d d . . . 
        . . . . . 2 2 8 2 2 2 . . . . . 
        . . . . 2 2 2 8 2 2 8 2 2 2 . . 
        . . . 2 2 2 2 8 8 8 8 2 2 2 2 . 
        . . . d d 2 8 5 8 8 5 8 2 d d . 
        . . . d d d 8 8 8 8 8 8 d d d . 
        . . . d d 8 8 8 8 8 8 8 8 d d . 
        . . . . . 8 8 8 . . 8 8 8 . . . 
        . . . . e e e . . . . e e e . . 
        . . . e e e e . . . . e e e e . 
        `],
    200,
    false
    )
    if (number_of_jumps < Max_jumps) {
        number_of_jumps += 1
        Mario.vy = -120
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Tree, function (sprite, otherSprite) {
    Mario.sayText("Burn stupid tree", 5000, false)
    Gretha.sayText("How dare you!", 2000, false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    effects.confetti.startScreenEffect()
    scene.setBackgroundColor(1)
    game.splash("WELL DONE! ", "FUCK THE CLIMATE - MARIO, 2021")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    scene.cameraShake(5, 500)
    pause(1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss, function (sprite, otherSprite) {
    info.changeLifeBy(-3)
})
let Gretha: Sprite = null
let Block_1: Sprite = null
let FireBall: Sprite = null
let Mario: Sprite = null
let AmmoLeft = 0
let Max_jumps = 0
let number_of_jumps = 0
tiles.setTilemap(tilemap`level1`)
info.setLife(3)
number_of_jumps = 0
Max_jumps = 2
AmmoLeft = 7
Mario = sprites.create(img`
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . 2 2 2 2 2 2 2 2 2 2 . . 
    . . . . f f f d d d f d . . . . 
    . . . f d f d d d d f d d d . . 
    . . . f d f f d d d d f d d d . 
    . . . f f d d d d d f f f f . . 
    . . . . . . d d d d d d d . . . 
    . . . . . 2 2 8 2 2 2 2 . . . . 
    . . . . 2 2 2 8 2 2 8 2 2 2 . . 
    . . . 2 2 2 2 8 8 8 8 2 2 2 2 . 
    . . . 1 1 2 8 5 8 8 5 8 2 1 1 . 
    . . . 1 1 1 8 8 8 8 8 8 1 1 1 . 
    . . . 1 1 8 8 8 8 8 8 8 8 1 1 . 
    . . . . . 8 8 8 . . 8 8 8 . . . 
    . . . . e e e . . . . e e e . . 
    . . . e e e e . . . . e e e e . 
    `, SpriteKind.Player)
Mario.setPosition(17, 230)
Mario.ay = 300
FireBall = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f f f f f f . . 
    . . . . . . f f 4 4 2 4 4 f f . 
    . . . . f f f 2 2 2 4 4 5 5 5 f 
    f f f f f 2 2 2 4 4 4 5 4 4 5 f 
    f 2 2 2 2 2 2 2 2 2 4 4 5 4 5 f 
    f f f f f f 2 2 4 4 4 5 5 5 5 f 
    . . . . . f f f f 4 4 4 4 4 f f 
    . . . . . . . . f f f f f f f . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
Block_1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 5 5 1 1 1 1 1 1 1 1 1 5 . . 
    . . 5 5 1 1 1 1 1 1 1 1 1 5 . . 
    . . 5 5 1 1 1 5 5 5 1 1 1 5 . . 
    . . 5 5 1 1 1 5 5 5 1 1 1 5 . . 
    . . 5 5 5 5 5 5 5 5 1 1 1 5 . . 
    . . 5 5 5 5 5 5 5 5 1 1 1 5 . . 
    . . 5 5 5 5 5 5 5 1 1 1 5 5 . . 
    . . 5 5 5 5 5 5 1 1 1 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 1 1 1 5 5 5 . . 
    . . 5 5 5 5 5 5 1 1 1 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Block)
Block_1.setPosition(860, 160)
let Aktivist_1 = sprites.create(img`
    . . . . f f f f f f f f . . . . 
    . . . . d d d d d d d d . . . . 
    . . . . d d 9 d d 9 d d . . . . 
    . . . . . d d f f d d . . . . . 
    . . . . . d f 3 3 f d . . . . . 
    . . . . . . f f f f . . . . . . 
    . . 7 7 7 7 7 f f 7 7 7 7 7 . . 
    . 7 7 7 7 7 7 9 9 7 7 7 7 7 7 . 
    7 7 7 7 7 7 9 9 7 9 7 7 7 7 7 7 
    7 7 7 7 7 9 9 9 9 9 9 7 7 7 7 7 
    1 1 1 7 9 7 7 9 9 7 7 9 7 1 1 1 
    1 1 . 7 9 9 7 9 7 7 7 9 7 . 1 1 
    d d . 7 7 9 9 9 9 9 9 7 7 . d d 
    d d d 7 7 7 9 7 7 9 7 7 7 d d d 
    . d d 7 7 7 7 9 9 7 7 7 7 d d . 
    . . d 7 7 7 7 7 7 7 7 7 7 d . . 
    `, SpriteKind.Enemy)
Aktivist_1.setPosition(360, 230)
Aktivist_1.follow(Mario, 50)
let Aktivist_2 = sprites.create(img`
    . . . . f f f f f f f f . . . . 
    . . . . d d d d d d d d . . . . 
    . . . . d d 2 d d 2 d d . . . . 
    . . . . . d d f f d d . . . . . 
    . . . . . d f 3 3 f d . . . . . 
    . . . . . . f f f f . . . . . . 
    . . 7 7 7 7 7 f f 7 7 7 7 7 . . 
    . 7 7 7 7 7 7 9 9 7 7 7 7 7 7 . 
    7 7 7 7 7 7 9 9 7 9 7 7 7 7 7 7 
    7 7 7 7 7 9 9 9 9 9 9 7 7 7 7 7 
    1 1 1 7 9 7 7 9 9 7 7 9 7 1 1 1 
    1 1 . 7 9 9 7 9 7 7 7 9 7 . 1 1 
    d d . 7 7 9 9 9 9 9 9 7 7 . d d 
    d d d 7 7 7 9 7 7 9 7 7 7 d d d 
    . d d 7 7 7 7 9 9 7 7 7 7 d d . 
    . . d 7 7 7 7 7 7 7 7 7 7 d . . 
    `, SpriteKind.Enemy)
Aktivist_2.setPosition(650, 230)
Aktivist_2.follow(Mario, 55)
let Aktivist_3 = sprites.create(img`
    . . . . f f f f f f f f . . . . 
    . . . . d d d d d d d d . . . . 
    . . . . d d 9 d d 9 d d . . . . 
    . . . . . d d f f d d . . . . . 
    . . . . . d f 3 3 f d . . . . . 
    . . . . . . f f f f . . . . . . 
    . . 7 7 7 7 7 f f 7 7 7 7 7 . . 
    . 7 7 7 7 7 7 4 4 7 7 7 7 7 7 . 
    7 7 7 7 7 7 4 4 7 4 7 7 7 7 7 7 
    7 7 7 7 7 4 4 4 4 4 4 7 7 7 7 7 
    1 1 1 7 4 7 7 4 4 7 7 4 7 1 1 1 
    1 1 . 7 4 4 7 4 7 7 7 4 7 . 1 1 
    d d . 7 7 4 4 4 4 4 4 7 7 . d d 
    d d d 7 7 7 4 7 7 4 7 7 7 d d d 
    . d d 7 7 7 7 4 4 7 7 7 7 d d . 
    . . d 7 7 7 7 7 7 7 7 7 7 d . . 
    `, SpriteKind.Enemy)
Aktivist_3.setPosition(850, 230)
Aktivist_3.follow(Mario, 60)
let Aktivist_4 = sprites.create(img`
    . . . . f f f f f f f f . . . . 
    . . . . d d d d d d d d . . . . 
    . . . . d d 9 d d 9 d d . . . . 
    . . . . . d d f f d d . . . . . 
    . . . . . d f 3 3 f d . . . . . 
    . . . . . . f f f f . . . . . . 
    . . 5 5 5 5 5 f f 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 9 9 5 5 5 5 5 5 . 
    5 5 5 5 5 5 9 9 7 9 5 5 5 5 5 5 
    5 5 5 5 5 9 9 9 9 9 9 5 5 5 5 5 
    1 1 1 5 9 7 7 9 9 7 7 9 5 1 1 1 
    1 1 . 5 9 9 7 9 7 7 7 9 5 . 1 1 
    d d . 5 5 9 9 9 9 9 9 5 5 . d d 
    d d d 5 5 5 9 7 7 9 5 5 5 d d d 
    . d d 5 5 5 5 9 9 5 5 5 5 d d . 
    . . d 5 5 5 5 5 5 5 5 5 5 d . . 
    `, SpriteKind.Enemy)
Aktivist_4.setPosition(1450, 230)
Aktivist_4.follow(Mario, 65)
let Aktivist_5 = sprites.create(img`
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . . d d d d d d d d . . . . 
    . . . . d d 9 d d 9 d d . . . . 
    . . . . . d d f f d d . . . . . 
    . . . . . d f 3 3 f d . . . . . 
    . . . . . . f f f f . . . . . . 
    . . 7 7 7 7 7 f f 7 7 7 7 7 . . 
    . 7 7 7 7 7 7 9 9 7 7 7 7 7 7 . 
    7 7 7 7 7 7 9 9 7 9 7 7 7 7 7 7 
    7 7 7 7 7 9 9 9 9 9 9 7 7 7 7 7 
    a a a 7 9 7 7 9 9 7 7 9 7 a a a 
    a a . 7 9 9 7 9 7 7 7 9 7 . a a 
    d d . 7 7 9 9 9 9 9 9 7 7 . d d 
    d d d 7 7 7 9 7 7 9 7 7 7 d d d 
    . d d 7 7 7 7 9 9 7 7 7 7 d d . 
    . . d 7 7 7 7 7 7 7 7 7 7 d . . 
    `, SpriteKind.Enemy)
Aktivist_5.setPosition(1900, 230)
Aktivist_5.follow(Mario, 66)
let Aktivist_6 = sprites.create(img`
    . . . . 7 7 7 7 7 7 7 7 . . . . 
    . . . . d d d d d d d d . . . . 
    . . . . d d 9 d d 9 d d . . . . 
    . . . . . d d f f d d . . . . . 
    . . . . . d f 3 3 f d . . . . . 
    . . . . . . f f f f . . . . . . 
    . . 3 3 3 3 3 f f 3 3 3 3 3 . . 
    . 3 3 3 3 3 3 9 9 3 3 3 3 3 3 . 
    3 3 3 3 3 3 9 9 7 9 3 3 3 3 3 3 
    3 3 3 3 3 9 9 9 9 9 9 3 3 3 3 3 
    1 1 1 3 9 7 7 9 9 7 7 9 3 1 1 1 
    1 1 . 3 9 9 7 9 7 7 7 9 3 . 1 1 
    d d . 3 3 9 9 9 9 9 9 3 3 . d d 
    d d d 3 3 3 9 7 7 9 3 3 3 d d d 
    . d d 3 3 3 3 9 9 3 3 3 3 d d . 
    . . d 3 3 3 3 3 3 3 3 3 3 d . . 
    `, SpriteKind.Enemy)
Aktivist_6.setPosition(2600, 250)
Aktivist_6.follow(Mario, 68)
Gretha = sprites.create(img`
    999999999999999bcccccccccccc66999999999999
    9999999999999bccceeebbbbeeccc6999999999999
    99999999996ccceeeebbbbbbbeeeccc99999999999
    99999999bcccccceeebbbdbbbbeeccccc999999999
    9999999bccccceeeeebbbddbbeeecccccc99999999
    999999cccceeeebbbbddddddbbbbeeccccc9999999
    99999ccfccebbddddddddddddddbbbbeeccc999999
    99996ffccbbddddddddddddddddddddbbecc999999
    9999bfceebbdddddddddddddddddddddbbecc99999
    9999fcceebbdddddddddddddddddddbbbbbec99999
    999bcfceebbbbbddddddddddddddddbbbbbec99999
    999bcfceebbbbbdddddddddddddddddddbbec99999
    999bccceebbbbddddddddddddddddddddbbbcb9999
    9996cceebbbbbbbbbbbbbbbbddbbbbbbbbbbcb9999
    996bbceebbbbbbeeeeeebbbbbbbbbcceebbbec6666
    66bceeeebbbbbeeecccbebbbdbbecccbebbbcc6666
    66cceeeebbddbbbbbbbbbbbdddbbbbbbbbbbbc6666
    6ccbbbebbbbdddbbbbbbbddddddbbbbbddbbb6c666
    6c66bbebbbbdddddddddddddddddddddddbbb66666
    6c666bbbbbbbddddddddddddddddddddddbbb6b666
    6c666bbbbbbbbddddddd43444b4bddddbbbbbbb6b6
    6666666bbbbbbbdddddddbeebbbbddbbbbbb9bb6b6
    6666666bbbbbbbbbbdddddbbbbbbdbbbbbbb9b9bb6
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9b9bbb6
    bbbbbbbbbbbbbbbbbbbeeeeeeeebbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbb444bbbbbbbccccccccc
    cccccccccccebbbbbbbbbbbbbbbbbbbbcccccccccc
    ccfffccccccebbbbbbbbbbbbbbbbbecccccccccccc
    ffffffcccccbbbbbbbbbbbbbbbbbbefccccccccccc
    fffffcccccebbbbbbbbb4bbbbbbbbeffccccccccff
    fffcccccccbbbbbbbbbbbbbbbbbbbefeeccccccccf
    ffccccccbdbbbbbbbbbbbbbbbbbbbeffcecccccccc
    ccccbbbdddbbbbbbbbbbbbbbbbbbbeffcccccccccf
    cbbdddddddbbbbbbbbbbbbbbbbbbbecfffcbbbbccc
    `, SpriteKind.Boss)
Gretha.setPosition(20, 150)
Gretha.follow(Mario, 40)
let tree1 = sprites.create(img`
    ................................
    ................................
    ................................
    .......7777777777...............
    ......777777777777..............
    .....77777777777777.............
    .....777777777777777............
    ....77777777777777777...........
    ...7777777777777777777..........
    ...7777777777777777777..........
    ..77777777777777777777..........
    ...777777777777777777...........
    ....7777777777777777............
    .....77777777777777.............
    ......777777777777..............
    ........777777777...............
    ..........eeeee.................
    ..........eeeee.................
    ..........eeeee.................
    ..........eeeee.................
    ..........eeeee.................
    ..........eeeee.................
    ..........eeeee.................
    ..........eeeee.................
    ..........eeeee.................
    ..........eeeee.................
    ..........eeeee.................
    ..........eeeee.................
    ..........eeeee.................
    ..........eeeee.................
    ..........eeeee.................
    ..........eeeee.................
    `, SpriteKind.Tree)
tree1.setPosition(1000, 230)
let Tree2 = sprites.create(img`
    ................................
    ................................
    ......7777777777777777..........
    ......7777777777777777..........
    ......7777777777777777..........
    ......7777777777777777..........
    ......7777777777777777..........
    ......7777777777777777..........
    ......7777777777777777..........
    ......7777777777777777..........
    ......7777777777777777..........
    ......7777777777777777..........
    ......7777777777777777..........
    ......7777777777777777..........
    ...........eeee.................
    ...........eeee.................
    ...........eeee.................
    ...........eeee.................
    ...........eeee.................
    ...........eeee.................
    ...........eeee.................
    ...........eeee.................
    ...........eeee.................
    ...........eeee.................
    ...........eeee.................
    ...........eeee.................
    ...........eeee.................
    ...........eeee.................
    ...........eeee.................
    ...........eeee.................
    ...........eeee.................
    ...........eeee.................
    `, SpriteKind.Tree)
Tree2.setPosition(1900, 230)
let tree3 = sprites.create(img`
    ................................
    ..........77777777777...........
    .........7777777777777..........
    ........777777777777777.........
    .......77777777777777777........
    ......7777777777777777777.......
    .....777777777777777777777......
    ....7777777777777777777777......
    .....777777777777777777777......
    ......777777777777777777........
    .......7777777777777777.........
    ........77777777777777..........
    .........7777777777777..........
    ..........eeeeeeeeeee...........
    ..........eeeeeeeeeee...........
    ..........eeeeeeeeeee...........
    ..........eeeeeeeeeee...........
    ..........eeeeeeeeeee...........
    ..........eeeeeeeeeee...........
    ..........eeeeeeeeeee...........
    ..........eeeeeeeeeee...........
    ..........eeeeeeeeeee...........
    ..........eeeeeeeeeee...........
    ..........eeeeeeeeeee...........
    ..........eeeeeeeeeee...........
    ..........eeeeeeeeeee...........
    ..........eeeeeeeeeee...........
    ..........eeeeeeeeeee...........
    ..........eeeeeeeeeee...........
    ..........eeeeeeeeeee...........
    ..........eeeeeeeeeee...........
    ..........eeeeeeeeeee...........
    `, SpriteKind.Tree)
tree3.setPosition(360, 230)
forever(function () {
    scene.cameraFollowSprite(Mario)
    controller.moveSprite(Mario, 75, 0)
    if (FireBall.overlapsWith(Aktivist_1)) {
        Aktivist_1.destroy(effects.fire, 500)
    } else if (FireBall.overlapsWith(Aktivist_2)) {
        Aktivist_2.destroy(effects.fire, 500)
    } else if (FireBall.overlapsWith(Aktivist_3)) {
        Aktivist_3.destroy(effects.fire, 500)
    } else if (FireBall.overlapsWith(Aktivist_4)) {
        Aktivist_4.destroy(effects.fire, 500)
    } else if (FireBall.overlapsWith(Aktivist_5)) {
        Aktivist_5.destroy(effects.fire, 500)
    } else if (FireBall.overlapsWith(Aktivist_6)) {
        Aktivist_6.destroy(effects.fire, 500)
    } else if (FireBall.overlapsWith(Tree2)) {
        Tree2.destroy(effects.fire, 1000)
    } else if (FireBall.overlapsWith(tree3)) {
        tree3.destroy(effects.fire, 1000)
    } else if (FireBall.overlapsWith(tree1)) {
        tree1.destroy(effects.fire, 1000)
    } else {
    	
    }
})
