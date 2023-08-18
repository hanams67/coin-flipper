input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Target)
    basic.showLeds(`
        # # . # #
        # # # # #
        . # # # .
        # # # # #
        # # . # #
        `)
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.StickFigure)
    } else {
        basic.showIcon(IconNames.Sword)
    }
})
