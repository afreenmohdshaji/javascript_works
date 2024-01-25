var text="quick brown for jumped over the lazy dog"

var alphabets="abcdefghijklmnopqrstuvwxyz"

var isPanagram=true

for(let ch of alphabets){
    if (text.indexOf(ch)==-1) {
        isPanagram=false
    }
}
console.log(isPanagram);