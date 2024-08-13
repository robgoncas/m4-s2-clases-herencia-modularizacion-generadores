function* preguntarCita() {
    yield "¿Cuál es tu nombre?";
    yield "¿Qué día prefieres para la consulta?";
    yield "¿A qué hora?";
}

const generador = preguntarCita();
const respuestas = [];

function hacerPregunta(pregunta) {
    // Mostrar la pregunta en consola
    console.log(pregunta); 

    setTimeout(() => {
        const respuesta = generarRespuesta(pregunta);
        console.log(`Respuesta: ${respuesta}`);
        // Guardar la respuesta
        respuestas.push(respuesta); 

        // Obtener la siguiente pregunta
        const siguientePregunta = generador.next(); 

        if (!siguientePregunta.done) {
            // Hacer la siguiente pregunta
            hacerPregunta(siguientePregunta.value); 
        } else {
            // Mostrar las respuestas almacenadas
            mostrarResultado(); 
        }
    }, 1000);
}

function generarRespuesta(pregunta) {

    if (pregunta.includes("nombre")) {
        return "Roberto";
    } else if (pregunta.includes("fecha")) {
        return "15 de agosto";
    } else if (pregunta.includes("hora")) {
        return "10:00 AM";
    }
    return "N/A";
}

function mostrarResultado() {

    console.log("\nResumen de la cita:");
    console.log(`Nombre: ${respuestas[0]}`);
    console.log(`Fecha: ${respuestas[1]}`);
    console.log(`Hora: ${respuestas[2]}`);

}

function mostrarResultadoES6() {

    console.log(`
      Resumen de la cita:
      Nombre: ${respuestas.nombre}
      Fecha: ${respuestas.fecha}
      Hora: ${respuestas.hora}
    `);
    
  }
// Iniciar el proceso de preguntas
hacerPregunta(generador.next().value);
