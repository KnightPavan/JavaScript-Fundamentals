const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const colorText = document.querySelector(".color");
const clickMe = document.querySelector("#btn");

addGlobalEvenListener("click", "#btn", colorChange); //for selectors, if there is any space in btw, replace it with dot.

function addGlobalEvenListener(type, selector, callback){

    document.addEventListener(type, (e)=> {
        if(e.target.matches(selector)) callback(e);
    });
}

function randomNumberGenerator(n){
    return Math.floor(Math.random()*n);
}

function colorChange(e){
    let hexVal = "#";
    for(let i=0;i<6;i++){
        hexVal+=hex[randomNumberGenerator(hex.length)];
    }
    
    document.body.style.backgroundColor = hexVal;
    colorText.innerText = hexVal;
    colorText.style.color = hexVal;
}

