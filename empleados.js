
class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }

    describir() {
        return `${this.nombre} tiene un salario de ${this.salario} USD.`;
    }

    calcularSalarioAnual() {
        return this.salario * 12;
    }
}

class Desarrollador extends Empleado {
    constructor(nombre, salario, lenguaje) {
        // Llama al constructor de la clase base
        super(nombre, salario); 
        // Atributo específico de Desarrollador
        this.lenguaje = lenguaje; 
    }

    // Método específico de Desarrollador
    programar() {
        return `${this.nombre} está programando en ${this.lenguaje}.`;
    }
}

// Clase Diseñador que hereda de Empleado
class Diseñador extends Empleado {
    constructor(nombre, salario, herramienta) {
        // Llama al constructor de la clase base
        super(nombre, salario); 
        // Atributo específico de Diseñador
        this.herramienta = herramienta; 
    }

    // Método específico de Diseñador
    diseñar() {
        return `${this.nombre} está diseñando usando ${this.herramienta}.`;
    }
}

// Ejecución
const dev = new Desarrollador('Laura', 3000, 'JavaScript');
console.log(dev.describir());
console.log(dev.programar()); 
console.log(`Salario anual: ${dev.calcularSalarioAnual()} USD`); 

const designer = new Diseñador('Carlos', 2800, 'Photoshop');
console.log(designer.describir());
console.log(designer.diseñar()); 
console.log(`Salario anual: ${designer.calcularSalarioAnual()} USD`);
