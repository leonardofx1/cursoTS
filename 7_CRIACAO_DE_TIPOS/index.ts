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

const createPerson  =  <T extends {age:number} >(person:T)=> {
    return {person}
}

const person = createPerson({age:22, name:'leoanrdo'})

console.log(person.person)
  