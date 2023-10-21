"use strict";
// ex 1
function greet(name) {
    return "Olá, " + name + "!";
}
let user = "João";
console.log(greet(user));
// ex 2
class Pessoa {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    cumprimentar() {
        return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
    }
}
const joao = new Pessoa('João', 25);
console.log(joao.cumprimentar());
const maria = new Pessoa('Maria', 30);
console.log(maria.cumprimentar());
//ex 3
function calcularArea(raio) {
    return Math.PI * raio * raio;
}
let raio = 5;
console.log(`A área do círculo é ${calcularArea(raio)}`);
// ex 4
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function delayedGreeting(name) {
    console.log('Preparando para cumprimentar...');
    await delay(2000);
    console.log(`Olá, ${name}!`);
}
delayedGreeting('João');
