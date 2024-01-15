// DOM Manipulation
// Create an element -> document.createElement("{element}")
// Add an element -> body.append()
// delete an element -> by having the reference of that element. ref.remove()
// Accessing attributes -> Using getAttribute or by using dot operator
// Deleting attribute -> ref.removeAttribute("{Name the attribute}")

const body = document.body;
const div = document.createElement("div");
div.innerText = "Hi Programmers";
const italic = document.createElement("i");
italic.innerText = "Hello World";
div.append(italic);
// const sample1 = document.querySelector(".sample1");
// console.log(sample1.innerText);
// console.log(sample1.textContent);

body.append(div);

const boldId = document.querySelector("#bold-id");
// body.remove(boldId);
console.log(boldId.innerText)
// boldId.remove()
// div.remove()
const sample1 = document.querySelector(".sample1");
sample1.removeChild(boldId);
console.log(sample1.className)
sample1.className = "nosample";
console.log(sample1.className)
sample1.classList.add("sample2");
sample1.style.backgroundColor = "red";