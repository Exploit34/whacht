document.addEventListener("DOMContentLoaded", function() {
    const menuToggler = document.getElementById("menu-toggler");
    const menuDesplegable = document.getElementById("menu-desplegable");

    menuToggler.addEventListener("click", function() {
        menuDesplegable.classList.toggle("menu-desplegado");
    });
});

// Función para obtener el valor del parámetro en la URL por su nombre
function getParameterByName(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
}


// Obtenemos todos los botones de "Ver detalles"
const buttons = document.querySelectorAll(".details-button");

// Agregamos un evento de clic a cada botón
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        // Obtenemos el nombre de la película desde el atributo data-pelicula
        const peliculaSeleccionada = event.target.dataset.pelicula;

        // Almacenamos el valor en localStorage
        localStorage.setItem("peliculaSeleccionada", peliculaSeleccionada);

        // Redirigimos a la página de detalle
        window.location.href = "../views/detalle.html";
    });

document.addEventListener("DOMContentLoaded", function() {
        const searchForm = document.getElementById("search-form");

        searchForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const searchInput = document.getElementById("search-input");
            const searchTerm = searchInput.value;
            // Aquí puedes realizar la lógica para procesar la búsqueda
            console.log("Buscar: ", searchTerm);
            // Por ejemplo, podrías redirigir a una página de resultados de búsqueda
            // window.location.href = "ruta/a/resultados_busqueda.html?query=" + searchTerm;
        });
    });
});
