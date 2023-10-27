// generics com interface 

interface Objt<T, U, Q> {
    name: Q
    color: T
    age: U
}

type Car = Objt<string, boolean, string>
type House = Objt<string, number, boolean>

const myCar: Car = { age: false, color: 'red', name: 'ferrari' }
const house: House = { age: 5, color: 'blue', name: false }
console.log(house, myCar)

const createPerson = <T extends { age: number }>(person: T) => {
    return { person }
}

const person = createPerson({ age: 22, name: 'leoanrdo' })

console.log(person.person)

const animal = <T extends boolean | string, U extends boolean | string>(andar: T, lati:U ):object => {
    const action = {andar, lati}
    return action
}

const cachorro:object = animal(true,'auauau' )
console.log(cachorro)

interface Human <T extends string | boolean>{
    language?:string
    age:number
    sexo:T
}
type PersonLeonardo = Human<string>
type PersonMarcio = Human<false>

const leonardo:PersonLeonardo ={
    language:'PT-BR',
    age:22,
    sexo:'masculino'
}

const marcio:PersonMarcio = {
    age:32,
    sexo:false
}



console.log(leonardo, marcio)