var num=2

var isPrime=true

for(let i=1;i<num;i++){
    if (num%i==0) {
        isPrime=false
        break

    }
}

console.log(isPrime);