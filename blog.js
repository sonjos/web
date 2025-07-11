// Función para cargar comentarios desde localStorage
function loadComments() {
    const commentsContainer = document.getElementById('comments');
    commentsContainer.innerHTML = '';

    const comments = JSON.parse(localStorage.getItem('comments')) || [];

    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';

        commentDiv.innerHTML = `
            <p><strong>${comment.name}:</strong> ${comment.text}</p>
        `;
        commentsContainer.appendChild(commentDiv);
    });
}

// Función para agregar un comentario
document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const text = document.getElementById('comment').value.trim();

    if (name && text) {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push({ name, text });
        localStorage.setItem('comments', JSON.stringify(comments));

        loadComments();
        document.getElementById('commentForm').reset();
    }
});

// Cargar comentarios al cargar la página
window.onload = loadComments;
