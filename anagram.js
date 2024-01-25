var str1="race"
var str2="care"

var sortStr1=str1.split("").sort().join("")

var sortStr2=str2.split("").sort().join("")

console.log(sortStr1==sortStr2?"anagram":"not anagaram");


var arr=[8,10,3,7]

var srt=arr.sort().reverse().join("")
console.log(srt);