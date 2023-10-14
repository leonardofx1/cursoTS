"use strict";
// arrays
const numbers = [1, 2];
const nomes = ['marcos', 'felipe'];
console.log(typeof nomes);
// outra sintaxe
const carros = ['ferrari'];
// any
const varios = ['leonardo', 2023, ['ola']];
// function 
const soma = (a, b) => {
    return a + b;
};
console.log(soma(5, 6));
const pessoa = (user) => {
    console.log(user.age, user.nome);
};
const usuario = { nome: 'leonardo', age: 23 };
pessoa(usuario);
