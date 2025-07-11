// script.js
// Este script añade interactividad a la página web, incluyendo animaciones y eventos para los botones

document.addEventListener("DOMContentLoaded", function() {
    // Función para configurar botones con animación y eventos
function setupButton(id, url) {
    const btn = document.getElementById(id);
    if (!btn) return;
    // Añadir clases de animación de Animate.css
    btn.classList.add("animate__animated", "animate__fadeIn");
    // Añadir clase de animación al pasar el ratón
    btn.classList.add("animate__pulse");
    // Añadir clase de animación al hacer foco
    btn.classList.add("animate__focusIn");
    // Añadir clase de animación al hacer clic
    btn.classList.add("animate__clickIn");
    // Añadir clase de animación al tocar en dispositivos móviles
    btn.classList.add("animate__touchIn");
    // Añadir clase de animación al mantener el botón presionado
    btn.classList.add("animate__hold");
    // Añadir clase de animación al soltar el botón
    btn.classList.add("animate__release");
    // Añadir clase de animación al hacer doble clic
    btn.classList.add("animate__doubleClick");
    // Añadir clase de animación al hacer clic derecho
    btn.classList.add("animate__rightClick");
    // Añadir clase de animación al hacer clic con el botón central
    btn.classList.add("animate__middleClick");
    // Añadir clase de animación al hacer clic con el botón secundario
    btn.classList.add("animate__secondaryClick");
    // Añadir clase de animación al hacer clic con el botón primario
    btn.classList.add("animate__primaryClick");

    // Añadir clase de animación inicial
    btn.classList.add("animate__animated", "animate__pulse");

    // Evento para abrir enlace en misma pestaña o nueva
    btn.addEventListener("click", function(e) {
        e.preventDefault();

        // Si el botón es "btnTienda", "btnviajes" o "btnBlog", abrir en misma pestaña
        if (id === "btnTienda" || id === "btnviajes" || id === "btnblog") {
            window.location.href = url;
        } else {
            // Para los demás, abrir en una nueva pestaña
            window.open(url, "_blank");
        }

        // Opcional: quitar animación al hacer clic
        btn.classList.remove("animate__pulse");
    });
    
    // Eventos de interacción para animación
    ['mouseover', 'focus'].forEach(evt => {
        btn.addEventListener(evt, () => btn.classList.add("animate__pulse"));
    });
    ['mouseout', 'blur'].forEach(evt => {
        btn.addEventListener(evt, () => btn.classList.remove("animate__pulse"));
    });
    // Eventos táctiles
    btn.addEventListener("touchstart", () => btn.classList.remove("animate__pulse"));
    btn.addEventListener("touchend", () => btn.classList.add("animate__pulse"));
}

    // Configuración de botones principales
    setupButton("btnInicio", "index.html");
    setupButton("btnServicios", "servicios/servicios.html");
    setupButton("btnContacto", "contacto/contacto.html");
    setupButton("btnSobreMi", "sobre-mi/sobre-mi.html");
    setupButton("btnTienda", "tienda.html");/*modificado para git*/
    setupButton("btnblog", "blog.html");/*modificado para git*/
    setupButton("btnviajes", "viajes.html");/*modificado para git*/
    setupButton("btnSubir", "#top");

// Configuración de submenú de contacto
const btnPresupuesto = document.getElementById("btnPresupuesto");
const submenu = document.getElementById("submenuContacto");
const cerrar = document.getElementById("cerrarSubmenu");

// Asegurar que el submenu inicie cerrado
if (submenu) {
    submenu.style.display = "none";
}

if (btnPresupuesto && submenu && cerrar) {
    // Función para cerrar el submenu
    const cerrarSubmenu = () => {
        submenu.style.display = "none";
    };

    // Cuando se hace clic en el botón, mostrar u ocultar el submenu
    btnPresupuesto.addEventListener("click", e => {
        e.preventDefault();
        if (submenu.style.display === "flex") {
            // Si ya está abierto, cerrarlo
            cerrarSubmenu();
        } else {
            // Mostrar el submenu
            submenu.style.display = "flex";
        }
    });

    // Cuando se hace clic en el botón de cerrar, esconder el submenu
    cerrar.addEventListener("click", () => {
        cerrarSubmenu();
    });

    // Cuando se hace clic fuera del contenido del modal (en el fondo), cerrar
    submenu.addEventListener("click", e => {
        if (e.target === submenu) {
            cerrarSubmenu();
        }
    });
}

// Navegación suave para enlaces internos del menú
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', e => {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#') && href.length > 1) {
                const destino = document.querySelector(href);
                if (destino) {
                    e.preventDefault();
                    destino.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });
});
