// Función para cargar posts desde localStorage
function loadPosts() {
    const postsContainer = document.getElementById('postsAdmin');
    postsContainer.innerHTML = '';

    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    posts.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post-item';

        postDiv.innerHTML = `
            <span><strong>${post.title}</strong></span>
            <button data-index="${index}">Eliminar</button>
        `;

        // Añadir evento para eliminar post
        postDiv.querySelector('button').addEventListener('click', () => {
            deletePost(index);
        });

        postsContainer.appendChild(postDiv);
    });
}

// Función para agregar nuevo post
document.getElementById('postForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('postTitle').value.trim();
    const content = document.getElementById('postContent').value.trim();

    if (title && content) {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push({ title, content });
        localStorage.setItem('posts', JSON.stringify(posts));

        document.getElementById('postForm').reset();
        loadPosts();
        // Opcional: actualizar la vista pública
        location.reload();
    }
});

// Función para eliminar post
function deletePost(index) {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(posts));
    loadPosts();
    // Opcional: actualizar la vista pública
    location.reload();
}

// Cargar posts al cargar la página
window.onload = loadPosts;
