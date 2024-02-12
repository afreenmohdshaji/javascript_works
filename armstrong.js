var num=1634;
var org=num

var digitCount=String(num).length
var sum=0

while(num!=0){
    let digit=num %10
    let pow=digit**digitCount
    sum+=pow
    num=Math.floor(num/10)
}
// if (sum==org){
//     console.log("it is armstrong");
// }
// else{
//     console.log("not armstrong");
// }

console.log(sum==org?"armstrong":"not armstrong");
