const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Portugês",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//funcionalidades
//pega o numero e retorna o nome da aula
function getSubjects(subjectNumber) {
    const position = +subjectNumber - 1 //retorna um numero menos um numero para poder saber qual é a materia que está selecionada
    return subjects[position] //se tiver o numero 1, retorna "artes" por exemplo
}

function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(":")
    return Number((hour * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubjects,
    convertHoursToMinutes
}