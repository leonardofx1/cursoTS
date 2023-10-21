// ex 1

function greet(name:string):string {
    return "Olá, " + name + "!";
}

let user:string = "João";
console.log(greet(user));
// ex 2

class Pessoa {
    nome:string
    idade:number
    constructor(nome:string, idade:number) {
        this.nome = nome;
        this.idade = idade;
    }

    cumprimentar():string {
        return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
    }
}

const joao = new Pessoa('João', 25);
console.log(joao.cumprimentar());

const maria = new Pessoa('Maria', 30);
console.log(maria.cumprimentar());
//ex 3
function calcularArea(raio:number) {
    return Math.PI * raio * raio;
}

let raio:number = 5;
console.log(`A área do círculo é ${calcularArea(raio)}`);

// ex 4
function delay(ms:number) {
    return new Promise<void>(resolve => setTimeout(resolve, ms));
}

async function delayedGreeting(name:string) {
    console.log('Preparando para cumprimentar...');
    await delay(2000);
    console.log(`Olá, ${name}!`);
}

delayedGreeting('João');

