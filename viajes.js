// Menú hamburguesa para móviles
const menuToggle = document.getElementById('menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('show');
});

// Formulario de contacto
const form = document.getElementById('contact-form');
const responseDiv = document.getElementById('form-response');

form.addEventListener('submit', function(e){
    e.preventDefault();

    // Obtener valores
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validar (simple)
    if(name && email && message){
        responseDiv.innerHTML = `<p style="color:green;">Gracias, ${name}. Tu mensaje ha sido enviado.</p>`;
        form.reset();
    } else {
        responseDiv.innerHTML = `<p style="color:red;">Por favor, completa todos los campos.</p>`;
    }
});
