//-----------------Cliclo for

for (let frase = 1; frase <= 5; frase++) {
    console.log('Olá mundo!')
}

for (let impar = 1; impar <= 1; impar ++) {
    console.log(1)
    console.log(3)
    console.log(5)
    console.log(7)
    console.log(9)
}

for (let tabuada = 1; tabuada <= 10; tabuada ++) {
    for (let multiplica = 0; multiplica <= 10; multiplica ++) {
        let resultado = tabuada * multiplica
        console.log(resultado)
    }
}


//-----------------While and do while

let numeroImpar = 1
while (numeroImpar <= 100) {
    numeroImpar = numeroImpar + 2
    console.log(numeroImpar);
} 

let numeroPar = 2
while (numeroPar <= 100) {
    numeroPar = numeroPar + 2
    console.log(numeroPar);
}

let numero = 1
while (numero <= 10) {
    if (numero % 2 === 0) {
         console.log(`${numero} é par`)
    } else {
         console.log(`${numero} é ímpar`)
    };
    numero ++
}

//-----------------

var dados = [];
var media = 0;
var mediaGeralResultado = 0;

// cria o nosso array de dados de alunos
dados[0] = [ "aluno 1", 7, 8, 7, 8 ]; // 0 nome do aluno
dados[1] = [ "aluno 2", 9, 9, 7, 7 ];
dados[2] = [ "aluno 3", 8, 8, 9, 10 ];
dados[3] = [ "aluno 4", 9, 9, 10, 6 ];

for (let inicio = 0; inicio < dados.length; inicio++) {
    // media Aluno
    var mediaAluno = ( dados[inicio][1] + dados[inicio][2] + dados[inicio][3] ) / (dados[inicio].length -1);

    media += mediaAluno; // acumula

    console.log(dados[inicio][0] + mediaAluno);
}

mediaGeralResultado = media / dados.length;

console.log(mediaGeralResultado)