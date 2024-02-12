
function fibonacci(n){
    
    let fib=[0,1]

    for(let i=2;i<n;i++){
        fib.push(fib[i-1]+fib[i-2])
    }
    return fib
}

// var fibonacciSeries=fibonacci(10)
// console.log(`first 10 fibonacci series are:${fibonacciSeries}`);

function nextFibonacci(num){
    let nextNum=num+1
    while(!isFibonacci(nextNum)){
        nextNum++
    }
    return nextNum
}

console.log(nextFibonacci(5));

function isFibonacci(num) {
    let a = 0, b = 1;
    while (b < num) {
        [a, b] = [b, a + b];
    }
    return b === num;
}

// console.log(isFibonacci(4));