class Pokemon {
    //Creación del constructor
    constructor(name) {
        this.name = name
    }

    //Creación del método SayHello()
    sayHello() {
        console.log(`Mi pokemon ${this.name} te saluda!!!`)
    }

    //Creación del método SayMessage()
    sayMessage(message) {
        console.log(`Mi pokemon ${this.name} dice: ${message}`)
    }

}

module.exports = Pokemon