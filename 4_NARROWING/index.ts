//typeof type guard
type Notas = {
    nota1: number | string,
    nota2: number | string
}

const minhasNotas: Notas = {
    nota1: 10,
    nota2: 8
}

const notas:Notas = {
    nota1:'10',
    nota2:'25'
}

const notasInvalid:Notas = {
    nota1:'10',
    nota2:10
}

const soma = (val: Notas): number | string => {
    if (typeof val.nota1 === 'string' && typeof val.nota2 === 'string') {
        return parseFloat(val.nota1) + parseFloat(val.nota2)
    } else if (typeof val.nota1 === 'number' && typeof val.nota2 === 'number') {
        return val.nota1 + val.nota2
    }
    else {
        return 'valores inválidos'
    }
}

console.log(soma(minhasNotas))
console.log(soma(notas))
console.log(soma(notasInvalid))

//instanceOf

class User  {
    name
    constructor( name: string) {
        this.name  = name
    }
}

class Admin extends User {
    isAdmin
    constructor(isAdmin:boolean,name:string, ){
    super(name)
    this.isAdmin = isAdmin

    }
}

const leonardo = new Admin(true, 'leonardo')
const marcos = new User('marcos')



const greeting = (user:object) => { 
    if(user instanceof Admin) {
         console.log(`ola ${user.name} gostaria de ver seus arquivos`)
    }
    else if (user instanceof User){
        console.log(`ola ${user.name} `)
    }
}

greeting(marcos)
greeting(leonardo)
console.log(leonardo, marcos)

// in

class Person {

    name:string;
    age?: number;
    constructor(name:string, age?: number) {
        this.name = name
        if(age !== undefined) {
            this.age = age
        }
    }
}

const taty = new Person('taty')

const neto = new Person('neto', 63)
if (taty.age === undefined) {
    delete taty.age;
}

const agePerson = (person:Person)=> {
    if('age' in person) {
        console.log(person.age, person)
    }else{
        console.log('age invalid')
    }
}



agePerson(neto)
agePerson(taty)