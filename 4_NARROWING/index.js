"use strict";
const minhasNotas = {
    nota1: 10,
    nota2: 8
};
const notas = {
    nota1: '10',
    nota2: '25'
};
const notasInvalid = {
    nota1: '10',
    nota2: 10
};
const soma = (val) => {
    if (typeof val.nota1 === 'string' && typeof val.nota2 === 'string') {
        return parseFloat(val.nota1) + parseFloat(val.nota2);
    }
    else if (typeof val.nota1 === 'number' && typeof val.nota2 === 'number') {
        return val.nota1 + val.nota2;
    }
    else {
        return 'valores inválidos';
    }
};
console.log(soma(minhasNotas));
console.log(soma(notas));
console.log(soma(notasInvalid));
//instanceOf
class User {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Admin extends User {
    isAdmin;
    constructor(isAdmin, name) {
        super(name);
        this.isAdmin = isAdmin;
    }
}
const leonardo = new Admin(true, 'leonardo');
const marcos = new User('marcos');
const greeting = (user) => {
    if (user instanceof Admin) {
        console.log(`ola ${user.name} gostaria de ver seus arquivos`);
    }
    else if (user instanceof User) {
        console.log(`ola ${user.name} `);
    }
};
greeting(marcos);
greeting(leonardo);
console.log(leonardo, marcos);
// in
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        if (age !== undefined) {
            this.age = age;
        }
    }
}
const taty = new Person('taty');
const neto = new Person('neto', 63);
if (taty.age === undefined) {
    delete taty.age;
}
const agePerson = (person) => {
    if ('age' in person) {
        console.log(person.age, person);
    }
    else {
        console.log('age invalid');
    }
};
agePerson(neto);
agePerson(taty);
