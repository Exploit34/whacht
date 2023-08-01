document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos el valor almacenado en localStorage
    const peliculaSeleccionada = localStorage.getItem("peliculaSeleccionada");

    // Datos de ejemplo: supongamos que tenemos un arreglo de películas con sus detalles
    const peliculas = [
        {
            nombre: "Busqueda_Implacable",
            imagen: "../img/busquedaImplacable.jpg",
            descripcion: "La película se desarrolla en Varsovia (Capital de Polonia). El protagonista de la película es Wladyslaw Szpilman un hombre judío de 27 años, uno de los mejores pianistas del momento. Su mundo se derrumba con la llegada de la Segunda Guerra Mundial y la invasión de Alemania en septiembre de 1939. Después de que la estación de radio donde estaba trabajando es bombardeada, Szpilman llega a su casa donde se entera de que el Reino Unido y Francia le han declarado",
            año: 2009,
            trailer: "https://www.youtube.com/embed/l_hrPnk1Swo",
        },
        {
            nombre: "instinto peligroso",
            imagen: "../img/instinto.jpg",
            descripcion: "Un sociópata reformado viaja a una isla remota para investigar el misterio detrás de la desaparición de su hermano, pero pronto termina enfrentándose a más de lo que esperaba.",
            año: 2021,
            trailer: "https://www.youtube.com/embed/2_Q_UOjNvSo",
        },
        {
            nombre: "justice league",
            imagen: "../img/justice.jpg",
            descripcion: "Un sociópata reformado, tras la muerte de su hermano, se dirige a un lugar remoto que pronto cae bajo el asedio de una grupo mortal de mercenarios. Obligado a valerse por sí mismo, emprenderá una incansable búsqueda de venganza, al tiempo que se da cuenta de que también ha tenido parte de responsabilidad en el fallecimiento del hermano.",
            año: 2022,
            trailer: "https://www.youtube.com/embed/3cxixDgHUYw",
        },
        {
            nombre: "trasnformer",
            imagen: "../img/transformer.jpg",
            descripcion: "El destino de la humanidad está en juego cuando dos razas de robots, los buenos Autobots y los villanos Decepticons, llevan su guerra a la Tierra. Los robots tienen la habilidad de transformarse en diferentes objetos mecánicos mientras buscan la clave del poder supremo. Sólo un joven humano, Sam Witwicky puede salvar al mundo de la destrucción total.",
            año: 2011,
            trailer: "https://www.youtube.com/embed/4FU4Egle4Nk",
        },
        {
            nombre: "El niño",
            imagen: "../img/el niño.jpg",
            descripcion: "Una joven niñera estadounidense llega a un pueblo aislado en Inglaterra, donde es contratada para cuidar de un siniestro muñeco de aspecto humano que unos padres muy afectados por la muerte de su hijo tratan como si fuera un niño real. Poco a poco la joven comienza a sospechar que el muñeco está realmente vivo",
            año: 2020,
            trailer: "https://www.youtube.com/embed/aymLLfpmcs8",
        },
        {
            nombre: "La posesion infernal",
            imagen: "../img/profesion.jpg",
            descripcion: "Nueva secuela de la saga Evil Dead, en la que la separación entre los vivos y los muertos ya no es tan clara como solía ser. En la primera película de la saga, los protagonistas eran un grupo de cinco amigos que, con la idea de pasar un divertido fin de semana juntos, se internan en un bosque de Tennessee, donde se alojan en una rústica cabaña abandonada. Sin embargo, el fin de semana iba a ser muy diferente a como lo habían imaginado. Los jóvenes estudiantes encuentran una grabadora y la activan. Entonces, de la grabadora comienzan a salir voces recitando los pasajes de un antiguo libro. Estos pasajes van a provocar que unos espíritus que habitan el bosque despierten de su letargo y vayan hacia ellos.",
            año: 2023,
            trailer: "https://www.youtube.com/embed/gjam7tJusco",
        },
        {
            nombre: "Miedo Pelicula 3",
            imagen: "../img/4.png",
            descripcion: "Descripción de la película 2",
            año: 2018,
            trailer: "https://www.youtube.com/embed/Lsglk8dqOJI",
        },
        {
            nombre: "Miedo Pelicula 4",
            imagen: "../img/6.png",
            descripcion: "Descripción de la película 2",
            año: 2018,
            trailer: "https://www.youtube.com/embed/Lsglk8dqOJI",
        },
    ];

    // Buscamos la película seleccionada en el arreglo de películas
    const pelicula = peliculas.find((p) => p.nombre === peliculaSeleccionada);

    // Utiliza la información de la película para mostrar los detalles en la página
    if (pelicula) {
        const detallesPelicula = document.getElementById("detalles-pelicula");
        detallesPelicula.innerHTML = `
        <img src="${pelicula.imagen}" alt="${pelicula.nombre}" style="width: 200px; height: auto;">
            <h2>${pelicula.nombre}</h2>
            <p>Año: ${pelicula.año}</p>
            <p>Descripción: ${pelicula.descripcion}</p>
            <!-- Puedes agregar más detalles aquí si es necesario -->
        `;
        const trailerPelicula = document.getElementById("trailer-pelicula");
        trailerPelicula.innerHTML = `
            <h2>Trailer</h2>
            <div class="video-container">
                <button id="reproducir-trailer">Reproducir</button>
            </div>
        `;

          // Agregar evento clic al botón "Reproducir"
    const reproducirButton = document.getElementById("reproducir-trailer");
    reproducirButton.addEventListener("click", () => {

        // Abrir una nueva ventana sin barra de navegación y otras opciones
        const ventanaNueva = window.open(
            pelicula.trailer,
            "_blank",
            "width=800,height=450,menubar=no,toolbar=no,location=no"
        );

        // Verificar si la ventana emergente se abrió correctamente
        if (!ventanaNueva || ventanaNueva.closed || typeof ventanaNueva.closed === "undefined") {
            alert("La reproducción del video requiere habilitar ventanas emergentes.");
        } else {
            // Contenido HTML que queremos mostrar en la ventana emergente
            const contenidoHTML = `
                <h2>Trailer de ${pelicula.nombre}</h2>
                <div class="video-container">
                    <iframe width="560" height="315" src="${pelicula.trailer}" frameborder="0" allowfullscreen></iframe>
                </div>
                <!-- Aquí puedes agregar más contenido HTML si lo deseas -->
            `;

            // Cargar el contenido HTML en la ventana emergente
            ventanaNueva.document.write(contenidoHTML);
            ventanaNueva.document.close();
        }
    });
} else {
    // Si la película no se encuentra en el arreglo, muestra un mensaje de error
    const detallesPelicula = document.getElementById("detalles-pelicula");
    detallesPelicula.innerHTML = "<p>Película no encontrada</p>";
}


});