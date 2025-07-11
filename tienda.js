// Datos de los artículos
const articulos = [
    // Artículos en oferta (25)
    { id: 1, nombre: 'Auriculares Bluetooth', precio: 50, oferta: true, imagen: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg' },
    { id: 2, nombre: 'Smartwatch', precio: 80, oferta: true, imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg' },
    { id: 3, nombre: 'Laptop 15"', precio: 500, oferta: true, imagen: 'https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg' },
    { id: 4, nombre: 'Cámara Digital', precio: 150, oferta: true, imagen: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' },
    { id: 5, nombre: 'Altavoces Portátiles', precio: 60, oferta: true, imagen: 'https://images.pexels.com/photos/164338/altavoces-portatiles-auriculares-multimedia-164338.jpeg' },
    { id: 6, nombre: 'Tablet 10"', precio: 200, oferta: true, imagen: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg' },
    { id: 7, nombre: 'Camisa Casual', precio: 30, oferta: true, imagen: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg' },
    { id: 8, nombre: 'Zapatos Deportivos', precio: 70, oferta: true, imagen: 'https://images.pexels.com/photos/1704124/pexels-photo-1704124.jpeg' },
    { id: 9, nombre: 'Mochila Escolar', precio: 40, oferta: true, imagen: 'https://images.pexels.com/photos/159631/backpack-bag-school-159631.jpeg' },
    { id: 10, nombre: 'Reloj de Pulsera', precio: 25, oferta: true, imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg' },
    { id: 11, nombre: 'Parlantes Bluetooth', precio: 45, oferta: true, imagen: 'https://images.pexels.com/photos/339465/pexels-photo-339465.jpeg' },
    { id: 12, nombre: 'Lámpara LED', precio: 20, oferta: true, imagen: 'https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg' },
    { id: 13, nombre: 'Silla Gamer', precio: 120, oferta: true, imagen: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg' },
    { id: 14, nombre: 'Micrófono Condensador', precio: 80, oferta: true, imagen: 'https://images.pexels.com/photos/414519/pexels-photo-414519.jpeg' },
    { id: 15, nombre: 'Kit de Pintura', precio: 35, oferta: true, imagen: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg' },
    { id: 16, nombre: 'Juego de Mesa', precio: 25, oferta: true, imagen: 'https://images.pexels.com/photos/1758053/pexels-photo-1758053.jpeg' },
    { id: 17, nombre: 'Monitor 24"', precio: 130, oferta: true, imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg' },
    { id: 18, nombre: 'Teclado Mecánico', precio: 60, oferta: true, imagen: 'https://images.pexels.com/photos/414519/pexels-photo-414519.jpeg' },
    { id: 19, nombre: 'Mouse Gamer', precio: 40, oferta: true, imagen: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' },
    { id: 20, nombre: 'Funda para Teléfono', precio: 10, oferta: true, imagen: 'https://images.pexels.com/photos/159631/backpack-bag-school-159631.jpeg' },
    { id: 21, nombre: 'Batería Externa', precio: 25, oferta: true, imagen: 'https://images.pexels.com/photos/339465/pexels-photo-339465.jpeg' },
    { id: 22, nombre: 'Altavoces Inalámbricos', precio: 55, oferta: true, imagen: 'https://images.pexels.com/photos/164338/altavoces-portatiles-auriculares-multimedia-164338.jpeg' },
    { id: 23, nombre: 'Soporte para Laptop', precio: 15, oferta: true, imagen: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg' },
    { id: 24, nombre: 'Power Bank 10000mAh', precio: 30, oferta: true, imagen: 'https://images.pexels.com/photos/339465/pexels-photo-339465.jpeg' },
    { id: 25, nombre: 'Cargador Rápido', precio: 12, oferta: true, imagen: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg' },

    // Otros 25 artículos regulares
    { id: 26, nombre: 'Libro de Cocina', precio: 15, oferta: false, imagen: 'https://images.pexels.com/photos/356046/pexels-photo-356046.jpeg' },
    { id: 27, nombre: 'Auriculares In-ear', precio: 20, oferta: false, imagen: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' },
    { id: 28, nombre: 'Camiseta Básica', precio: 10, oferta: false, imagen: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg' },
    { id: 29, nombre: 'Gafas de Sol', precio: 25, oferta: false, imagen: 'https://images.pexels.com/photos/356046/pexels-photo-356046.jpeg' },
    { id: 30, nombre: 'Bolso de Mano', precio: 40, oferta: false, imagen: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg' },
    { id: 31, nombre: 'Jarrón Decorativo', precio: 22, oferta: false, imagen: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg' },
    { id: 32, nombre: 'Set de Café', precio: 35, oferta: false, imagen: 'https://images.pexels.com/photos/356046/pexels-photo-356046.jpeg' },
    { id: 33, nombre: 'Ropa Deportiva', precio: 50, oferta: false, imagen: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg' },
    { id: 34, nombre: 'Set de Papelería', precio: 18, oferta: false, imagen: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg' },
    { id: 35, nombre: 'Sofá de Sala', precio: 250, oferta: false, imagen: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg' },
    { id: 36, nombre: 'Mesa de Comedor', precio: 150, oferta: false, imagen: 'https://images.pexels.com/photos/356046/pexels-photo-356046.jpeg' },
    { id: 37, nombre: 'Decoración de Pared', precio: 30, oferta: false, imagen: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg' },
    { id: 38, nombre: 'Set de Cocina', precio: 70, oferta: false, imagen: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg' },
    { id: 39, nombre: 'Bicicleta Urbana', precio: 300, oferta: false, imagen: 'https://images.pexels.com/photos/1704124/pexels-photo-1704124.jpeg' },
    { id: 40, nombre: 'Camara de Seguridad', precio: 80, oferta: false, imagen: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' },
    { id: 41, nombre: 'Saco de Dormir', precio: 45, oferta: false, imagen: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg' },
    { id: 42, nombre: 'Tendedero de Ropa', precio: 25, oferta: false, imagen: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg' },
    { id: 43, nombre: 'Cinta de Correr', precio: 400, oferta: false, imagen: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg' },
    { id: 44, nombre: 'Set de Jardinería', precio: 55, oferta: false, imagen: 'https://images.pexels.com/photos/356046/pexels-photo-356046.jpeg' },
    { id: 45, nombre: 'Kit de Fotografía', precio: 120, oferta: false, imagen: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' },
    { id: 46, nombre: 'Estantería', precio: 80, oferta: false, imagen: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg' },
    { id: 47, nombre: 'Cortinas', precio: 40, oferta: false, imagen: 'https://images.pexels.com/photos/356046/pexels-photo-356046.jpeg' },
    { id: 48, nombre: 'Alfombra', precio: 60, oferta: false, imagen: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg' },
    { id: 49, nombre: 'Licuadora', precio: 55, oferta: false, imagen: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' },
    { id: 50, nombre: 'Plancha de Pelo', precio: 25, oferta: false, imagen: 'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg' },
];

// Variables para carrito
let carrito = [];
let totalGastado = 0;

// Referencias a elementos del DOM
const ofertaContainer = document.getElementById('ofertas');
const regularContainer = document.getElementById('regulares');
const cartContainer = document.getElementById('cartContainer');
const cartItemsDiv = document.getElementById('cartItems');
const cartCountSpan = document.getElementById('cartCount');
const totalAmountSpan = document.getElementById('totalAmount');
const toggleCartBtn = document.getElementById('toggleCartBtn');
const finalizeBtn = document.getElementById('finalizeBtn');
const modal = document.getElementById('modal');
const itemsBoughtSpan = document.getElementById('itemsBought');
const amountSpentSpan = document.getElementById('amountSpent');
const closeModalBtn = document.getElementById('closeModal');

// Función para crear artículos en la página
function crearArticulo(articulo) {
    const div = document.createElement('div');
    div.className = 'articulo';

    const img = document.createElement('img');
    img.src = articulo.imagen;
    img.alt = articulo.nombre;

    const titulo = document.createElement('h3');
    titulo.textContent = articulo.nombre;

    const precio = document.createElement('p');
    precio.textContent = `$${articulo.precio}`;

    const btnAgregar = document.createElement('button');
    btnAgregar.className = 'agregar';
    btnAgregar.textContent = 'Agregar al Carrito';
    btnAgregar.onclick = () => agregarAlCarrito(articulo);

    div.appendChild(img);
    div.appendChild(titulo);
    div.appendChild(precio);
    div.appendChild(btnAgregar);

    return div;
}

// Filtrar artículos en oferta y regulares
const articulosOferta = articulos.filter(a => a.oferta);
const articulosRegulares = articulos.filter(a => !a.oferta);

// Renderizar artículos en oferta
articulosOferta.forEach(a => {
    const articuloDiv = crearArticulo(a);
    ofertaContainer.appendChild(articuloDiv);
});

// Renderizar artículos regulares
articulosRegulares.forEach(a => {
    const articuloDiv = crearArticulo(a);
    regularContainer.appendChild(articuloDiv);
});

// Función para agregar artículos al carrito
function agregarAlCarrito(articulo) {
    carrito.push(articulo);
    actualizarCarrito();
}

// Actualizar carrito en pantalla
function actualizarCarrito() {
    // Limpiar contenido actual
    cartItemsDiv.innerHTML = '';

    // Contar artículos
    const conteo = {};
    carrito.forEach(a => {
        conteo[a.id] = (conteo[a.id] || 0) + 1;
    });

    let total = 0;
    for (const id in conteo) {
        const articulo = articulos.find(a => a.id == id);
        const cantidad = conteo[id];
        const subtotal = articulo.precio * cantidad;
        total += subtotal;

        const divItem = document.createElement('div');
        divItem.className = 'cart-item';

        divItem.innerHTML = `
            <p>${articulo.nombre} x${cantidad} - $${subtotal}</p>
        `;
        cartItemsDiv.appendChild(divItem);
    }

    // Actualizar cantidad y total
    document.getElementById('cartCount').textContent = carrito.length;
    totalAmountSpan.textContent = total.toFixed(2);
    totalGastado = total;
}

// Función para desplegar u ocultar carrito
document.getElementById('toggleCartBtn').addEventListener('click', () => {
    if (cartContainer.classList.contains('cart-hidden')) {
        cartContainer.classList.remove('cart-hidden');
    } else {
        cartContainer.classList.add('cart-hidden');
    }
});

// Función para finalizar compra
document.getElementById('finalizeBtn').addEventListener('click', () => {
    if (carrito.length === 0) {
        alert('El carrito está vacío.');
        return;
    }
    // Mostrar modal con resumen
    document.getElementById('itemsBought').textContent = carrito.length;
    document.getElementById('amountSpent').textContent = totalGastado.toFixed(2);
    modal.classList.remove('modal-hidden');

    // Reiniciar carrito
    carrito = [];
    actualizarCarrito();

    // Ocultar carrito
    if (!cartContainer.classList.contains('cart-hidden')) {
        cartContainer.classList.add('cart-hidden');
    }
});

// Cerrar modal
document.getElementById('closeModal').addEventListener('click', () => {
    modal.classList.add('modal-hidden');
});
