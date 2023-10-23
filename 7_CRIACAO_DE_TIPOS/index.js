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
