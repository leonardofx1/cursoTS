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
