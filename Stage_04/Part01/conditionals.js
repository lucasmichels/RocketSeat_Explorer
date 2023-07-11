
// if else
let temperature = 37

if(temperature >= 37.5) {
  console.log('Febre')
} else if(temperature < 37.5 && temperature >= 37) {
  console.log('Febre moderada')
} else {
  console.log('Saudável')
}

let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
  console.log('Febre')
} else if(mediumTemperature) {
  console.log('Febre moderada')
} else {
  console.log('Saudável')
}



// Switch
switch ('a') {
  case 'a':
    console.log('a')
    break
  case 'b':
    console.log('b')
    break
  default:
    console.log('default')
    break
}



// Throw e try...catch
function sayMyName(name) {
  if (name === ''){
    throw 'Nome é necessário'
  }
  console.log(name)
}

try {
  sayMyName('Lucas')
} catch(e) {
  console.log(e)
}