// Comentário em linha

/* 
  Comentário multilinha
*/

/*
// Strings 
console.log('Messi')
console.log("Vasco")
console.log(`Lucas ${10 + 10}`)

// Numbers
console.log(Infinity)

// Boolean
console.log(true)
console.log(false)

// Undefined vs Null
console.log(undefined)
console.log(null)

// Objeto
console.log({
  name: "Lucas",
  idade: 20,
  andar: function() {
    console.log("Andar")
  }
})

// Arrays
console.log(["Lucas", 20])
console.log([
  "Leite",
  "Ovos",
  "Carne"
])

// Variaveis
/*const clima = "Quente"
let clima = "Quente"
var clima = "Quente"
clima = "Frio"
console.log(clima)*/

/*

// Tipos dinamicos
let clima = true
clima = ""
console.log(typeof clima)

// Scope
console.log('existe x antes do bloco?', x)
{
  var x = 0
}
console.log('existe x depois do bloco?', x)

// Scope let e const
let y = 0
{
  y = 0
  console.log('existe y', y)
}
console.log('existe y depois do bloco', y)

// Agrupando declarações
var name = "Lucas"
console.log(typeof name)
let age, isHuman
age = 20
isHuman = true
console.log(name, age, isHuman)

// Concatenendo variáveis
console.log(name, 'tem ' + age, 'anos')
console.log(`${name} tem ${age} anos.`)

//Object
const person = {
  name: 'Lucas',
  age: 20,
  weight: 74,
  isAdmin: true
}
console.log(person.name)

// Arrays
const animals = [
  'Lion',
  'Monkey',
  {
    name: 'Cat',
    age: 3
  }
]
console.log(animals[0])
console.log(animals[2].name)
console.log(animals.length)
*/

// Exercícios
/*
let weight

undefined
console.log(typeof weight)

let name = 'Lucas'
let age = 20
let weight = 74.5
let isSubscribed = true

*/
let student = {
  name: 'Lucas',
  age: 20,
  weight: 4.5,
  isSubscribed: true,
}
console.log(student.name)
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

let students = []


students = [
  student
]
console.log(students)
console.log(students[0])

const john = {
  name: 'John',
  age: 25,
  weight: 80,
  isSubscribed: false,
}

students[1] = john
console.log(students[1])

console.log(a)
var a = 1
