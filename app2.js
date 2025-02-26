// Selecciona el formulario y agrega un listener para el evento submit
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene la recarga de la página

    // Captura los valores de los inputs
    const nombre = document.getElementById('name').value;
    const edad = document.getElementById('age').value;
    const lenguaje = document.getElementById('language').value;

    // Construye y muestra el mensaje inicial
    const mensaje = `Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`;
    document.getElementById('respuesta').innerText = mensaje;

    // Muestra el modal con la pregunta
    showModal(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para sí o 2 para no.`);
});

// Función para mostrar el modal
function showModal(message) {
    const modal = document.getElementById('modal');
    document.getElementById('modalMessage').innerText = message;
    modal.style.display = 'block';
}

// Función para manejar la respuesta del modal
function handleModal() {
    const inputValue = document.getElementById('modalInput').value;
    
    // Verifica la respuesta del usuario y construye el mensaje
    let response;
    if (inputValue === "1") {
        response = `¡Genial! Me alegra que disfrutes programar en ${document.getElementById('language').value}`;
    } else if (inputValue === "2") {
        response = "¡Interesante! Quizás te guste más otro lenguaje.";
    } else {
        response = "Respuesta no válida. Por favor, responde con el número 1 para sí o 2 para no.";
    }
    
    alert(response);

    // Oculta el modal
    document.getElementById('modal').style.display = 'none';
}

  
  
  