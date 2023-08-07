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
        {
            nombre: "honesty",
            imagen: "../img/honesty.jpg",
            descripcion: "Xu Yi Ren pierde tanto su relación como su carrera en una noche. Su íntima amiga, Xia Di la recomienda a una empresa de arquitectura como asistente del CEO. Sin embargo, durante la entrevista, descubre que el CEO es la persona que expuso que su novio la engaña en público, Fang Zhi You. Aunque no sabe por qué, Xu Yi Ren finalmente consigue el trabajo, pero se le encarga una tarea extraña: mentirle a su jefe. Pero la tendencia de Fang Zhi You a exponer sus mentiras en público siempre la lleva a situaciones difíciles.",
            año: 2020,
            trailer: "https://www.youtube.com/embed/bJj2XdYAGtE",
            trailer2:"https://www.youtube.com/embed/rd2uFB13VJw",
        },
        {
            nombre: "Fox and Miss",
            imagen: "../img/fox.jpg",
            descripcion: "Gao Zheng He es un hombre de acero que vive de la exploración de gemas de alta gama. Después de sobrevivir a un accidente que lo envió por un precipicio, Gao Zheng He se topa con una tribu primitiva dominada por mujeres. Su líder Xing Yue lo rescata con la intención de convertirlo en su hombre. Para obtener una gema rara de la tribu, Gao Zheng He pretende casarse con Xing Yue y se escapa en la primera oportunidad que tiene. Xing Yue se dirige sola a la gran ciudad para recuperar lo que es suyo.",
            año: 2020,
            trailer: "https://www.youtube.com/embed/bJj2XdYAGtE",
            trailer2:"https://www.youtube.com/embed/rd2uFB13VJw",
        },
        {
            nombre: "my destiny",
            imagen: "../img/destiny.jpg",
            descripcion: "Chen Jian Xin, una joven artista, y Wang Xi Yi, el heredero de un conglomerado, se conocen en un crucero. El inesperado encuentro termina en algo más. Las emociones que desprende su relación, los impulsan a casarse. Pero la vida de casados presenta grandes dificultades para una pareja que tiene muchas cosas por aprender sobre la vida y el matrimonio. Después de un aborto involuntario, los caminos de Chen Jian Xin y Wang Xi Yi se separan. ¿Estarán destinados a encontrarse nuevamente?",
            año: 2020,
            trailer: "https://www.youtube.com/embed/bJj2XdYAGtE",
            trailer2:"https://www.youtube.com/embed/rd2uFB13VJw",
        },
        {
            nombre: "Tiger and Rose",
            imagen: "../img/romance.jpg",
            descripcion: "¿Qué pasaría si pudieras transportarte al mundo de los dramas? Xiao Qian es una chica que desea convertirse en una gran guionista. Al intentar que su drama sea exitoso, la protagonista viaja accidentalmente a su propia historia. Pero en ésta, Xiao Qian asume el papel de un personaje secundario, con una mala reputación y una vida demasiado corta. Para cambiar su destino, Xiao Qian hará hasta lo imposible. ¿Podrá conseguirlo?",
            año: 2018,
            trailer: "https://www.youtube.com/embed/IKLpwmoAAeg",
            trailer2:"https://www.youtube.com/embed/rd2uFB13VJw",
        },
        {
            nombre: "My Girlfriend is an Alien",
            imagen: "../img/girldfriend.jpg",
            descripcion: "Chai Xiao Qi es una chica alienígena atrapada en el planeta Tierra. Ella intenta sobrevivir a su manera con ayuda de sus superpoderes. Un día, se encuentra con Fang Leng, un empresario con una extraña amnesia. Cuando llueve, él olvida a las mujeres que lo rodean. Entre ambos protagonistas, nacerá un amor intergaláctico que te sacará más de una risa.  ",
            año: 2020,
            trailer: "https://www.youtube.com/embed/IKLpwmoAAeg",
            trailer2:"https://www.youtube.com/embed/rd2uFB13VJw",
        },
        {
            nombre: "Put your head on my shoulder",
            imagen: "../img/shoulder.jpg",
            descripcion: "Put your head on my shoulder es uno de los C-dramas más populares en Youtube. Si Tu Mo es una joven universitaria con dudas sobre su futuro. Contabilidad no parece ser su profesión soñada, así que decide luchar por lo que más le apasiona: la publicidad. Su decisión la lleva a conocer a Gu Wei Yi, un estudiante de física, con quien compartirá el mismo techo. ",
            año: 2019,
            trailer: "https://www.youtube.com/embed/IKLpwmoAAeg",
            trailer2:"https://www.youtube.com/embed/rd2uFB13VJw",
        },
        {
            nombre: "The Love Equations",
            imagen: "../img/love.jpg",
            descripcion: "Zhou Xiao, una chica amante de las historias de detectives, y Zhao Fan Zhou, un estudiante forense, se conocen en la universidad. De su encuentro, florece el amor y una tierna relación. Pero, inesperadamente, Zhao Fan Zhou termina con ella. Después de un tiempo se vuelve a encontrar ¿qué pasará con ellos? ¿su amor seguirá vivo? ",
            año: 2020,
            trailer: "https://www.youtube.com/embed/IKLpwmoAAeg",
            trailer2:"https://www.youtube.com/embed/rd2uFB13VJw",
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
                max-width: 600px;
                margin: 10px ;
                height:250px;
                padding: 20px;
                background-color: rgba(0, 0, 0, 0.5);
                border-radius: 15px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                text-align: center;
            }
    
            .video-container iframe {
                width: 80%; /* Aumentado el ancho del video */
                height: 80%; /* Aumentado la altura del video */
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
        </style>
    <div class="video-section">
        <div class="video-container">
            <h2>Trailer de ${pelicula.nombre} capítulo 1</h2>
            <div class="video-frame">
                <iframe src="${pelicula.trailer}" allowfullscreen ></iframe>
            </div>
        </div>
        <div class="recommended-video">
            <h2>Recomendado: Trailer de ${pelicula.nombre} capítulo 2</h2>
            <div class="video-container">
                <div class="video-frame">
                    <iframe src="${pelicula.trailer2}" allowfullscreen  ></iframe>
                </div>
            </div>
        </div>
    </div>
  
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

        searchForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const searchInput = document.getElementById("search-input");
            const searchTerm = searchInput.value.toLowerCase(); // Convertir a minúsculas para búsqueda insensible a mayúsculas

            // Lógica de búsqueda
            const resultados = peliculas.filter(pelicula => {
                const tituloPelicula = pelicula.titulo.toLowerCase();
                return tituloPelicula.includes(searchTerm);
            });

            // Mostrar los resultados en la consola (puedes ajustar esto según tu diseño)
            console.log("Resultados de búsqueda: ", resultados);

            // Aquí puedes mostrar los resultados en el sitio web, por ejemplo, creando elementos HTML dinámicamente
            // y agregándolos a una sección de resultados.
        });
    });
});



