var text="madam"


// var len=text.length-1

// var reverse=""

// for (let i=len;i>=0;i--){
//     let char=text[i]
//     reverse+=char
// }

// console.log(reverse==text?"pallindrome":"not pallindrome");

// var res=["h","i"].join("")
// console.log(res);


var split=text.split("").reverse().join("")
console.log(split==text?"pallindrome":"not pallindrome");