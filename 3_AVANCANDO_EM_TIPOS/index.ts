// arrays

const numbers : number[] = [1, 2]

const nomes : string[] = ['marcos', 'felipe']

console.log(typeof nomes)

// outra sintaxe

const carros : Array<string> = ['ferrari'] 

// any

const varios : any = ['leonardo', 2023, ['ola']]

// function 

const soma = (a:number, b:number):number => {

    return a + b
}

console.log(soma(5, 6))

const pessoa = (user:{nome:string, age:number})=> {

    console.log(user.age, user.nome)
}

const usuario = {nome:'leonardo', age:23}

pessoa(usuario)