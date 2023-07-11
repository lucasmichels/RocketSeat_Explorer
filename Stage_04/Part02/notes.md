# 1. Perguntando nome e mostrando mensagem

##  Código
    let name = prompt("Qual o seu nome?")
    alert("Olá, " + name)



# 2. Somando dois números

##  Código
    let numberOne = prompt("Digite o primeiro número: ")
    let numberTwo = prompt("Digite o segundo número: ")

    sum = Number(numberOne) + Number(numberTwo)

    alert("Resultado final: " + sum)



# 3. Operações matemáticas

##  Código
    let firstNumber = prompt("Digite o primeiro número: ")
    let secondNumber = prompt("Digite o segundo número: ")

    firstNumber = Number(firstNumber)
    secondNumber = Number(secondNumber)

    const sum = firstNumber + secondNumber
    const dif = firstNumber - secondNumber
    const multi = firstNumber * secondNumber
    const div = firstNumber / secondNumber
    const restDiv = firstNumber % secondNumber

    alert('Soma: ' + sum)
    alert('Subtração: ' + dif)
    alert('Multiplicação: ' + multi)
    alert('Divisão: ' + div)
    alert('Resto da divisão: ' + restDiv)



# 4. Melhorando os algoritmos e a lógica de programação

# 5. Calculando a média de um estudante

##  Código
    let name = prompt("Qual o nome do aluno?")
    let gradeOne = prompt("Qual foi a primeira nota? ")
    let gradeTwo = prompt("Qual foi a segunda nota? ")
    let gradeThree = prompt("Qual foi a terceira nota? ")

    let average = (Number(gradeOne) + Number(gradeTwo) + Number(gradeThree)) / 3

    let result = average > 7

    average = average.toFixed(2)

    if (result) {
      alert("Parabéns " + name + "! Sua média foi: " + average)
    } else {
      alert("Continue tentando " + name + ", sua média foi: " + average)
    }



# 6. Criando lista de compras

##  Código
    let items = [];

    for (let item = 0; item < 10; item++) {
      items[item] = prompt("Digite o item " + (item + 1))

    }

    alert(items)



# 7. Jogo da advinhação

##  Código
    let guess = prompt("Adivinhe o número que estou pensando? Está entre 0 e 10.")

    let number = Math.round(Math.random() * 10)

    let tries = 1;

    while (guess != number) {
      guess = prompt("Erro! Tente novamente:")
      
      tries++
    }

    if (tries == 1) {
      alert(`Parabés! Você acertou em ${tries} tentativa!`)
    } else {
      alert(`Parabés! Você acertou em ${tries} tentativas!`)
    }



# 8. Ganhas mais informações com ajuda do VSCode

# 9. Interagindo com um menu de opções - parte 1
    
    - Quais os dados que terei? (input)
    - Quais as variáveis?
    - Qual o caminho ideal? (fluxo ideal)
    - Qual(is) o(s) caminho(s) alternativo(s)? (fluxo alternativo)
    - Quais tratamentos de dados preciso fazer?
    - Qual é a saída, ou quais os dados de saída? (outputs)

##  Código
    let option
    let items = []

    while(option != 3){  

      option = Number(prompt(`
      Ola usuário! Digite o número da opção desejada:

      1. Cadastrar um item na lista
      2. Mostrar itens cadastrados
      3. Sair do programa\n`))

      if(option == 1) {

        let item = prompt("Digite o nome do item: ")

        items.push(item)

      }
      else if(option == 2) {
        
        if(items.length == 0) {
          alert("Não existem itens cadastrados.")
        } else {
          alert(items)
        }
      }
      else {
        alert("Tchau")
      }
    }



# 10. Interagindo com um menu de opções - parte 2

##  Código
    let option
    let items = []

    while(option != 3){  

      option = Number(prompt(`
      Ola usuário! Digite o número da opção desejada:

      1. Cadastrar um item na lista
      2. Mostrar itens cadastrados
      3. Sair do programa\n`))

      switch (option) {
        case 1:
          let item = prompt("Digite o nome do item: ")
          items.push(item)
          break

        case 2:
          if(items.length == 0) {
            alert("Não existem itens cadastrados.")
          } else {
            alert(items)
          }
          break

        case 3:
          alert("Tchau")
          break

        default:
          alert("Opção inválida. Tente novamente.")
      }
    }



# 11. Estruturando dados com objetos

##  Código
    const patients = [
    {
      name: "Luiz",
      age: 20,
      weight: 100,
      height: 185,
    },
    {
      name: "Carlos",
      age: 25,
      weight: 80,
      height: 180,
    },
    {
      name: "Marcos",
      age: 30,
      weight: 95,
      height: 200,
    },
    ]

    let patientsNames = []

    for(let patient of patients) {
      patientsNames.push(patient.name)
    }

    alert(patientsNames)

##  Código Desafio Extra - Aparecendo todos na mesma tela
    const patients = [
    {
      name: "Luiz",
      age: 20,
      weight: 100,
      height: 185,
    },
    {
      name: "Carlos",
      age: 25,
      weight: 80,
      height: 180,
    },
    {
      name: "Marcos",
      age: 30,
      weight: 95,
      height: 200,
    },
    ]

    listPatients = []

    for(let patient  of patients) {
      listPatients.push(`
      Nome do paciente: ${patient.name}
      Idade do paciente: ${patient.age}
      Peso do paciente: ${patient.weight}
      Altura do paciente: ${patient.height}
      `)
    }

    alert(listPatients)

##  Código Desafio Extra - Aparecendo um de cada vez na tela
    const patients = [
    {
      name: "Luiz",
      age: 20,
      weight: 100,
      height: 185,
    },
    {
      name: "Carlos",
      age: 25,
      weight: 80,
      height: 180,
    },
    {
      name: "Marcos",
      age: 30,
      weight: 95,
      height: 200,
    },
    ]

    for (let index = 0; index < patients.length; index++) {
      alert(`
      Nome do paciente: ${patients[index].name}
      Idade do paciente: ${patients[index].age}
      Peso do paciente: ${patients[index].weight}
      Altura do paciente: ${patients[index].height}
      `)
    }



# 12. Calculando IMC com funções

##  Código
    const patients = [
      {
        name: "Luiz",
        age: 20,
        weight: 100,
        height: 185,
      },
      {
        name: "Carlos",
        age: 25,
        weight: 80,
        height: 180,
      },
      {
        name: "Marcos",
        age: 30,
        weight: 95,
        height: 200,
      },
    ]

    function calcIMC(weight, height) {
      return (weight /  ((height / 100) ** 2)).toFixed(2)
    }

    function printPatientIMC(patient) {
      return `
      Paciente ${patients.name} possui o IMC de ${calcIMC(patient.weight, patient.height)}
      `
    }

    for (let patient of patients) {
      let IMCMessage = printPatientIMC(patient)
      alert(IMCMessage)
    }