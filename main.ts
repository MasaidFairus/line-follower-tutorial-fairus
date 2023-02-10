basic.showLeds(`
    . # # # .
    . . # . .
    # # # # #
    # . # . #
    # . . . #
    `)
Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
basic.forever(function () {
    if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 70)
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.Black) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Left, 50)
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.Black)) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Right, 50)
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Stop, 0)
    }
})
