"use strict";
// readonly
const fusca = {
    marca: 'vw',
    rodas: 4
};
console.log(fusca);
const casa1 = {
    color: 'red',
    price: 2000
};
const casa2 = {
    price: 50000
};
console.log(casa1, casa2);
const readPrice = (casa) => {
    console.log(casa.price);
};
readPrice(casa1);
const time = {
    age: 20,
    sold: 25,
};
const cidade = {
    name: 'Rio de janeiro'
};
const saopaulo = {
    name: 'São Paulo',
    population: 22620000
};
console.log(saopaulo, cidade);
const myDog = {
    age: 5,
    breed: 'vira lata'
};
// readonly array
const arr = ['ola', 'hello'];
//arr[0] = 'casa'
console.log(arr);
// mais generic
const f = (arr) => {
    return arr.map(item => `fruta gostosa ${item} `);
};
const array = ['maça', 'uva', 'manga'];
console.log(f(array).forEach(fruta => console.log(fruta)));
const A = (obj) => {
    obj.price > 25000 ? console.log('o valor do apartamento é maior que R$25000 ') : console.log(`o valor de ${obj.price} não é maior que R$ 25000`);
    return obj;
};
const apartamento = {
    price: 30000,
    color: 'green'
};
A(apartamento);
