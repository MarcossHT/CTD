function Usuario(titularConta, saldoConta, tipoConta, numeroConta) {
    this.titularDaConta = titularConta
    this.saldo = saldoConta
    this.tipoDeConta = tipoConta
    this.numeroDaConta = numeroConta
}

let abigael = new Usuario("Abigael Natte", 27771, "Conta Corrente", 5486273622)

let ramon = new Usuario("Ramon Connell", 8675, "Conta Poupança", 1183971869)

let jarret = new Usuario("Jarret Lafuente", 27363, "Conta Poupança", 9582019689)

let ansel = new Usuario("Ansel Ardley", 32415, "Conta Poupança", 1761924656)

let jacki = new Usuario("Jacki Shurmer", 18789, "Conta Poupança", 7401971607)

let jobi = new Usuario("Jobi Mawtus", 28776, "Conta Corrente", 630841470)

let thomasin = new Usuario("Thomasin Latour", 2177, "Conta Corrente", 4223508636)

let lonnie = new Usuario("Lonnie Verheijden", 25994, "Conta Poupança", 185979521)

let alonso = new Usuario("Alonso Wannan", 7601, "Conta Corrente", 3151956165)

let bendite = new Usuario("Bendite Huggett", 33196, "Conta Poupança", 2138105881)

const usuarios = [abigael, ramon, jarret, ansel, jacki, jobi, thomasin, lonnie, alonso, bendite]

let banco = {
  clientes: usuarios,
  consultarCliente: function(titular) {
    for (let index = 0; index < this.clientes.length; index++) {
        if (this.clientes[index] === titular) {return console.log(titular)}
        else {return console.log("Usuário Inexistente!")}
    }
  },
  deposito: function(titular, valor) {
    for (let index = 0; index < this.clientes.length; index++) {
      if (this.clientes[index] === titular) {let novoSaldo = titular.saldo + valor 
        return console.log(`Deposito realizado, seu novo saldo é de ${novoSaldo}`)}
        else {return console.log("Usuário Inexistente!")}
    }
  },
  saque: function(titular, valor) {
    for (let index = 0; index < this.clientes.length; index++)
    if (this.clientes[index] === titular) {let novoSaldo = titular.saldo - valor
      if (novoSaldo <= 0) {return console.log("Saldo insuficiente")}
      else {return console.log(`Saque feito com sucesso, seu novo saldo é de: ${novoSaldo}`)}} 
    else {return console.log("Usuário Inexistente!")}
  }
}

console.log(banco.consultarCliente(abigael))
console.log(banco.deposito(abigael, 5000))
console.log(banco.saque(abigael, 70000))