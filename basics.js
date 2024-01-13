let name = 'Pavan' //variables; let keyword
console.log(name)
const pi = 3.14 //constants; const keyword

let age = 10 //number type
let city = 'coimbatore' //string type
let isCapital = false //boolean type
age = 'hello'

console.log(typeof pi)

//reference types - Object
let person = {
  name: 'Pavan',
  age: 20,
  college: 'Kpr Institute of Engineering and Technology',
  city: 'Coimbatore'
}

console.log(person.name)

//Two type of notation to access objects
person.age = 21
//dot notation
console.log(person.age)

//bracket notation
person['age'] = 20
console.log(person['age'])

//array - reference datatype
//in js, arrays are objects and have different methods and properties to it
let college = ['Kpr', 'PSG', 2]
console.log(college)
console.log(college[2])

console.log(college.push(1))
//Operators in java script

console.log(4 + 5)
console.log(4 <= 5)
console.log(4 <= 5 && 7 < 5)
console.log(4 <= 5 || 7 < 5)
console.log(!(4 <= 5 || 7 < 5))
console.log(4 === '4') //compares both value and datatype - return false
console.log(4 == '4') //return true

console.log('5' * 5)
console.log(typeof parseInt('500'))
console.log(parseFloat(50.01))
console.log((500).toString())

//conditional statements
person['age'] = 18
if (person.age < 18) {
  console.log('Too Young')
} else if (person.age > 18) {
  console.log('Too Old')
} else {
  console.log('Optimum Age')
}

//Looping statements
let arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) {
  console.log('Array Element : ' + arr[i])
}
let i = 0
while (i < arr.length) {
  console.log('Array Element : ' + arr[i])
  i++
}
i = 0
do {
  console.log('Array Element : ' + arr[i])
  i++
} while (i < arr.length)

//function in js
// function - Keyword

function greet (person) {
  console.log('Hello ' + person.name + '. Your age is ' + person.age)
  return true
}

console.log(greet(person))

//Arrow function - Used for more consise function definition

const sumOfTwo = (a,b) => a+b;
const subOfTwo = (a,b) => {
    return a-b;
}

console.log(sumOfTwo(1,2));
console.log(subOfTwo(3,5));