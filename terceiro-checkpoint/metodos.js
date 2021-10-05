const aluno = require("./alunos")

let eleonor = new aluno ("Eleonor",  9, [6, 4, 9, 5])

let aisha = new aluno ("Aisha",  3, [7,  5, 2, 9])

let lurdes = new aluno ("Lurdes", 2, [9, 1, 7, 9])

let tainara = new aluno ("Tainara", 8, [3, 1, 9, 7])

let ilídio = new aluno ("Ilídio", 3, [7, 6, 4, 2])

let noa = new aluno ("Noa", 0, [7, 8, 10, 8])

let alessandro = new aluno ("Alessandro", 0, [10, 8, 7, 8] )

let leticia = new aluno ("Leticia",  2, [9, 8, 9, 9])

let kael = new aluno ("Kael", 1, [6, 8, 6, 7])

let santiago = new aluno ("Santiago", 5, [7, 6, 8, 5])

let listaAlunos = []
listaAlunos.push(eleonor, aisha, lurdes, tainara, ilídio, noa, alessandro, leticia, kael, santiago)

module.exports = listaAlunos