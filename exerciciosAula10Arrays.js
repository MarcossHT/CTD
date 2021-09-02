let compras =  ['pente de ovos', 'filé de peito de frango', 'uva vitória', 'batata-doce']

//---------método join Junta os elementos de um array usando um separador

let sepadosPorVirgula = compras.join()
console.log(sepadosPorVirgula)

//--------- método pop elimina o último elemento de um array

let tirarUm = compras.pop()
console.log(tirarUm)
console.log(compras)

//--------- método push adiciona um ou mais elementos ao final do array

let adcionarItens = compras.push('Batata-inglesa', 'Maçã-gala')
console.log(adcionarItens)
console.log(compras)

//--------- método shift elimina o primeiro elemento de um array

let eliminarPrimeiro = compras.shift()
console.log(eliminarPrimeiro)
console.log(compras)

//--------- método unshift adiciona um ou mais elementos ao início de um array

let adcionarElemento = compras.unshift('Pão de forma', 'Banana Prata')
console.log(adcionarElemento)
console.log(compras)

// O exercício a seguir é proposto:
// Usando apenas .pop() e .push()
// crie uma função que receba uma matriz de 4 elementos por parâmetro
// retorne uma matriz com os elementos invertidos em sua ordem:
// Então [1,2,3,4]
// retorna [4,3,2,1]

let meuArray = [1, 2, 3, 4]

function matrizInvertida(array) {
    const param = array
    let saida1 = array.pop()
    let saida2 = array.pop()
    let saida3 = array.pop()
    let saida4 = array.pop()
    let entrada1 = array.push(saida1)
    let entrada2 = array.push(saida2)
    let entrada3 = array.push(saida3)
    let entrada4 = array.push(saida4)
    
    return console.log(param)
}

matrizInvertida(meuArray)

//---------
let meuArray1 = ['Porshe', 'Ferrari', 'Ford']

function inverter(array) {
    return console.log (array.reverse())
}

inverter(meuArray1)

//--------- 

let numeros = [10, 3, 10, 4]

function soma(array) {
    const total = array.reduce((x, y) => x + y)
    return console.log(total)
}

soma(numeros)

//---------

let array1 = ['o', 'l', 'á']

function joinArray(array) {
    let arrayJoined = array[0] + array[1] + array[2]
    return console.log(arrayJoined)
}

joinArray(array1)

//---------

let filmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"]

function coverterMaiusculo(array) {
    let resultado = array.map(function(i) {
        return i.toUpperCase()
    })
    return console.log(resultado)
}
coverterMaiusculo(filmes)

let filmes2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

function add(array1, array2) {
    let resultado = array1.concat(array2)
    let deletePop = resultado.pop()
    return console.log(resultado, deletePop)
}

add(filmes, filmes2)

let asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4]
let euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]

function comparar(array1, array2) {
    if (array1 === array2) {
        return console.log('As notas são iguais!')
    } else { return console.log('As notas são diferentes!') }
}

comparar(asiaScores, euroScores)