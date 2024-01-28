// // XMLHttp request
// const request = new XMLHttpRequest()
// const title = document.querySelector('.title')
// request.addEventListener('readystatechange', () => {
//   if (request.readyState === 4 && request.status === 200) {
//     let data = JSON.parse(request.response)
//     data = data
//       .map(item => {
//         return `<p><b>${item.id}. </b>${item.title}</p>`
//       })
//       .join('')
//     console.log(data)

//     title.innerHTML = data
//   } else if (request.readyState === 4) {
//     title.innerHTML = `<h1> 400 error, please check your url !!!</h1>`
//   }
// })

// request.open('Get', 'https://jsonplaceholder.typicode.com/todos/')
// request.send()

// // Callback functions
// const title = document.querySelector('.title')
// const getTodos = (callback) => {
//   const request = new XMLHttpRequest()
//   request.addEventListener('readystatechange', () => {
//     if (request.readyState === 4 && request.status === 200) {
//       callback(undefined, request)
//     } else if (request.readyState === 4) {
//       callback(request.status, undefined)
//     }
//   })

//   request.open('Get', 'https://jsonplaceholder.typicode.com/todos/')
//   request.send()
// }

// getTodos((err, request) => {
//   if (err) {
//     title.innerHTML = `<h1> 400 error, please check your url !!!</h1>`
//   } else {
//     let data = JSON.parse(request.response)
//     data = data
//       .map(item => {
//         return `<p><b>${item.id}. </b>${item.title}</p>`
//       })
//       .join('')
//     title.innerHTML = data
//   }
// })

// // Promises Examples

// const getSomething = ()=>{
//     return new Promise((resolve, reject) => {
//         resolve("Has Data")
//         reject("No Data")
//     })
// }

// getSomething().then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })

// //Promise Chaining
// const title = document.querySelector('.title')
// const getTodos = (resource, callback) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest()
//     request.addEventListener('readystatechange', () => {
//       if (request.readyState === 4 && request.status === 200) {
//         let data = JSON.parse(request.response)
//         resolve(data)
//       } else if (request.readyState === 4) {
//         reject(request.status)
//       }
//     })
//     request.open('Get', resource)
//     request.send()
//   })
// }

// getTodos('https://jsonplaceholder.typicode.com/todos/1')
//   .then(data => {
//     createList(data)
//     return getTodos(('https://jsonplaceholder.typicode.com/todos/2'))
//   }).then(data => {
//     createList(data)
//     return getTodos(('https://jsonplaceholder.typicode.com/todos/3'))
//   }).then(data => {
//     createList(data)
//     return getTodos(('https://jsonplaceholder.typicode.com/todo/4'))
//   })
//   .catch(err => {
//     const h1 = document.createElement('h1')
//     h1.innerHTML = `${err} error, please check your url !!!`
//     title.append(h1)
//   })

// function createList(data) {
//     const p = document.createElement('p')
//     p.innerHTML = `<b>${data.id}. </b>${data.title}`
//     title.appendChild(p)
// }

// //Fetch API -> Without using async and await
// fetch('https://jsonplaceholder.typicode.com/todos/2').then((response)=>{
//   // response.json().then((data)=>{   // Response.json() returns promise which need to be handled
//   //   console.log(data );
//   // })
//   console.log(response.status);
//   return response.json()
// }).then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//   console.log(err);
// })

// // Async and Await -> Chain async code in a clean and efficient way
// Async -> used to make a async function. makes a function return promise
// Await -> Blocks the code until return response. Both used in combination
// Custom error using Error object

const getTodes = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/2')

  if(response.status !== 200) {
    throw new Error("Enter the correct url")
  }
  return await response.json() // since .json() return promise that need to handled
}

getTodes().then(data => {
  console.log(data)
}).catch((err)=>{
  console.log(err.message);
}
)