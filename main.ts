controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . e e e . . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . e e e e e e e . . . . 
        . . . . . e e e e e f e . . . . 
        . . . . . e e e e e f e . . . . 
        . . . . . e e e e e f e . . . . 
        . . . . . e e e e e f e . . . . 
        . . . . . e e e e f e e . . . . 
        . . . . . . e e f e e . . . . . 
        . . . . . . . e e e . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, myParret, -50, 0)
})
let projectile: Sprite = null
let myParret: Sprite = null
myParret = sprites.create(img`
    .......33333.................77...77...............................
    .....33333333.............77777777777777...........................
    .....333333333...........777777777777777...........................
    ....3333333f33...........77777777777777777.........................
    ....33f3333333...........77777777777777777.........................
    ....33ff333f33..........777777777777777777.........................
    ....333fffff33...........777777777777777777........................
    ...777333333777...........7eeeeeeeeeee7777.........................
    ...777733337777..........eeeeeeeeeeeeee77..........................
    ..7777777777777..........eeeeeeeeeeeeee7...........................
    ..777777777777...........eeeeeeeeeeee..............................
    .7777777777777............eeeeeeeeeee..............................
    ..77777777777.............eeeeeeeeee...............................
    ...777777777..............eeeeeeeeee...............................
    ....77777777..............eeeeeeeee................................
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee................................
    ....66666666.....ee.......eeeeeeeee................................
    ....66666666..............eeeeeeeee................................
    ....66666666.............eeeeeeeeee................................
    .....6666666.............eeeeeeeeee................................
    .....6666666.............eeeeeeeeee................................
    ......666666.............eeeeeeeeee................................
    .......666aaaa...........eeeeeeeeee................................
    .......6aaaaaa...........eeeeeeeeee................................
    ........aaaaaa...........eeeeeeeeee................................
    ........aaaaaaa.........eeeeeeeeeee................................
    ..........aaaaaa........eeeeeeeeeeee...............................
    ...........aaaaa........eeeeeeeeeeeee..............................
    .............aaa.......eeeeeeeeeeeee...............................
    .......................eeeeeeeeeeeee...............................
    ......................eeeeeeeeeeeeee...............................
    ......................eeeeeeeeeeeeeee..............................
    ......................eeeeeeeeeeeeeee..............................
    ..................eeeeeeeee....e...e...............................
    ................eee......e....ee...ee...e..........................
    ................e.....eee.....e.....eeeee..........................
    ......................e......ee....................................
    ...................................................................
    ...................................................................
    ...................................................................
    ...................................................................
    ...................................................................
    ...................................................................
    ...................................................................
    ...................................................................
    ...................................................................
    ...................................................................
    ...................................................................
    ...................................................................
    ...................................................................
    ...................................................................
    ...................................................................
    ...................................................................
    ...................................................................
    ...................................................................
    ...................................................................
    ...................................................................
    ...................................................................
    ...................................................................
    ...................................................................
    ...................................................................
    ...................................................................
    ...................................................................
    ...................................................................
    ...................................................................
    ...................................................................
    ...................................................................
    `, SpriteKind.Player)
controller.moveSprite(myParret)
