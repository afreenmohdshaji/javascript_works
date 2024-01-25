

// function maxTwo(num1,num2) {
//     return num1>num2?num1:num2;
// }

// console.log(maxTwo(10,20));


function nthDigitMax(num1,num2){
    return num1%10>num2%10?num1:num2;
}
// console.log(nthDigitMax(127,872));


function isPrime(num) {
    let isPrimeNum=true
    for(let i=2;i<num;i++){
        if(num%i==0){
            isPrimeNum=false
            break 
        }
    }
    return isPrimeNum
}

// console.log(isPrime(4));

function nextPrime(num) {
    let nextNumber=num+1
    while (!isPrime(nextNumber)) {
        nextNumber++
    }
    return nextNumber
}

console.log(nextPrime(5));

