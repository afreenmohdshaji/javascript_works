var num1=40;
var num2=30;

var minNum=num1<num2?num1:num2

var gcd=1

for(let i=2;i<=minNum;i++){
    if(num1%i==0 && num2%i==0){
        gcd=i
    }
}

console.log(gcd);