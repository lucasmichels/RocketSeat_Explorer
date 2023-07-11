const students = [
  {
    name: 'Lucas',
    firstGrade: 10,
    secondGrade: 9.5,
  },
  {
    name: 'Marlon',
    firstGrade: 5,
    secondGrade: 9
  },
  {
    name: 'Jair',
    firstGrade: 7,
    secondGrade: 6,
  },
  {
    name: 'Leo',
    firstGrade: 3,
    secondGrade: 5,
  }
]

function calcAverage(firstGrade, secondGrade) {
  let average = (firstGrade + secondGrade) / 2
  return average
}

function printMessage(student) {
  let studentAverage = calcAverage(student.firstGrade, student.secondGrade)
  if(studentAverage > 7) {
    return `
    A média do(a) aluno(a) ${student.name} é: ${studentAverage}
    Parabéns, ${student.name}! Você foi aprovado(a) no concurso!
    `
  }else{
    return `
    A média do(a) aluno(a) ${student.name} é: ${studentAverage}
    Não foi dessa vez, ${student.name}! Tente novamente!
    `
  }
}

for (let student of students) {
  let approvalMessage = printMessage(student)
  alert(approvalMessage)
  
}