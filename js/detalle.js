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
        {
            nombre: "PeliculaTitanic",
            imagen: "../img/titanic.jpg",
            descripcion: "La trama, una epopeya4 romántica, relata la relación de Jack Dawson y Rose DeWitt Bukater, dos jóvenes que se conocen y se enamoran a bordo del transatlántico RMS Titanic en su viaje inaugural desde Southampton, Inglaterra a Nueva York, EE. UU., en abril de 1912.",
            año: 2018,
            trailer: "https://www.youtube.com/embed/tA_qMdzvCvk",
        },
        {
            nombre: "Avengers",
            imagen: "../img/avengers.jpg",
            descripcion: "Los Vengadores restantes deben encontrar una manera de recuperar a sus aliados para un enfrentamiento épico con Thanos, el malvado que diezmó el planeta y el universo.",
            año: 2018,
            trailer: "https://www.youtube.com/embed/PyakRSni-c0",
        },
        {
            nombre: "Spider-man",
            imagen: "../img/intento.jpg",
            descripcion: "Tras descubrirse la identidad secreta de Peter Parker como Spider-Man, la vida del joven se vuelve una locura. Peter le pide ayuda al Doctor Strange para recuperar su vida, pero algo sale mal y provoca una fractura en el multiverso",
            año: 2021,
            trailer: "https://www.youtube.com/embed/SkmRT3M4Vx4",
        },
        {
            nombre: "The Warriors",
            imagen: "../img/the warrios.jpg",
            descripcion: "Durante una noche del verano de 1979, una pandilla, injustamente acusada de haber asesinado a un carismático líder durante una reunión en la que se pretendía unir a todos las pandillas de Nueva York, debe cruzar por la noche toda la ciudad de norte a sur, enfrentándose a todas las demás bandas, para regresar vivos a su barrio y desenmascarar al verdadero asesino.",
            año: 2020,
            trailer: "https://www.youtube.com/embed/7dOZssHFKC8",
        },
        {
            nombre: "Operacion Dragon",
            imagen: "../img/operacion.jpg",
            descripcion: "Un agente secreto entra a la isla fortificada de un magnate del opio junto a otros peleadores para un torneo de artes marciales.",
            año: 1973,
            trailer: "https://www.youtube.com/embed/jL2SH6ixVbw",
        },
        {
            nombre: "Rescate",
            imagen: "../img/rescate.jpg",
            descripcion: "El maestro John Howard Carpenter tan pronto te dirige un clásico imperecedero del cine de terror como 'Halloween' como se saca de la manga una película de acción distópica de la talla de 'Rescate en Nueva York'. Una clase magistral de economía de recursos, con un uso ejemplar de la urgencia en el guión y un protagonista irrepetible cuya imagen y chulería le han hecho trascender como icono popular. ¡Larga vida a Serpiente Plissken!",
            año: 1996,
            trailer: "https://www.youtube.com/embed/19pjIyMY8cg",
        },
        {
            nombre: "Golpe en la pequeña China",
            imagen: "../img/golpe.jpg",
            descripcion: "Una joven es secuestrada para romper una maldición, y su novio y un grupo de amigos intentarán liberarla antes de que sea demasiado tarde.",
            año: 1986,
            trailer: "https://www.youtube.com/embed/Hdh_FzsY9gk",
        },
        {
            nombre: "La dama de negro",
            imagen: "../img/dama.jpg",
            descripcion: "Arthur Kipps, un abogado, enviudó recientemente y sufre por la pérdida de su esposa cuando es enviado a una aldea remota para poner en orden los asuntos de un excéntrico fallecido. Poco tiempo después de su llegada, resulta claro que los aldeanos ocultan un terrible secreto. Kipps descubre que la casa de su cliente está embrujada por el espíritu de una mujer que intenta hallar a alguien y algo que perdió, y de cuya furia nadie se salva",
            año: 1999,
            trailer: "https://www.youtube.com/embed/VTfvafwv0fY",
        },
        {
            nombre: "Evangeline",
            imagen: "../img/evangeline.jpg",
            descripcion: "Una estudiante universitaria es atacada y abandonada a su suerte en el bosque. Un antiguo espíritu demoníaco la posee y la dota de una gran sed de venganza. Ahora, Evangeline deberá decidir entre la venganza y la redención.",
            año: 2013,
            trailer: "https://www.youtube.com/embed/mGi6rgm82xA",
        },
        {
            nombre: "Alexia",
            imagen: "../img/alexia.jpg",
            descripcion: "Franco se siente prisionero de las redes sociales. Allí observa el perfil de Alexia, su ex-novia, en el día del cumpleaños de ella. Aunque Alexia ya lleva un tiempo fallecida, habiendo cometido un trágico suicidio, su perfil en las redes sociales sigue activo y sus seres queridos le dejan mensajes de cariño. Convencido por su actual novia, Franco se anima a borrar a Alexia de sus contactos definitivamente para poder seguir adelante con su vida. Sin embargo, quizás no baste un click para dejar el pasado atrás",
            año: 2013,
            trailer: "https://www.youtube.com/embed/mGi6rgm82xA",
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
            <h2 class="tr" >Trailer</h2>
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
            <style>
            body {
                background-color: #341740;
                color: #ffffff;
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
            }
    
            .video-section {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                padding: 20px;
            }
    
            .video-container {
                width: 100%;
                max-width: 90%;
                margin: 10px ;
                height: 80%;
                padding: 20px;
                background-color: rgba(0, 0, 0, 0.5);
                border-radius: 15px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                text-align: center;
            }
    
            .video-container iframe {
                width: 100%; 
                height: 100%; 
                border: none;
                
            }
    
            .recommended-video {
                margin-top: 30px;
                text-align: center;
            }
    
            h2 {
                color: #fff;
                text-align: center;
                margin-bottom: 5px;
                font-size: 1.5rem; /* Cambiado el tamaño del título */
            }

            .tr{
                padding: 20px;
            }
        </style>
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
    
document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("search-form");
    const resultadosContainer = document.getElementById("resultados-container"); // Agrega un elemento con este ID en tu HTML
    
        searchForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const searchInput = document.getElementById("search-input");
            const searchTerm = searchInput.value.toLowerCase();
    
            // Limpiar resultados anteriores
            resultadosContainer.innerHTML = '';
    
            // Filtrar y mostrar resultados
            peliculas.forEach(pelicula => {
                if (pelicula.titulo.toLowerCase().includes(searchTerm)) {
                    const peliculaElement = document.createElement("div");
                    peliculaElement.classList.add("pelicula"); // Agrega clases CSS según tu diseño
                    peliculaElement.innerHTML = `<h3>${pelicula.titulo}</h3><p>Director: ${pelicula.director}</p>`; // Personaliza según tus datos
                    resultadosContainer.appendChild(peliculaElement);
                }
            });
        });
    });
});