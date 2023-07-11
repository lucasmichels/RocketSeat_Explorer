/*
// Typecasting
console.log(Number('10') + 5)
*/

/*
// Transformar string em número e número em string
let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))
*/

/*
// Contando caracteres e digitios
let word = "Paralelepipedo"
console.log(word.length)
let number = 124897314
console.log(String(number).length)
*/

/*
// Casas decimais
let number = 481.86741
console.log(number.toFixed(2).replace("." , ","))
*/

/*
// Transformando strings
let word = 'Programar é muito bacana'
console.log(word.toUpperCase())
console.log(word.toLowerCase())
*/

/*
// Splitting e Joining strings
let phrase = 'Eu quero viver o amor'
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)
*/

/*
// Verificar se contém palavra
let phrase = 'Eu quero viver amor'
console.log(phrase.includes("amor"))
*/

/*
// Array construtor
let myArray = new Array ('a', 'b', 'c')
console.log(myArray)
*/

/*
// Contar elementos do array
console.log(['a', 'b', 'c'].length)
*/

/*
// Transformando cadeia de caracteres em array
let word = 'manipulação'
console.log(Array.from(word))
*/

/*
// Manipulando arrays
let techs = ['html', 'css', 'js']

techs.push('nodejs')
techs.unshift('sql')
techs.pop()
techs.shift()

console.log(techs.slice(1, 2))
techs.splice(1, 1)
console.log(techs)

let index = techs.indexOf('css')
techs.splice(index, 1)


console.log(techs)
*/