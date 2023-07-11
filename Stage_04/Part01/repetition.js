/*
// For loop
for(let i = 0; i < 10; i ++) {
  console.log(i)
}
*/

/*
// While
let i = 0
while(i < 10) {
  console.log(i)
  i++
}
*/

/*
// For...of
let name = 'Lucas'
let names = ['João', 'Paulo', 'Pedro']

for(let name of names){
  console.log(name)
}
*/

// For...in
let person = {
  name: 'Lucas',
  age: 20,
  weight: 74.5
}

for(let property in person) {
  console.log(property)
  console.log(person[property])
}