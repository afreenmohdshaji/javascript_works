


function getRandomNumber(){
    console.log(Math.floor(Math.random()*100));
}

let interval=setInterval(getRandomNumber,500);

function stop(){
    clearInterval(interval)
}

setTimeout(stop,5000)