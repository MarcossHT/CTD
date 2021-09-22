function Pessoa(nome, opniao, idade) {
    this.nome = nome
    this.opniao = opniao
    this.idade = idade
}

let abigael = new Pessoa("Abigael", 3, 33)
let ramon = new Pessoa("Romon", 2, 18)
let jarret = new Pessoa("Jarret", 2, 20)
let ansel = new Pessoa("Ansel", 1, 42)
let jacki = new Pessoa("Jacki", 3, 19)
let jobi = new Pessoa("Jobi", 1, 39)
let thomasin = new Pessoa("Thomasin", 2, 30)
let lonnie  = new Pessoa("Lonnie", 3, 22)
let alonso = new Pessoa("Alonso", 1, 41)
let bendite = new Pessoa("Bendite", 2, 35)
let maria = new Pessoa("Maria", 3, 25)
let sebatiao = new Pessoa("Sebastião", 3, 24)
let rodolfo = new Pessoa("Rodolfo", 2, 31)
let gisele = new Pessoa("Gisele", 1, 28)
let ivonete = new Pessoa("Ivonete", 1, 36)

const usuarios = [abigael, ramon, jarret, ansel, jacki, jobi, thomasin, lonnie, alonso, bendite, maria, sebatiao, rodolfo, gisele, ivonete]

let galeraOtimo = usuarios.filter(function(usuarios){
    return usuarios.opniao === 3
})

console.log(galeraOtimo)

let contador = 0
let somaIdade = 0
let soma = galeraOtimo.forEach(function(galeraOtimo){
    somaIdade += galeraOtimo.idade
    contador++
})

console.log("A média de idade é de " + somaIdade/contador + " anos")

let galeraRegular = 0
let regular = usuarios.forEach(function(usuarios){
    if (usuarios.opniao === 1) {
        return galeraRegular++
    }
})

console.log(`${galeraRegular} pessoas consideraram o filme regular.`)

let galeraPesquisa = 0
let pesquisa = usuarios.forEach(function(){
    return galeraPesquisa++
})

let galeraBoa = 0
let bom = usuarios.forEach(function(usuarios){
    if (usuarios.opniao === 2) {
        return galeraBoa++
    }
})

console.log("A porcentagem de pessoas que responderam bom entre todos os espectadores é " + galeraBoa * 100/galeraPesquisa +"%")

//-------com reduce

let mediaReduce = galeraOtimo.reduce(function(acumulador, num) {
    return acumulador + num.idade
}, 0)

console.log("A média de idade é de " + mediaReduce/galeraOtimo.length + " anos")
