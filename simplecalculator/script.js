
function performAddition() {
    let num1=document.querySelector("#box1").value
    let num2=document.querySelector("#box2").value
    let result=Number(num1)+Number(num2)
    
    document.querySelector("#resultBox").innerHTML=`Result: ${result}`
}

function subtractionFun(){
    let num1=+box1.value
    let num2=+box2.value
    let result=(num1)-(num2)

    document.querySelector("#resultBox").innerHTML=`Result: ${result}`
}

function multiplicationFun(){
    let num1=+box1.value
    let num2=+box2.value
    let result=(num1)*(num2)

    document.querySelector("#resultBox").innerHTML=`Result: ${result}`
}
function divisionFun(){
    let num1=+box1.value
    let num2=+box2.value
    let result=(num1)/(num2)

    document.querySelector("#resultBox").innerHTML=`Result: ${result}`
}