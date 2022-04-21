const objeto = {} //Objeto vacio 

const objeto_propiedades_iguales = {
    name : "Mauricio",
    carrera: "Inteligencia Artificial"
}

const objeto_propiedades_diferentes = {
    name : "Mauricio",
    edad : 21,
    carrera : "Ingeniería informatica"
}

const objeto_metodos = {
    name : "Pedro",
    edad : 21,
    showPersona: function() {
        console.log(`${this.name} tiene ${this.edad} años`)
    }
}

const objeto_parametros = {
    name : "Juan",
    edad: 18,
    saludar: function(persona) {
        console.log(`${this.name} tiene ${this.edad} años saluda a ${persona}`)
    } 
}

console.log(objeto)
console.log(objeto_propiedades_iguales)
console.log(objeto_propiedades_diferentes)
objeto_metodos.showPersona()
objeto_parametros.saludar("Mauricio")