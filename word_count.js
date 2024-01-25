var text="hello hi hello goodmorning hello hello hi"

var wc={}

text.split(" ").map(w=>w in wc?wc[w]+=1:wc[w]=1)

console.log(wc);