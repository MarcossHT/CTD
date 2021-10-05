const listaAlunos = require("./metodos")
const aluno = require("./alunos")
//const listaAlunos = require("./estudantes")

let roberto = new aluno("Roberto", 4, [10, 7, 9, 5])

let curso = {
    nome: "Cálculo 1",
    notaDeAprovacao: 7,
    faltasMax: 5,
    alunos: listaAlunos,
    alunosStats: [],

    addAluno: function(aluno) {
        listaAlunos.push(aluno)
    },
   aprovAluno: function(pessoa) {
       for (let i = 0; i < this.alunos.length; i++) {
           if (this.alunos[i] === pessoa) {
               if (this.alunos[i].somaFalta() === this.faltasMax) {
                   if (this.alunos[i].media() > this.notaDeAprovacao / 10 + this.notaDeAprovacao) {
                       return true
                   } else {
                       return false
                   }
               } else if (this.alunos[i].media() >= this.notaDeAprovacao && this.alunos[i].somaFalta() < this.faltasMax) {
                   return true
               } else {
                   return false
               }
           } 
       }
    },
    listagemAlunos: function(lista) {
        for (let i = 0; i < lista.length; i++) {
                if (lista[i].somaFalta() === this.faltasMax) {
                    if (lista[i].media() > this.notaDeAprovacao / 10 + this.notaDeAprovacao) {
                         this.alunosStats.push(true)
                    } else {
                         this.alunosStats.push(false)
                    } 
                } else if (lista[i].media() >= this.notaDeAprovacao && lista[i].somaFalta() < this.faltasMax) {
                     this.alunosStats.push(true)
                } else {
                     this.alunosStats.push(false)
                }
        }
    }
    
}
curso.addAluno(roberto)
console.log(curso.aprovAluno(roberto))
curso.listagemAlunos(listaAlunos)
console.log(curso.alunosStats)