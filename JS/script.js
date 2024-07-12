// Cambiar el color de fondo del cuerpo al cargar la página
document.body.style.backgroundColor = "#e0f7fa";

// Mostrar la fecha actual en el pie de página
document.getElementById("fecha-actual").textContent = "Fecha actual: " + new Date().toLocaleDateString();

// Mostrar una alerta al enviar el formulario
document.getElementById("comment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Comentario enviado!");
});

// Desplazamiento suave al hacer clic en los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
