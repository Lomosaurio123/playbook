//Ejemplos de For Each

const numbers  = [2,31,2,1,3];
console.log("Imprimiendo los valores:")
numbers.forEach(num => console.log(num)); // Imprimiendo la lista 

let sum = 1;
numbers.forEach(num => sum += num)
console.log("El valor de la suma de la lista + 1 es: " + sum) // Imprimiendo la suma de valores + 1 

let multi = 1;
numbers.forEach(num => multi *= num)
console.log("El valor de la multiplicación de la lista es : " + multi)


//Ejemplos de Map

const names = ["Mauricio", "Juan", "Gaby", "Ali"];
const lower = names.map( (name) => name.toLowerCase())
console.log("Haciendo todos los nombres en minusculas:")
console.log(lower)

const lowerFirstLetter = names.map( (name) =>  name.toLowerCase().slice(0,1))
console.log("Mostrando la primer letra de cada nombre en minuscula:")
console.log(lowerFirstLetter)

const namesDifferentFromMauricio = names.map( function(name) {
    if(name !== "Mauricio") {
        return name
    }
}  )
console.log("Los nombres diferentes de Mauricio son: " + namesDifferentFromMauricio)

//Ejemplos de Filter 

const namesWithI = names.filter( (name) => name.includes('i') )
console.log("Los nombres que tienen i son: " + namesWithI)

const namesEndWithI = names.filter( (name) => name.endsWith('i') )
console.log("Los nombres que terminan en i son: " + namesEndWithI)

//Ejemplo de reduce

const sum_numbers = numbers.reduce( (contador,num) => contador + num, 0 )
console.log("La suma de los numeros es: " + sum_numbers)

//Ejemplo de Every

const allWithA = lower.every( (name) => name.includes('a') )
console.log("Todos los nombres tienen la letra a: " + allWithA)

//Ejemplos de Find

const calificaciones = [10, 9, 7, 5, 10, 8]
const fail = calificaciones.find( (cal) => cal <= 5 )
console.log("El primer reprobado tiene la calificación de : " + fail)

const eigth = calificaciones.find ( (cal) => cal === 8 )
console.log("Hay un 8 en las calificaciones: " + eigth)

//Ejemplo de FindIndex
const seven = calificaciones.findIndex( (cal) => cal === 7 )
console.log("La posición del primer 7 es: " + seven)

//Ejemplo de some

const failure = calificaciones.some( (cal) => cal <= 5 )
console.log("Al menos hay una calificación reprobatoria: " + failure)

//Ejemplos de sort
let random = [3,2,1];
random.sort()
console.log("Los numeros ordenados son: " +  random)

let alumnos = [
    { name : "Mau", age : 18 },
    { name : "Juan", age : 21 },
    { name : "Jorge", age : 10 },
    { name : "Rodrigo", age : 7 },
]

alumnos.sort( (a,b) => a.age - b.age )

console.log("Los alumnos ordenados por edades son: ")
console.log(alumnos)