input.onButtonPressed(Button.A, function () {
    LIGHT += 1
})
input.onButtonPressed(Button.B, function () {
    if (SERVO == 0) {
        SERVO = 180
    } else {
        SERVO = 0
    }
})
let LIGHT = 0
let SERVO = 0
radio.setGroup(1065)
SERVO = 180
basic.forever(function () {
    radio.sendValue("pitch", input.rotation(Rotation.Pitch))
    radio.sendValue("roll", input.rotation(Rotation.Roll))
    if (LIGHT == 3) {
        LIGHT = 0
    }
    radio.sendValue("light", LIGHT)
    radio.sendValue("serveo", SERVO)
})
