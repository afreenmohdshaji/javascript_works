
var myPromise=new Promise((res,rej)=>{
    let myCompletedStatus=true
    if(myCompletedStatus==true){
        res("the form has been submitted")
    }
})

myPromise.then(res=>console.log("name will be marked i the placement form"))