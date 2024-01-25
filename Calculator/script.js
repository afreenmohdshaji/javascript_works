
function displayNum(num){
    result.value+=num
}

function clearBox() {
    result.value=""
}

function evalExpresion() {
    let currentExpresion=result.value
    let output=eval(currentExpresion)
    result.value=output
}
function backButton(){
    let curentValue=result.value.slice(1,-1)
    result.value=curentValue
    
}