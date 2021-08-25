function preparar(tempo, prato) {
    if (prato !== "Pipoca" && prato !== "Macarrão" && prato !== "Carne"  && prato !== "Feijão"  && prato !== "Brigadeiro") {
        return console.log("Prato inexistente!")
    } else if (prato === "Pipoca" && tempo < 10) {
        return console.log("tempo insuficiente!")
    } else if (prato === "Pipoca" && tempo >= 30) {
        return console.log("Kabum!!")
    } else if (prato === "Pipoca" && tempo >= 20) {
        return console.log("Sua comida queimou!")
    } else if (prato === "Pipoca" && tempo >= 10) {
        return console.log("Prato pronto, bom apetite!!!")
    } else if (prato === "Macarrão" && tempo < 8) {
        return console.log("tempo insuficiente!")
    } else if (prato === "Macarrão" && tempo >= 24) {
        return console.log("Kabum!!")
    } else if (prato === "Macarrão" && tempo >= 16) {
        return console.log("Sua comida queimou!")
    } else if (prato === "Macarrão" && tempo >= 8) {
        return console.log("Prato pronto, bom apetite!!!")
    } else if (prato === "Carne" && tempo < 15) {
        return console.log("tempo insuficiente!")
    } else if (prato === "Carne" && tempo >= 45) {
        return console.log("Kabum!!")
    } else if (prato === "Carne" && tempo >= 30) {
        return console.log("Sua comida queimou!")
    } else if (prato === "Carne" && tempo >= 15) {
        return console.log("Prato pronto, bom apetite!!!")
    } else if (prato === "Feijão" && tempo < 12) {
        return console.log("tempo insuficiente!")
    } else if (prato === "Feijão" && tempo >= 36) {
        return console.log("Kabum!!")
    } else if (prato === "Feijão" && tempo >= 24) {
        return console.log("Sua comida queimou!")
    } else if (prato === "Feijão" && tempo >= 12) {
        return console.log("Prato pronto, bom apetite!!!")
    } else if (prato === "Brigadeiro" && tempo < 8) {
        return console.log("tempo insuficiente!")
    } else if (prato === "Brigadeiro" && tempo >= 24) {
        return console.log("Kabum!!")
    } else if (prato === "Brigadeiro" && tempo >= 16) {
        return console.log("Sua comida queimou!")
    } else if (prato === "Brigadeiro" && tempo >= 8) {
        return console.log("Prato pronto, bom apetite!!!")
    }
}

preparar(50, "Carne")


//-------------------------

function validar(senha) {
    if (senha === 1234) {
        return console.log("Acesso Permitido!")
    } else {
        return console.log("Acesso Negado!")
    }
}

validar(1234)
validar(123)

//-------------------------

function comparar(x, y) {
    if (x > y) {
        return console.log(`${x} é o número maior e ${y} o número menor`)
    } else if ( x === y) {
        return console.log("São iguais")
    } else {
        return console.log(`${y} é o número maior e ${x} o número menor`)
    }
}

comparar(3, 8)
comparar(5, 5)
comparar(10, 7)

//-------------------------

let mes = 13

switch(mes) {
    case 1:
        return console.log("Janeiro");
        break;
    case 2:
        return console.log("Fevereiro")
        break;
    case 3:
        return console.log("Março")
        break;
    case 4:
        return console.log("Abril")
        break;
    case 5:
        return console.log("Maio")
        break;
    case 6:
        return console.log("Junho")
        break;
    case 7:
        return console.log("Julho")
        break;
    case 8:
        return console.log("Agosto")
        break;
    case 9:
        return console.log("Setembro")
        break;
    case 10:
        return console.log("Outubro")
        break;
    case 11:
        return console.log("Novembro")
        break;
    case 12:
        return console.log("Dezembro")
        break;
    default:
        console.log("Mês inexistente.")
}

//-------------------------
let senha = 1234
let validate = (senha === 1234 ? "Acesso Permitido!" : "Acesso negado!" )
console.log(validate)
