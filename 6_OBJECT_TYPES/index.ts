// readonly

interface Car {
    marca: string
    readonly rodas: number
}

const fusca: Car = {
    marca: 'vw',
    rodas: 4
}

console.log(fusca)
//  fusca.rodas = 6

// prop opcional interface

interface Casa {
    color?: string
    price: number
}

const casa1: Casa = {
    color: 'red',
    price: 2000
}

const casa2: Casa = {
    price: 50000
}

console.log(casa1, casa2)

const readPrice =(casa:Casa)=> {
    console.log(casa.price)
} 

readPrice(casa1)

// index signature

interface I {
    [index:string] : number
}

const time:I = {
    age:20,
    sold:25,
} 

// time.name = 'leonardo'

// extends interface

interface City {
    name:string
}

interface SaoPaulo extends City {
    population:number
}

const cidade:City = { 
    name:'Rio de janeiro'
}

const saopaulo:SaoPaulo = {
    name:'São Paulo',
    population: 22620000
}


console.log(saopaulo, cidade)

// intersectio type

interface Animal {
    age:number
}

interface Dog {
    breed:string
}

type IntersectionType = Animal & Dog

const myDog:IntersectionType = {
    age:5,
    breed:'vira lata'
}

// readonly array

const arr: ReadonlyArray<string> =['ola', 'hello']

//arr[0] = 'casa'
console.log(arr)