//creación de una clase vacia

class Casa {
}

console.log("Leemos la clase casa: " + Casa)


//Instanciar objetos de una clase

class Persona {
}

const persona1 = new Persona()
console.log("Llamamos a la instancia de la clase persona: ")
console.log(persona1)

//Instanciar objeto con atributos

class Alumno {
    constructor(nombre, edad, calificacion){
        this.nombre = nombre
        this.edad = edad
        this.calificacion = calificacion
    }
}

const alumno1 = new Alumno("Juan",18,9.2)
console.log('Instancia del alumno: ')
console.log(alumno1)

// Métodos en los objetos 

class AlumnoM {
    constructor(nombre, edad, calificacion) {
        this.nombre = nombre
        this.edad = edad
        this.calificacion = calificacion
    }

    //Creación del método
    toStringAlumnoM(){
        console.log(`El alumno ${this.nombre} con la edad de ${this.edad} tiene la calificación de ${this.calificacion}`)
    }
}

const alumnoM1 = new AlumnoM("Mauricio", 21, 9.5)
alumnoM1.toStringAlumnoM()

//Atributos con valores por default

class AlumnoMA {
    constructor(nombre, edad, calificacion) {
        this.nombre = nombre
        this.edad = edad
        this.calificacion = calificacion
        this.curso = "LaunchX" //Atributo con valor definido
    }

    //Creación del método
    toStringAlumnoM(){
        console.log(`El alumno ${this.nombre} con la edad de ${this.edad} tiene la calificación de ${this.calificacion} esta en el curso de ${this.curso}`)
    }
}

const alumnoMA1 = new AlumnoMA("Mauricio", 21, 9.5)
alumnoMA1.toStringAlumnoM()

//Getters 
class Escuela {
    constructor(nombre) {
        this.nombre = nombre
    }
    get getNombre() {
        return this.nombre
    }
}

const escuela1 = new Escuela("IPN")
console.log("La escuela es: " + escuela1.getNombre)

//Setters

class Curso {
    constructor(nombre, cantidadAlumnos) {
        this.nombre = nombre
        this.cantidadAlumnos = cantidadAlumnos
    }

    get getNombre() {
        return this.nombre
    }

    get getCantidadAlumnos() {
        return this.cantidadAlumnos
    }

    set setNombre(nombre) {
        this.nombre = nombre
    }

    set setCantidadAlumnos(cantidadAlumnos){
        this.cantidadAlumnos = cantidadAlumnos
    }
}

const curso1 = new Curso("LaunchX",10000)
console.log(`El curso ${curso1.getNombre} tiene la capacidad de ${curso1.getCantidadAlumnos}`)
curso1.setNombre = "Innova"
console.log(`El curso ${curso1.getNombre} tiene la capacidad de ${curso1.getCantidadAlumnos}`)

//Método static

class Materias {
    static getMaterias() {
        return ["Github","C++","Python"]
    }
}

console.log("Las materias son: " + Materias.getMaterias())

//Herencia

class PersonaH {
    constructor(nombre,edad){
        this.nombre = nombre
        this.edad = edad
    }

    get getNombre() {
        return this.nombre
    }

    get getEdad() {
        return this.edad
    }
}

class AlumnoH extends PersonaH {
    constructor(nombre,edad,curso) {
        super(nombre,edad)
        this.curso = curso
    }
}

const alumnoh = new AlumnoH("Mauricio",21,"Launch")
console.log(`El alumno ${alumnoh.getNombre} con la edad de ${alumnoh.getEdad} esta en el curso ${alumnoh.curso}`)

//Overriding methods

class PersonaO {
    constructor(nombre,edad){
        this.nombre = nombre
        this.edad = edad
    }

    getPersona() {
        return `La persona ${this.nombre} tiene la edad de ${this.edad}`
    }
}

class AlumnoO extends PersonaO {
    constructor(nombre,edad,curso) {
        super(nombre,edad)
        this.curso = curso
    }

    getAlumno() {
        let persona = this.getPersona()
        
        return `${persona} esta en el curso ${this.curso}`
    }
}

const alumnoO = new AlumnoO("Mauricio",23,"Lauchx")
console.log(alumnoO.getPersona())
console.log(alumnoO.getAlumno())