const aluno = require("./alunos")

let jade = new aluno ("jade", 6, [5, 7, 8, 7])

let edi = new aluno ("Édi", 3, [6, 8, 9, 10])

let mauro = new aluno ("Mauro", 4, [7, 5, 4, 8])

let izabella = new aluno ("Izabella", 2, [10, 8, 8, 9])

let juan = new aluno ("Juan", 5, [6, 8, 9, 9])

let maria = new aluno ("Maria", 6, [4, 5, 7, 8])

let malu = new aluno ("Malu", 3, [6, 7, 8, 7])

let horacio = new aluno ("Horácio", 4, [7, 8, 9, 9])

let rodolfo = new aluno ("Rodolfo", 7, [6, 5, 7, 8])

let barbara = new aluno ("Barbara", 2, [10, 8, 9, 10])

let estudantes = []
estudantes.push(jade, edi, mauro, izabella, juan, maria, malu, horacio, rodolfo, barbara)

module.exports = estudantes

