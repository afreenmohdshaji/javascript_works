var num=564;
var org=num

var digitCount=String(num).length;
var sum=0

while (num!=0) {
    let digit=num %10;
    var pow=digit**digitCount;
    sum=sum+pow
    num=Math.floor(num/10)
    
}
if (sum==org) {
    console.log("armstrong");
}
else{
    console.log("not a armstrong");
}