const listaAlunos = require("./metodos")
const aluno = require("./alunos")
//const listaAlunos = require("./estudantes")

let roberto = new aluno("Roberto", 4, [10, 7, 9, 5])

let curso = {
    nome: "Cálculo 1",
    notaDeAprovacao: 7,
    faltasMax: 5,
    alunos: listaAlunos,
    alunosAprovados: [],
    alunosReprovados: [],

    addAluno: function(aluno) {
        listaAlunos.push(aluno)
    },
   aprovAluno: function(pessoa) {
       let alunoEncontrado = this.alunos.find((alunos => alunos.nome === pessoa.nome))
       if(alunoEncontrado === pessoa) { 
            if (alunoEncontrado.somaFalta() === this.faltasMax) {
                if (alunoEncontrado.media() > this.notaDeAprovacao /10 + this.notaDeAprovacao) {
                    return true
                    } else {
                        return false
                    } 
            } else if (alunoEncontrado.somaFalta() < this.faltasMax && alunoEncontrado.media() >= this.notaDeAprovacao) {
                return true
            } else {
                return false
            }
        } else {
            return console.log("Aluno não encontrado")
        }
    },
    listaAprovados: function() {
        for (var i = 0; i < this.alunos.length; i++) {
            if (this.aprovAluno(this.alunos[i])) {
                this.alunosAprovados.push(this.alunos[i])
            }
        }
    },
    listaReprovados: function() {
        for (var i = 0; i < this.alunos.length; i++) {
            if (!this.aprovAluno(this.alunos[i])) {
                this.alunosReprovados.push(this.alunos[i])
            }
        }
    }
    
}
curso.addAluno(roberto)
console.log(curso.aprovAluno(roberto))
curso.listaAprovados()
curso.listaReprovados()
console.log(curso.alunosAprovados)
console.log(curso.alunosReprovados)