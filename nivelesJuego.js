function* subirDeNivel() {
    console.log("¡Bienvenido a Lord of Legends!");

    yield {
        nivel: 1,
        habilidades: ["Ataque básico"],
        mensaje: "Has alcanzado el Nivel 1: Puedes usar Ataque básico."
    };

    yield {
        nivel: 2,
        habilidades: ["Ataque básico", "Defensa básica"],
        mensaje: "Has alcanzado el Nivel 2: Ahora puedes usar Defensa básica."
    };

    yield {
        nivel: 3,
        habilidades: ["Ataque básico", "Defensa básica", "Curación básica"],
        mensaje: "Has alcanzado el Nivel 3: Ahora puedes usar Curación básica."
    };

    yield {
        nivel: 4,
        habilidades: ["Ataque básico", "Defensa básica", "Curación básica", "Ataque avanzado"],
        mensaje: "Has alcanzado el Nivel 4: Ahora puedes usar Ataque avanzado."
    };

    yield {
        nivel: 5,
        habilidades: ["Ataque básico", "Defensa básica", "Curación básica", "Ataque avanzado", "Magia elemental"],
        mensaje: "¡Has alcanzado el Nivel 5! Ahora puedes usar Magia elemental."
    };

    return "¡Has alcanzado el nivel máximo! ¡Eres un verdadero Lord of Legends!";
}

// Crear el generador
const generadorDeNiveles = subirDeNivel();

// Simular el proceso de subir de nivel
let resultado;

do {
    // Subir de nivel
    resultado = generadorDeNiveles.next(); 
    if (!resultado.done) {
        // Mostrar el mensaje del nuevo nivel
        console.log(resultado.value.mensaje); 
        console.log(`Habilidades disponibles: ${resultado.value.habilidades.join(", ")}`);
        console.log("-----");
    }
} while (!resultado.done);

// Mensaje final al alcanzar el nivel máximo
console.log(resultado.value); 
