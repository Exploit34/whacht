document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos el valor almacenado en localStorage
    const peliculaSeleccionada = localStorage.getItem("peliculaSeleccionada");

    // Datos de ejemplo: supongamos que tenemos un arreglo de películas con sus detalles
    const peliculas = [
        {
            nombre: "The Witcher",
            imagen: "../img/serie1.jpg",
            descripcion: "Geralt de Rivia es un brujo, mutado durante su infancia para ser más efectivo en su labor, matar monstruos por dinero. El continente se encuentra en un estado de caos debido a las ansias del Imperio de Nilfgaard por ampliar su territorio. Entre los refugiados de esta lucha se encuentra la princesa Cirilla de Cintra, conocida como Ciri, que es constantemente perseguida por Nilfgaard debido al secreto poder que posee. Debido al destino, Geralt y Ciri están unidos para siempre desde antes del nacimiento de esta. Durante sus viajes Geralt conoce a Jaskier, un trovador demasiado hablador, y a Yennefer de Vengerberg, una poderosa hechicera.",
            año: 2009,
            trailer: "https://www.youtube.com/embed/DRX-zjds-_A",
            trailer2:"https://www.youtube.com/embed/l_hrPnk1Swo",
        },
        {
            nombre: "servant",
            imagen: "../img/servant.jpg",
            descripcion: "Vasiliy se despierta de un sueño de filosofía griega para pasar su primer día completo en el cargo. Su familia ahora lo adula a él y a su nuevo poder, todos excepto su hermana, que llega a la casa familiar ajena a los acontecimientos recientes",
            año: 2021,
            trailer: "https://www.youtube.com/embed/QR4IkT3030o",
            trailer2: "https://www.youtube.com/embed/75qm9dM1lLs"
        },
        {
            nombre: "ring power",
            imagen: "../img/ringpower.jpg",
            descripcion: "Un sociópata reformado, tras la muerte de su hermano, se dirige a un lugar remoto que pronto cae bajo el asedio de una grupo mortal de mercenarios. Obligado a valerse por sí mismo, emprenderá una incansable búsqueda de venganza, al tiempo que se da cuenta de que también ha tenido parte de responsabilidad en el fallecimiento del hermano.",
            año: 2022,
            trailer: "https://www.youtube.com/embed/3cxixDgHUYw",
            trailer2: "https://www.youtube.com/embed/75qm9dM1lLs"
        },
        {
            nombre: "lucifer",
            imagen: "../img/lucifer.jpg",
            descripcion: "El destino de la humanidad está en juego cuando dos razas de robots, los buenos Autobots y los villanos Decepticons, llevan su guerra a la Tierra. Los robots tienen la habilidad de transformarse en diferentes objetos mecánicos mientras buscan la clave del poder supremo. Sólo un joven humano, Sam Witwicky puede salvar al mundo de la destrucción total.",
            año: 2011,
            trailer: "https://www.youtube.com/embed/HXVkxHuPTLY",
            trailer2: "https://www.youtube.com/embed/fT-YoTl6Vi4"
        },
        {
            nombre: "mariane",
            imagen: "../img/mariane.jpg",
            descripcion: "Una joven niñera estadounidense llega a un pueblo aislado en Inglaterra, donde es contratada para cuidar de un siniestro muñeco de aspecto humano que unos padres muy afectados por la muerte de su hijo tratan como si fuera un niño real. Poco a poco la joven comienza a sospechar que el muñeco está realmente vivo",
            año: 2020,
            trailer: "https://www.youtube.com/embed/1oq4XEtctuE",
            trailer2: "https://www.youtube.com/embed/fT-YoTl6Vi4",
        },
        {
            nombre: "maldicion",
            imagen: "../img/maldicion.jpg",
            descripcion: "Nueva secuela de la saga Evil Dead, en la que la separación entre los vivos y los muertos ya no es tan clara como solía ser. En la primera película de la saga, los protagonistas eran un grupo de cinco amigos que, con la idea de pasar un divertido fin de semana juntos, se internan en un bosque de Tennessee, donde se alojan en una rústica cabaña abandonada. Sin embargo, el fin de semana iba a ser muy diferente a como lo habían imaginado. Los jóvenes estudiantes encuentran una grabadora y la activan. Entonces, de la grabadora comienzan a salir voces recitando los pasajes de un antiguo libro. Estos pasajes van a provocar que unos espíritus que habitan el bosque despierten de su letargo y vayan hacia ellos.",
            año: 2023,
            trailer: "https://www.youtube.com/embed/8CDyvHAyJn4",
            trailer2:"https://www.youtube.com/embed/e2Xlgz6dblo"
        },
        {
            nombre: "Haunted",
            imagen: "../img/Haunted.jpg",
            descripcion: "Descripción de la película 2",
            año: 2018,
            trailer: "https://www.youtube.com/embed/sKaU4ApKbIg",
            trailer2:"https://www.youtube.com/embed/pKhj8n3XaIY"
        },
        {
            nombre: "Miedo Pelicula 4",
            imagen: "../img/6.png",
            descripcion: "Descripción de la película 2",
            año: 2018,
            trailer: "https://www.youtube.com/embed/Mwe3b7J80Jw",
            trailer2:"https://www.youtube.com/embed/e2Xlgz6dblo",
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
            pelicula.trailer2,
            "_blank",
            "width=800,height=450,menubar=no,toolbar=no,location=no"
        );

        // Verificar si la ventana emergente se abrió correctamente
        if (!ventanaNueva || ventanaNueva.closed || typeof ventanaNueva.closed === "undefined") {
            alert("La reproducción del video requiere habilitar ventanas emergentes.");
        } else {
            // Contenido HTML que queremos mostrar en la ventana emergente
            const contenidoHTML = `
                <h2>Trailer de ${pelicula.nombre} capitulo 1</h2>
                <div class="video-container">
                    <iframe width="560" height="315" src="${pelicula.trailer}" frameborder="0" allowfullscreen></iframe>
                </div>
                <h2>Trailer de ${pelicula.nombre} capitulo 2</h2>
                <iframe width="560" height="315" src="${pelicula.trailer2}" frameborder="0" allowfullscreen></iframe>
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