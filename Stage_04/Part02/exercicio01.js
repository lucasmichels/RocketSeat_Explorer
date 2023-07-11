let firstNumber = prompt("Insira o primeiro número: ")
let secondNumber = prompt("Insira o segundo número: ")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

let sum = firstNumber + secondNumber
let sub = firstNumber - secondNumber
let multi = firstNumber * secondNumber
let div = (firstNumber / secondNumber).toFixed(1)
let restDiv = firstNumber % secondNumber

alert(`A soma dos números é: ${sum}`)
alert(`A subtração dos números é: ${sub}`)
alert(`A multiplicação dos números é: ${multi}`)
alert(`A divisão dos números é: ${div}`)
alert(`O resto da divisão dos números é: ${restDiv}`)

let restSum = sum % 2
if(restSum == 0) {
  alert("A soma dos números é par.")
} else {
  alert("A soma dos números é impar.")
}

if(firstNumber == secondNumber) {
  alert("Os números inseridos são iguais.")
} else {
  alert("Os números inseridos são diferentes.")
}