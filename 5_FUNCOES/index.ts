// void
const hello = (): void => {
    console.log('hello world')
}
hello()

// callback como argumento

const greeting = (name: string): void => {
    console.log(`ola ${name}`)
}

const preGreeting = (f: (name: string) => void, userName: string): void => {
    f(userName)
}

preGreeting(greeting, 'leonardo')
preGreeting(greeting, 'marcio')

// generic
const firstElement = <T>(arr: T[]): T => {
    return arr[0]
}

const arr1 = ['carro1', 'carro2']
const arr2 = ['carro4', 'carro3']

console.log(firstElement(arr1))

const mergeArray = <T, U>(arr1: T[], arr2: U[]) => {
    return [...arr1, ...arr2]
}

console.log(mergeArray(arr1,[{name:'leonardo'}]))