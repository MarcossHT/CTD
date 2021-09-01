// CORRIGIR A FUNÇÃO adicionarElementosDoArray2NoArray1
// de forma que o resultado seja o ARRAY 1 + ARRAY 2

let filmes = ['star wars', 'matrix', 'robot', 'o Preço do Amanhã', 'a Vida é Bela']
let servicos = ['Netflix', 'Disney +', 'Star +', 'Amazon Prime']

 function adicionarElementosDoArray2NoArray1(array1, array2) {

    let meuArray = array1.concat(array2)
    
    for (let index = 0; index < meuArray.length; index++) {
        meuArray[index] = meuArray[index].toUpperCase();
    }
    // array1.push(array2.pop().toUpperCase());
    // array1.push(array2.pop().toUpperCase());
    // array1.push(array2.pop().toUpperCase());
    // array1.push(array2.pop().toUpperCase());
    // array1.push(array2.pop().toUpperCase());
 
    return console.log(meuArray);

}
adicionarElementosDoArray2NoArray1(filmes, servicos)