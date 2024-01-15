// Event Listeners
// Two types of propagation
// Event Bubble -> it is a bottom up propagation; child->parent->grandparent
// Event Capture -> it is a top down propagation; grandparent->parent->child; must set the event listener parameter capture = true
// For capturing once, parameter once: true;
// To remove event listener; .removeEventListener
// .stopPropagation() to stop bubble and capture propagation
// Event delegation, help prevent unwanted js problems when event listener is added but when a new element is inserted it does not work
const grandparent = document.querySelector('.grandparent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')

// grandparent.addEventListener('click', printOutput)
// parent.addEventListener('click', printOutput)
// child.addEventListener('click', printOutput)

// setTimeout(() => {
//   grandparent.removeEventListener('click', printOutput)
// }, 5000)

function printOutput (e) {
  console.log(e.target.className)
  e.stopPropagation()
}

const divs = document.querySelectorAll('div')
// divs.forEach(e => {
//   e.addEventListener('click', () => {
//     console.log(e)
//   })
// })

addGlobalEventListner("click", "div", printOutput)

function addGlobalEventListner (type, selector, callback) {
  document.addEventListener(type, e => {
    if (e.target.matches(selector)) callback(e)
  })
}

const div = document.createElement("div");
div.style.width = "200px"
div.style.height = "200px"
div.style.backgroundColor = "purple"
document.body.append(div);
// grandparent.addEventListener('click')
