var text="samplequestions"

var wc={}

text.split("").map(ch=>ch in wc?wc[ch]+=1:wc[ch]=1)
var most_count=Object.entries(wc).reduce((o1,o2)=>o1[1]>o2[1]?o1:o2)

console.log(most_count);