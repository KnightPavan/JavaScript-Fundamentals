// ---------------ELEMENT SELECTORS------------

const alert = document.querySelector('.alert')
const form = document.querySelector('.grocery-form')
const grocery = document.querySelector('#grocery')
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')

// ------------EVENT LISTENERS----------

window.addEventListener('DOMContentLoaded', setFromLocalStorage)
form.addEventListener('submit', addItem)
clearBtn.addEventListener('click', clearItems)

// ------------VARIABLES----------------
let editElement
let editFlag = false
let editId = ''

// ------------FUCTIONS------------------
function addItem (e) {
  e.preventDefault()
  const value = grocery.value
  const id = new Date().getTime().toString()

  if (value && !editFlag) {
    createListItem(id, value)
    displayAlert('New Item added', 'success')
    container.classList.add('show-container')
    addToLocalStorage(id, value)
    setBackToDefault()
  } else if (value && editFlag) {
    editElement.textContent = value
    displayAlert('value changed', 'success')
    editLocalStorage(editId, value)
    setBackToDefault()
  } else {
    displayAlert('Please Enter Value', 'danger')
  }
}

function deleteItem (e) {
  const element = e.currentTarget.parentElement.parentElement
  const id = element.dataset.id
  element.remove()

  if (list.children.length === 0) {
    container.classList.remove('show-container')
  }

  displayAlert('Item removed', 'danger')
  setBackToDefault()
  removeFromLocalStorage(id)
}

function editItem (e) {
  const element = e.currentTarget.parentElement.parentElement
  editElement = e.currentTarget.parentElement.previousElementSibling
  grocery.value = editElement.innerText
  editFlag = true
  editId = element.dataset.id
  submitBtn.textContent = 'edit'
}

function clearItems () {
  const items = document.querySelectorAll('.grocery-item')
  if (items.length > 0) {
    items.forEach(item => {
      list.removeChild(item)
    })
  }

  container.classList.remove('show-container')
  displayAlert('emmpty list', 'danger')
  localStorage.removeItem('list')
  setBackToDefault()
}


function displayAlert (text, action) {
  alert.innerText = text
  alert.classList.add(`alert-${action}`)

  setTimeout(() => {
    alert.innerText = ''
    alert.classList.remove(`alert-${action}`)
  }, 2000)
}

function createListItem (id, value) {
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

  const editBtn = element.querySelector('.edit-btn')
  const deleteBtn = element.querySelector('.delete-btn')

  editBtn.addEventListener('click', editItem)
  deleteBtn.addEventListener('click', deleteItem)

  list.append(element)
}

function addToLocalStorage (id, value) {
  const grocery = { id: id, value: value }

  const items = getFromLocalStorage()
  items.push(grocery)
  localStorage.setItem('list', JSON.stringify(items))
}
function removeFromLocalStorage (id) {
  let items = getFromLocalStorage()

  items = items.filter(item => {
    if (item.id !== id) return item
  })
  localStorage.setItem('list', JSON.stringify(items))
  console.log(items)
}

function editLocalStorage (id, value) {
  let items = getFromLocalStorage()
  items = items.map(item => {
    if (item.id === id) {
      item.value = value
    }
    return item
  })
  localStorage.setItem('list', JSON.stringify(items))
}

function getFromLocalStorage () {
  return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : []
}

function setFromLocalStorage () {
  let items = getFromLocalStorage()

  if (items.length > 0) {
    items.forEach(item => {
      createListItem(item.id, item.value)
      container.classList.add('show-container')
      displayAlert('Items From Local Storage Retrieved', 'success')
    })
  }
}

function setBackToDefault () {
  grocery.value = ''
  editFlag = false
  editId = ''
  submitBtn.innerText = 'submit'
}

// localStorage.setItem("Pavan", JSON.stringify(["Coimbatore", "21"]));
// console.log(JSON.parse(localStorage.getItem("Pavan"))[1]);
