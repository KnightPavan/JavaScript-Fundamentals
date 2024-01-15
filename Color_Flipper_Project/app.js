const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "#FFFFFF", "#012345"];
let colorPt = 0;
const clickMe = document.querySelector("#btn");
const colorText = document.querySelector(".color");

clickMe.addEventListener("click", ()=>{
    if(colorPt===colors.length) colorPt = 0;
    document.body.style.backgroundColor = colors[colorPt];
    colorText.innerText = colors[colorPt];
    colorText.style.color = colors[colorPt];
    colorPt++;
})