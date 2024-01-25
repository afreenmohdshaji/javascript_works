function degreeToFarenheit() {
    let degreeCel=+box1.value
    let result=((degreeCel*9/5)+32)
    box2.value=result
}

function farenheitToDegree() {
    let farenHeit=+box2.value
    let result=((farenHeit-32)*5/9)
    box1.value=result
}