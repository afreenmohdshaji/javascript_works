var lang=["python","java","c#","css"]
lang.push("c++")
lang.unshift("c")
lang.pop()
lang.shift()
lang.reverse()

for(let i=0;i<lang.length;i++){
    console.log(lang[i]);
}


var arr=[10,20,12,3,5]

var square=arr.map((n)=>n**2)
console.log(square);

var cubes=arr.map((n)=>n**3)
console.log(cubes);

var evens=arr.filter((n)=>n%2==0)
console.log(evens);

var numGtFive=arr.filter((n)=>n>10)
console.log(numGtFive);


var sum=arr.reduce((n1,n2)=>n1+n2)
console.log(sum);

var product=arr.reduce((n1,n2)=>n1*n2)
console.log(product);

var minNum=arr.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(minNum);

var srt=arr.sort((n1,n2)=>n1-n2)
console.log(srt);