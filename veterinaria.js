// Clase base
class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método que muestra información básica del animal
    describir() {
        return `${this.nombre} tiene ${this.edad} años.`;
    }

    // Método que hace un sonido genérico
    hacerSonido() {
        return `${this.nombre} hace un sonido.`;
    }
}

// Clase Perro que hereda de Animal
class Perro extends Animal {
    constructor(nombre, edad, raza) {
        // Llama al constructor de la clase base
        super(nombre, edad);
        this.raza = raza;
    }

    // Sobrescribe el método hacerSonido
    hacerSonido() {
        return `${this.nombre} ladra.`;
    }
}

// Clase Gato que hereda de Animal
class Gato extends Animal {
    constructor(nombre, edad, color) {
        // Llama al constructor de la clase base
        super(nombre, edad);
        // Atributo específico de Gato
        this.color = color;
    }

    // Sobrescribe el método hacerSonido
    hacerSonido() {
        return `${this.nombre} maúlla.`;
    }
}

// Ejecución
const miPerro = new Perro('Rex', 5, 'Labrador');
console.log(miPerro.describir());
console.log(miPerro.hacerSonido());

const miGato = new Gato('Miau', 3, 'Blanco');
console.log(miGato.describir());
console.log(miGato.hacerSonido());
