
// ways to make an object/class
// 1. object literal

const laClase = {
    atributos: 3,
    metodos: function() {
        console.log('Hola')
    }
}
//2. Factory function

 function laClase() {
    return {
        atributos: 3,
        metodos: function() {
            console.log('Hola')
        }
    }
}

const  nuevaClase = laClase()

// 3. constructor function

function LaClase() {
    this.atributos = 3
    this.metodos = function() {
        console.log('Hola')
    }
}
//const nueva clase = new LaClase()

// 4. Object.create

const laClase = Object.create(null)
laClase.atributos = 3
laClase.metodos = function() {
    console.log('Hola')
}


// 5. Class
 class LaClase {
    constructor() {
        this.atributos = 3
        this.metodos = function() {
            console.log('Hola')
        }
    }
}

// 6. Prototypal Inheritance
