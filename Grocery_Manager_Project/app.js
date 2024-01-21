// ---------------ELEMENT SELECTORS------------

const alert = document.querySelector('.alert')
const form = document.querySelector('.grocery-form')
const grocery = document.querySelector('#grocery')
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')

// ------------EVENT LISTENERS----------
form.addEventListener('submit', addItem)
clearBtn.addEventListener('click',clearItems)
// ------------VARIABLES----------------
const editFlag = false

// ------------FUCTIONS------------------
function addItem (e) {
  e.preventDefault()
  const value = grocery.value
  const id = new Date().getTime().toString()

  if (value && !editFlag) {
    const element = document.createElement('article')
    const attr = document.createAttribute('data-id')
    attr.value = id
    element.setAttributeNode(attr)
    element.classList.add('grocery-item')
    element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
        <button class="edit-btn">
            <i class="fas fa-edit"></i>
        </button>
        <button class="delete-btn">
            <i class="fas fa-trash"></i>
        </button>
    </div>`
    list.append(element)
    displayAlert('New Item added', 'success')
    container.classList.add('show-container')
    addToLocalStorage(id, value)
    setBackToDefault()
  } else if (value && editFlag) {
    console.log('editing')
  } else {
    displayAlert('Please Enter Value', 'danger')
  }
}
function clearItems(){
    const items = document.querySelectorAll('.grocery-item');
    console.log("removed");
    if(items.length>0){
        items.forEach((item)=>{
            list.removeChild(item);
            // item.remove();
            
        })
    }

    container.classList.remove("show-container");
    displayAlert("emmpty list", "danger");
    setBackToDefault();
}
function displayAlert (text, action) {
  alert.innerText = text
  alert.classList.add(`alert-${action}`)

  setTimeout(() => {
    alert.innerText = ''
    alert.classList.remove(`alert-${action}`)
  }, 2000)
}

function addToLocalStorage (id, value) {}
function setBackToDefault () {}
