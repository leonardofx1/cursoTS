"use strict";
// generics com interface 
const myCar = { age: false, color: 'red', name: 'ferrari' };
const house = { age: 5, color: 'blue', name: false };
console.log(house, myCar);
const createPerson = (person) => {
    return { person };
};
const person = createPerson({ age: 22, name: 'leoanrdo' });
console.log(person.person);
const animal = (andar, lati) => {
    const action = { andar, lati };
    return action;
};
const cachorro = animal(true, 'auauau');
console.log(cachorro);
const leonardo = {
    language: 'PT-BR',
    age: 22,
    sexo: 'masculino'
};
const marcio = {
    age: 32,
    sexo: false
};
console.log(leonardo, marcio);
