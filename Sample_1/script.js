// There are 4 major types of method to traverse DOM
// 1. getElementById -> Return the element by their id
// 2. getElementByClassName -> Return a collection of elements with same classname
// 3. querySelector -> Takes in either id or class and return the first element if there are multiple elements with same classname
// 4. querySelectorAll -> Returns collection of elements
// Collection can be traversed using for loop.



const grandparent = document.getElementById("grandparent-id");
changeColor(grandparent);

const parent = document.getElementsByClassName("parent");
for(let i=0;i<parent.length;i++){
    changeColor(parent[i]);
}

const child = document.querySelector(".child");
changeColor(child);

const childAll = document.querySelectorAll('.child');
childAll.forEach(changeColor);

const parent1 = grandparent.children;
for(let i=0;i<parent1.length;i++){
    changeColor(parent1[i]);
}

function changeColor(element){
    element.style.backgroundColor = "#333"
}
