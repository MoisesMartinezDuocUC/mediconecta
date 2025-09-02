const formLogin = document.querySelector('form');

formLogin.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    // Validar email
    const email = document.getElementById('email');
    const errorEmail = document.getElementById('error-email');
    if (!email.value.trim()) {
        email.classList.add('is-invalid');
        errorEmail.textContent = 'Ingrese su correo electrónico';
        valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        email.classList.add('is-invalid');
        errorEmail.textContent = 'Ingrese un correo válido';
        valid = false;
    } else {
        email.classList.remove('is-invalid');
        errorEmail.textContent = '';
    }

    // Validar contraseña
    const contrasena = document.getElementById('contrasena');
    const errorContrasena = document.getElementById('error-contrasena');
    if (!contrasena.value.trim()) {
        contrasena.classList.add('is-invalid');
        errorContrasena.textContent = 'Ingrese su contraseña';
        valid = false;
    } else {
        contrasena.classList.remove('is-invalid');
        errorContrasena.textContent = '';
    }

    if (valid) {
        // Aquí iría la lógica para enviar datos al servidor
        alert('Formulario válido. Se puede enviar al servidor.');
    }
});

// Validación en tiempo real mientras el usuario escribe
['email', 'contrasena'].forEach(id => {
    const input = document.getElementById(id);
    input.addEventListener('input', () => {
        input.classList.remove('is-invalid');
        document.getElementById('error-' + id).textContent = '';
    });
});
