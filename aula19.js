function Pessoa(nome, genero, altura) {
    this.nome = nome
    this.genero = genero
    this.altura = altura
}

let abigael = new Pessoa("Abigael", "F", 1.55)
let ramon = new Pessoa("Romon", "M", 1.78)
let jarret = new Pessoa("Jarret", "M", 1.68)
let ansel = new Pessoa("Ansel", "M", 1.65)
let jacki = new Pessoa("Jacki", "F", 1.60)
let jobi = new Pessoa("Jobi", "F", 1.72)
let thomasin = new Pessoa("Thomasin", "M", 1.82)
let lonnie  = new Pessoa("Lonnie", "F", 1.79)
let alonso = new Pessoa("Alonso", "M", 1.90)
let bendite = new Pessoa("Bendite", "F", 1.77)
let maria = new Pessoa("Maria", "F", 1.53)
let sebatiao = new Pessoa("Sebastião", "M", 1.61)
let rodolfo = new Pessoa("Rodolfo", "M", 1.84)
let gisele = new Pessoa("Gisele", "F", 1.69)
let ivonete = new Pessoa("Ivonete", "F", 1.78)

const usuarios = [abigael, ramon, jarret, ansel, jacki, jobi, thomasin, lonnie, alonso, bendite, maria, sebatiao, rodolfo, gisele, ivonete]

let maior = 0;
let menor = 999;

let pessoas = usuarios.forEach(function(usuarios){
    if (usuarios.altura > maior){
        maior = usuarios.altura
    } else if (usuarios.altura < menor) {
        menor = usuarios.altura
    }
    
})

console.log(`A maior altura é ${maior}cm e menor altura é ${menor}cm`)

let quantidadeHomens = 0
let homens = usuarios.forEach(function(usuarios){
    if (usuarios.genero === "M") {
        return quantidadeHomens++
    }
})

console.log(`A quantidade de homens é ${quantidadeHomens}`)

let mulheres = usuarios.filter(function(usuarios){
    return usuarios.genero === "F"
})

console.log(mulheres)


let contador = 0;
let somaAltura = 0;
let media = somaAltura/contador

let soma = mulheres.forEach(function(mulheres){
    somaAltura += mulheres.altura;
    contador++;
})

console.log("A média é de " + somaAltura/contador)