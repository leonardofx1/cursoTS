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
// props opcionais
const casa = (quartos, color) => {
    console.log(quartos, color);
};
casa(2, 'red');
casa(5);
const carro = (ano, cor) => {
    if (cor !== undefined) {
        console.log(cor, ano);
    }
    else {
        console.log(ano);
    }
};
carro(2023);
carro(2020, 'blue');
// Union types
const time = (jogador) => {
    if (typeof jogador === 'string')
        return `espero que goste do nosso time ${jogador}`;
    else {
        return 'em busca de um jovem talento';
    }
};
console.log(time('leonardo'));
console.log(time(false));
const computador = {
    marca: 'dell',
    memoria: "hd",
    memoriaRam: 2
};
console.log(computador);
const club = (jogador) => {
    if (typeof jogador === 'string')
        return `espero que goste do nosso time ${jogador}`;
    else {
        return 'em busca de um jovem talento';
    }
};
console.log(club('leonardo'));
console.log(club('felipe'));
const aluno = {
    material: "notebook",
    age: 23,
    name: 'leonardo',
    sexo: 'M'
};
console.log(aluno);
//bigint
let num;
num = 1000n;
console.log(num);
