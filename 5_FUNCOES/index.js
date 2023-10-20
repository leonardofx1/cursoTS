"use strict";
// void
const hello = () => {
    console.log('hello world');
};
hello();
// callback como argumento
const greeting = (name) => {
    console.log(`ola ${name}`);
};
const preGreeting = (f, userName) => {
    f(userName);
};
preGreeting(greeting, 'leonardo');
preGreeting(greeting, 'marcio');
// generic
const firstElement = (arr) => {
    return arr[0];
};
const arr1 = ['carro1', 'carro2'];
const arr2 = ['carro4', 'carro3'];
console.log(firstElement(arr1));
const mergeArray = (arr1, arr2) => {
    return [...arr1, ...arr2];
};
console.log(mergeArray(arr1, [{ name: 'leonardo' }]));
// rest
const sum = (...num) => {
    return num.reduce((acc, num) => acc + num, 0);
};
console.log(sum(11, 2, 5, 8, 4, 87, 800));
const fusca = {
    marca: 'vw',
    rodas: 4
};
console.log(fusca);
//  fusca.rodas = 6
