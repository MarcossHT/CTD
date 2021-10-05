module.exports = function Aluno(nome, faltas, notas) {
    this.nome = nome
    this.faltas = faltas
    this.notas = notas
    this.media = function() {
        return this.notas.reduce(function(acumulador, num) {
            return acumulador + num
        })/this.notas.length
    }
    this.somaFalta = function() {
    return this.faltas + 1}
}