function adicionar(x, y) {
    return x + y
}

function subtracao(x, y) {
    return x - y
}

function multiplucacao(x, y) {
    return x * y
}

function divisao(x, y) {
    return Math.floor(x / y) 
}

function quadradoDoNumero(x) {
    return x * x
}

function mediaDeTresNumeros(x, y, z) {
    return x + y + z / 3
}

function  calculaPorcentagem(x, y) {
    return x * y / 100
}

function geradorDePorcentagem(x, y) {
    const calculo = x * 100 / y
    return `${calculo}%`
}

console.log("-------------- Teste de Operações / Calculadora --------------")

console.log(adicionar(2, 2))

console.log(subtracao(10, 9))

console.log(multiplucacao(22, 3))

console.log(divisao(8, 2))

console.log(divisao(0, 2))

console.log(quadradoDoNumero(5))

console.log(mediaDeTresNumeros(5, 10, 20))

console.log(calculaPorcentagem(300, 15))

console.log(geradorDePorcentagem(15, 300))