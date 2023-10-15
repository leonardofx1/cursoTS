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

// props opcionais

const casa = (quartos : number, color ?: string) => {
    console.log(quartos, color)
}
casa(2, 'red')
casa(5)

const carro = (ano:number, cor?: string) => {
    if(cor !== undefined) {
        console.log(cor, ano)
    }
    else {
        console.log(ano)
    }
}

carro(2023)

carro(2020, 'blue')

// Union types

const time = (jogador: string | false) : string  => {
if (typeof jogador === 'string')
return `espero que goste do nosso time ${jogador}`
else {
    return 'em busca de um jovem talento'
}

}

console.log(time('leonardo'))
console.log(time(false))

// type alias

type Jogador = string | false
type Computador ={
    memoriaRam:number,
    memoria: 'ssd' | 'hd',
    marca:string
}

const computador: Computador = {
     marca:'dell',
     memoria:"hd",
     memoriaRam:2
} 
console.log(computador)
const club = (jogador: Jogador) : string  => {
if (typeof jogador === 'string')
return `espero que goste do nosso time ${jogador}`
else {
    return 'em busca de um jovem talento'
}

}

console.log(club('leonardo'))
console.log(club('felipe'))

// interface 

interface Aluno {
    material: 'caderno' | 'notebook'
    age: number
    name:string
}

const aluno:Aluno = {
    material:"notebook",
    age:23,
    name:'leonardo',
    sexo:'M'
}

console.log(aluno)

interface Aluno {
    sexo: 'F' | 'M'
}

//bigint

let num:bigint

num = 1000n

console.log(num)