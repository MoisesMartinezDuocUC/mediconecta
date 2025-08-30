console.log("JS cargado");

const form = document.querySelector("form");
const campos = {
    nombre: {
        required: true,
        regex: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{10,70}$/,
        error: {
            required: "El nombre es obligatorio.",
            length: "El nombre debe tener entre 10 y 70 caracteres.",
            format: "Solo se permiten letras, espacios, eñes y tildes."
        }
    },
    nombreUsuario: {
        required: true,
        regex: /^[A-Za-z0-9_]{3,50}$/,
        error: {
            required: "El nombre de usuario es obligatorio.",
            length: "El nombre debe tener entre 3 y 50 caracteres.",
            format: "No se permiten caracteres especiales, espacios, comas ni puntos."
        }
    },
    email: {
        required: true,
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        error: {
            required: "El correo electrónico es obligatorio.",
            format: "Formato de correo electrónico inválido."
        }
    },
    contrasena: {
        required: true,
        regex: /^(?=.*[A-Z])(?=.*[0-9])[A-Za-zÁÉÍÓÚáéíóúÑñ0-9]{12,24}$/,
        error: {
            required: "La contraseña es obligatoria.",
            length: "La contraseña debe tener una longitud de entre 12 y 24 caracteres.",
            format: "La contraseña debe tener al menos 1 número y una letra en mayúscula."
        }
    },
    confirmarContrasena: {
        required: true,
        error: {
            required: "Debe confirmar la contraseña.",
            match: "Las contraseñas no coinciden"
        }
    },
    fechaNacimiento: {
        required: true,
        error: {
            required: "Debe ingresar la fecha de nacimiento.",
        }
    },
    direccion: {
        required: false,
        regex: /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s,.-]+$/,
        error: {
            format: "Solo se permiten letras, espacios, eñes, tildes, puntos, comas y dígitos."
        }
    }
};

function mostrarError(id, mensaje) {
    const input = document.getElementById(id);
    input.classList.add("is-invalid");
    document.getElementById("error-" + id).textContent = mensaje;
}

function limpiarError(id) {
    const input = document.getElementById(id);
    input.classList.remove("is-invalid");
    document.getElementById("error-" + id).textContent = "";
}

// Evento submit
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let valido = true;

    // Limpiar errores previos
    Object.keys(campos).forEach(campo => limpiarError(campo));

    // Validación nombre
    const nombre = form.nombre.value.trim();
    if (campos.nombre.required && !nombre) {
        mostrarError("nombre", campos.nombre.error.required);
        valido = false;
    } else if (nombre.length < 10 || nombre.length > 70) {
        mostrarError("nombre", campos.nombre.error.length);
        valido = false;
    } else if (!campos.nombre.regex.test(nombre)) {
        mostrarError("nombre", campos.nombre.error.format);
        valido = false;
    }

    // Validación nombre de usuario
    const nombreUsuario = form.nombreUsuario.value.trim();
    if (campos.nombreUsuario.required && !nombreUsuario) {
        mostrarError("nombreUsuario", campos.nombreUsuario.error.required);
        valido = false;
    } else if (nombreUsuario.length < 3 || nombreUsuario.length > 50) {
        mostrarError("nombreUsuario", campos.nombreUsuario.error.length);
        valido = false;
    } else if (!campos.nombreUsuario.regex.test(nombreUsuario)) {
        mostrarError("nombreUsuario", campos.nombreUsuario.error.format);
        valido = false;
    }

    // Validación email
    const email = form.email.value.trim();
    if (campos.email.required && !email) {
        mostrarError("email", campos.email.error.required);
        valido = false;
    } else if (!campos.email.regex.test(email)) {
        mostrarError("email", campos.email.error.format);
        valido = false;
    }

    // Validación contraseña
    const contrasena = form.contrasena.value.trim();
    if (campos.contrasena.required && !contrasena) {
        mostrarError("contrasena", campos.contrasena.error.required);
        valido = false;
    } else if (contrasena.length < 12 || contrasena.length > 24) {
        mostrarError("contrasena", campos.contrasena.error.length);
        valido = false;
    } else if (!campos.contrasena.regex.test(contrasena)) {
        mostrarError("contrasena", campos.contrasena.error.format);
        valido = false;
    }

    // Validación confirmación contraseña
    const confirmarContrasena = form.confirmarContrasena.value.trim();
    if (campos.confirmarContrasena.required && !confirmarContrasena) {
        mostrarError("confirmarContrasena", campos.confirmarContrasena.error.required);
        valido = false;
    } else if (confirmarContrasena !== contrasena) {
        mostrarError("confirmarContrasena", campos.confirmarContrasena.error.match);
        valido = false;
    }

    // Validación fecha de nacimiento
    const fechaNacimiento = form.fechaNacimiento.value.trim();
    if (campos.fechaNacimiento.required && !fechaNacimiento) {
        mostrarError("fechaNacimiento", campos.fechaNacimiento.error.required);
        valido = false;
    } else {
    const [anio, mes, dia] = fechaNacimiento.split('-').map(Number);
    const fechaIngresada = new Date(anio, mes - 1, dia); 
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0); 

    if (fechaIngresada > hoy) {
        mostrarError("fechaNacimiento", "La fecha no puede ser futura.");
        valido = false;
    }
}


    // Validación direccion (opcional)
    const direccion = form.direccion.value.trim();
    if (direccion && !campos.direccion.regex.test(direccion)) {
        mostrarError("direccion", campos.direccion.error.format);
        valido = false;
    }

    if (valido) {
        form.submit();
    }
});

// Validación en tiempo real
Object.keys(campos).forEach(campo => {
    document.getElementById(campo).addEventListener("input", function () {
        limpiarError(campo);
    });
});
