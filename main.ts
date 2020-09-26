radio.setGroup(1065)
basic.forever(function () {
    radio.sendValue("pitch", input.rotation(Rotation.Pitch))
    radio.sendValue("roll", input.rotation(Rotation.Roll))
})
