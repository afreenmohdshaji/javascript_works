var string1="ABC"
var string2="PQRST"

var mergedString=""
var smaleststring=string1.length<string2.length?string1:string2

for (let i=0;i<smaleststring.length;i++){
    let sub=string1[i]+string2[i]
    mergedString=mergedString+sub

}
if(string1.length>string2.length){
    let balance=string1.slice(smaleststring.length)
    mergedString+=balance
}
else{
    let balance=string2.slice(smaleststring.length)
    mergedString+=balance


}

console.log(mergedString);