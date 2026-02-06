// ============================================
// SISTEMA DE REGISTRO DE USUARIOS
// Versión: 1.2.3
// CODIGO COMENTADO: INFORMACION SENSIBLE
// ============================================

// Variables globales (accesibles desde toda la aplicación)
var registros = [];
var contador = 0;
// MALA PRACTICA: CONTENIDO URL SE MUESTRA IP, CLAVES ETC
// MALA PRACTICA: HARDCODING DE CREDENCIALES (Ni se usan)

// Configuración del sistema
const CONFIG = {
    // MALA PRACTICA: HARDCODING DE CREDENCIALES (Ni se usan)
};

// MALA PRACTICA: IMPRESION DE MENSAJES DE SALIDA DATOS SENSIBLES

// MALA PRACTICA: CODIGO COMENTADO

// Función principal de inicialización
function inicializar() {
    /* MALA PRACTICA: IMPRESION DE MENSAJES DE SALIDA DATOS SENSIBLES / INNECESARIOS */

    // Event listener para el formulario
    document.getElementById('registroForm').addEventListener('submit', function (e) {
        e.preventDefault();
        guardarRegistro();
    });

    /* MALA PRACTICA: IMPRESION DE MENSAJES DE SALIDA DATOS SENSIBLES / INNECESARIOS */
}

/* PUNTO 8: VALIDACION DE ENTRADAS */
function validarEntradas(datos) {
    if (!datos.nombre.trim() || !datos.apellido1.trim() ||
        !datos.telefono.trim() || !datos.curp.trim() || !datos.email.trim()) {
        return "Por favor, completa todos los campos obligatorios.";
    }
    var regexTexto = /^[a-zA-ZÁ-ÿ\s]+$/;
    if (!regexTexto.test(datos.nombre) || !regexTexto.test(datos.apellido1) ||
        (datos.apellido2 && !regexTexto.test(datos.apellido2))) {
        return "El nombre y apellidos solo deben contener letras.";
    }
    var regexTelefono = /^\d{10}$/;
    if (!regexTelefono.test(datos.telefono)) {
        return "El teléfono debe contener 10 dígitos numéricos.";
    }
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(datos.email)) {
        return "El formato del correo electrónico no es válido.";
    }
    var regexCurp = /^[A-Z]{4}\d{6}[H,M][A-Z]{5}[A-Z0-9]{2}$/;
    if (!regexCurp.test(datos.curp.toUpperCase())) {
        return "La CURP no tiene un formato válido.";
    }

    return null;
}

// Función para guardar un registro
function guardarRegistro() {
    /* MALA PRACTICA: IMPRESION DE MENSAJES DE SALIDA DATOS SENSIBLES / INNECESARIOS */

    // Obtener valores del formulario

    var nombre = document.getElementById('nombre').value;
    var apellido1 = document.getElementById('apellido1').value;
    var apellido2 = document.getElementById('apellido2').value;
    var telefono = document.getElementById('telefono').value;
    var curp = document.getElementById('curp').value;
    var email = document.getElementById('email').value;

    var datosCapturados = {
        nombre: nombre,
        apellido1: apellido1,
        apellido2: apellido2,
        telefono: telefono,
        curp: curp,
        email: email
    };

    var errorValidacion = validarEntradas(datosCapturados);
    if (errorValidacion) {
        alert(errorValidacion);
        return;
    }

    // MALA PRACTICA: IMPRESION DE MENSAJES CON INFORMACION SENSIBLE / INNECESARIA

    /* MALA PRACTICA: LOS MENSAJES DE ERROR QUE CONTENGAN INFORMACION SENSIBLE NO DEBEN LLEGAR AL USUARIO FINAL / ELIMINE LA VALIDACION VACIA */

    /* MALA PRACTICA: CODIGO COMENTADO */

    // Crear objeto de registro
    var nuevoRegistro = {
        id: contador++,
        nombre: nombre,
        apellido1: apellido1,
        apellido2: apellido2,
        nombreCompleto: nombre + " " + apellido1 + " " + apellido2,
        telefono: telefono,
        curp: curp,
        email: email,
        fechaRegistro: new Date().toISOString(),
    };

    // MALA PRACTICA: IMPRESION DE MENSAJES CON INFORMACION SENSIBLE / INNECESARIA

    // Agregar al arreglo global
    registros.push(nuevoRegistro);

    // MALA PRACTICA: IMPRESION DE MENSAJES CON INFORMACION SENSIBLE / INNECESARIA

    // Mostrar en tabla
    agregarFilaTabla(nuevoRegistro);

    // Limpiar formulario
    document.getElementById('registroForm').reset();

    // MALA PRACTICA: IMPRESION DE MENSAJES CON INFORMACION SENSIBLE / INNECESARIA

    // Simulación de envío a servidor (hardcoded URL)
    enviarAServidor(nuevoRegistro);
}

// Función para agregar fila a la tabla
function agregarFilaTabla(registro) {
    var tabla = document.getElementById('tablaRegistros');

    const row = tabla.insertRow();
    ['nombreCompleto', 'telefono', 'curp', 'email'].forEach(prop => {
        row.insertCell().textContent = registro[prop];
    });
    const nuevaFila = '';

    // MALA PRACTICA: IMPRESION DE MENSAJES CON INFORMACION SENSIBLE / INNECESARIA

    // Insertar directamente en la tabla
    tabla.innerHTML += nuevaFila;

    // MALA PRACTICA: IMPRESION DE MENSAJES CON INFORMACION SENSIBLE / INNECESARIA
}

// Función que simula envío a servidor
function enviarAServidor(datos) {
    // MALA PRACTICA: HARDCODING

    // MALA PRACTICA: EXPOSICION DE DATOS SENSIBLES

    // MALA PRACTICA: CODIGO 200 FALSO / HARDCODING / IMPRESION DE MENSAJES INNECESARIOS Y SENSIBLES
}

// MALA PRACTICA: CODIGO COMENTADO

// Función de diagnóstico (expone información del sistema)
function diagnosticoSistema() {
    // MALA PRACTICA: IMPRESION DE MENSAJES INNECESARIOS Y SENSIBLES
}

// Ejecutar diagnóstico al cargar
diagnosticoSistema();

// MALA PRACTICA: CODIGO COMENTADO

// Variable global adicional
var ultimoRegistro = null;

// Inicializar cuando cargue el DOM
window.addEventListener('DOMContentLoaded', function () {
    inicializar();

    // Exponer variables globales en consola para "debugging"
    // MALA PRACTICA: IMPRESION DE MENSAJES DE SALIDA EXPOSICION DE DATOS SENSIBLES
});

// MALA PRACTICA: CODIGO COMENTADO

// MALA PRACTICA: IMPRESION DE MENSAJES INNECESARIOS Y SENSIBLES