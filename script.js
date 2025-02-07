// Contraseña predefinida
const CONTRASENA = "0119"; // Cambia esto por la contraseña que desees

// Variable para almacenar la contraseña ingresada
let contrasenaIngresada = "";

// Función para agregar números al display
function agregarNumero(numero) {
    const textoCodigo = document.getElementById('texto-codigo');
    const display = document.querySelector('.display');

    // Si el texto actual es "Contraseña", lo limpiamos
    if (textoCodigo.textContent === 'Contraseña') {
        textoCodigo.textContent = '';
    }

    // Agregamos el número al texto (en modo contraseña)
    textoCodigo.textContent += '*'; // Usamos un punto como carácter de contraseña

    // Almacenamos el número real en la variable
    contrasenaIngresada += numero;

    // Añadimos la clase para modo de contraseña
    display.classList.add('modo-password');

    // Validar la clave cuando se ingrese la longitud correcta
    if (contrasenaIngresada.length === CONTRASENA.length) {
        if (contrasenaIngresada === CONTRASENA) {
            mostrarContador(); // Mostrar el contador si la contraseña es correcta
        } else {
            alert("Contraseña incorrecta. Inténtalo de nuevo."); // Mostrar un mensaje de error
            textoCodigo.textContent = 'Contraseña'; // Restablecer el texto
            display.classList.remove('modo-password'); // Quitar el modo de contraseña
            contrasenaIngresada = ""; // Reiniciar la contraseña ingresada
        }
    }
}

// Función para mostrar el contador y ocultar la caja fuerte
function mostrarContador() {
    const container = document.querySelector('.container');
    const seccionContador = document.getElementById('seccion-contador');

    // Ocultar la caja fuerte
    container.style.display = 'none';

    // Mostrar el contador
    seccionContador.style.display = 'block';
}

// Función para actualizar el contador
function actualizarContador() {
    const fechaInicio = new Date('2025-01-19'); // Cambia esta fecha por la que desees
    const ahora = new Date();

    const diferencia = ahora - fechaInicio;

    const anos = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor((diferencia % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor((diferencia % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById('anos').textContent = anos;
    document.getElementById('meses').textContent = meses;
    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
}

// Actualizar el contador cada segundo
setInterval(actualizarContador, 1000);

// Función para mostrar la galería de fotos
function mostrarGaleria() {
    const seccionContador = document.getElementById('seccion-contador');
    const seccionGaleria = document.getElementById('seccion-galeria');
    const seccionCarta = document.getElementById('seccion-carta');

    // Ocultar otras secciones
    seccionContador.style.display = 'none';
    seccionCarta.style.display = 'none';

    // Mostrar la galería
    seccionGaleria.style.display = 'block';
}

// Función para mostrar la carta
function mostrarCarta() {
    const seccionGaleria = document.getElementById('seccion-galeria');
    const seccionCarta = document.getElementById('seccion-carta');

    // Ocultar la galería
    seccionGaleria.style.display = 'none';

    // Mostrar la carta
    seccionCarta.style.display = 'block';
}

