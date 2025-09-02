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
    genero: {
        required: true,
        error: {
            required: "Debe seleccionar un género."
        }
    },
    prevision: {
        required: true,
        error: {
            required: "La previsión médica es obligatoria."
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
        regex: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9ÁÉÍÓÚáéíóúÑñ])[A-Za-zÁÉÍÓÚáéíóúÑñ0-9^$*.{}?!"%&/()=¿¡#@,:;_-]{12,24}$/,
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

// Funciones de mostrar y limpiar errores
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

    // Validación género
    const genero = form.genero.value.trim();
    if (!genero) {
        mostrarError("genero", campos.genero.error.required);
        valido = false;
    }

    // Validación previsión
    const prevision = form.prevision.value.trim();
    if (!prevision) {
        mostrarError("prevision", campos.prevision.error.required);
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

    // Confirmar contraseña
    const confirmarContrasena = form.confirmarContrasena.value.trim();
    if (campos.confirmarContrasena.required && !confirmarContrasena) {
        mostrarError("confirmarContrasena", campos.confirmarContrasena.error.required);
        valido = false;
    } else if (confirmarContrasena !== contrasena) {
        mostrarError("confirmarContrasena", campos.confirmarContrasena.error.match);
        valido = false;
    }

    // Validación fecha nacimiento
    const fechaNacimiento = form.fechaNacimiento.value.trim();
    if (!fechaNacimiento) {
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

    // Validación dirección opcional
    const direccion = form.direccion.value.trim();
    if (direccion && !campos.direccion.regex.test(direccion)) {
        mostrarError("direccion", campos.direccion.error.format);
        valido = false;
    }

    // Validación afecciones médicas
    document.querySelectorAll(".afeccion-checkbox").forEach(checkbox => {
        const detalleInput = document.getElementById("detalle-" + checkbox.value);
        if (checkbox.checked && !detalleInput.value.trim()) {
            mostrarError(detalleInput.id, "Debe especificar la " + checkbox.value + ".");
            valido = false;
        }
    });

    if (valido) {
        const alerta = document.createElement("div");
        alerta.className = "alerta-flotante";
        alerta.textContent = "Registrado con éxito.";

        document.body.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 10000);

        form.reset();

        // Ocultar inputs de detalle y quitar asteriscos
        document.querySelectorAll('.afeccion-checkbox').forEach(checkbox => {
            const detalleInput = document.getElementById('detalle-' + checkbox.value);
            const label = document.querySelector('label[for="detalle-' + checkbox.value + '"]');
            detalleInput.classList.add('d-none');
            label.textContent = label.textContent.replace(' *', '');
        });
    }
});

// Validación en tiempo real
Object.keys(campos).forEach(campo => {
    document.getElementById(campo)?.addEventListener("input", function () {
        limpiarError(campo);
    });
});

document.querySelectorAll('.afeccion-checkbox').forEach(checkbox => {
    const detalleInput = document.getElementById('detalle-' + checkbox.value);

    // Crear label dinámicamente si no existe
    let label = document.querySelector('label[for="detalle-' + checkbox.value + '"]');
    if (!label) {
        label = document.createElement('label');
        label.setAttribute('for', 'detalle-' + checkbox.value);
        label.className = 'form-label';
        label.textContent = '';
        detalleInput.parentNode.insertBefore(label, detalleInput);
    }

    // Evento para mostrar/ocultar input y asterisco dinámicamente
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            // Mostrar input
            detalleInput.classList.remove('d-none');
            detalleInput.focus();

            // Crear span para asterisco si no existe
            if (!label.querySelector('.asterisco')) {
                const asterisco = document.createElement('span');
                asterisco.textContent = ' *';
                asterisco.style.color = 'red';
                asterisco.classList.add('asterisco');
                label.appendChild(asterisco);
            }
        } else {
            // Ocultar input y limpiar valor
            detalleInput.classList.add('d-none');
            detalleInput.value = '';

            // Remover asterisco si existe
            const asterisco = label.querySelector('.asterisco');
            if (asterisco) asterisco.remove();

            limpiarError(detalleInput.id);
        }
    });

    // Validación en tiempo real de los inputs de detalle
    detalleInput.addEventListener('input', () => limpiarError(detalleInput.id));
});

