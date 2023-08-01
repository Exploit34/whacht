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
        window.location.href = "./detalle2.html";
    });
});

// Seleccionamos el botón de búsqueda y el cuadro de búsqueda
const botonBusqueda = document.getElementById("btn btn-outline-success my-2 my-sm-0");
const cuadroBusqueda = document.getElementById("orm-control mr-sm-2");

// Agregamos un evento de clic al botón de búsqueda
botonBusqueda.addEventListener("click", () => {
  // Obtenemos el valor del cuadro de búsqueda
  const busqueda = cuadroBusqueda.value;

  // Redirigimos a la página de resultados de búsqueda con el valor como parámetro de consulta
  window.location.href = `busqueda.html?q=${busqueda}`;
});