
const imagenComun = "../Recursos/chat.png";

const preguntas = [
    "¿Cuál es tu mayor logro profesional?",
    "¿Cómo te enfrentas a los desafíos?",
    "¿Tienes experiencia previa en el rubro audiovisual?",
    "¿Manejas alguna herramienta de software para la producción audiovisual?",
    "¿Tienes conocimientos sobre edición de imagen y/o video?",
    "¿Has colaborado en la creación de algún proyecto?",
    "¿Has formado parte de un equipo de trabajo audiovisual?",
    "¿Puedes proporcionar ejemplos de proyectos en los que hayas desempeñado un papel clave?",
    "¿De qué manera resolverías problemas técnicos que se presenten en la producción?",
    "¿Tienes experiencia en la producción de contenido para las diferentes plataformas (televisión, web, redes sociales, etc)?",
    "¿Tienes experiencia en la creación y edición de contenido para plataformas específicas, como YouTube, Instagram, o TikTok?¿Sabes utilizar algún programa de software que podría resultar útil en la realización de un proyecto?",
    "¿Sabes utilizar equipos técnicos?¿Cuáles?",
    "¿Cómo manejas situaciones de presión o plazos ajustados?",
    "¿Cómo te mantenes actualizado en el campo de la industria audiovisual?",
    "¿Cuál es tu enfoque para trabajar en equipo y colaborar con colegas?",
    "¿Cuál es tu estilo predilecto de comunicación y cómo te adaptas a diferentes audiencias?",
    "¿Cuál es tu nivel de familiaridad con las herramientas y tecnologías necesarias para un puesto en la industria audiovisual?",
    "¿Qué valores y ética profesional consideras más importantes a la hora de desarrollar un trabajo audiovisual?",
    "¿Cuál es tu proceso típico para abordar y resolver problemas en el trabajo?",
    "¿Te desenvolves mejor trabajando en equipo o realizando tareas de forma individual?",
    "¿Podrías mencionar 3 fortalezas y tres debilidades que tengas?",
    "¿Por qué te interesa este trabajo?",
    "¿Te mantenes al día con las tendencias y avances en la industria audiovisual?",
    "¿Qué te motiva a buscar un puesto en nuestra empresa en particular?",
    "¿Has investigado nuestros proyectos anteriores o nuestro enfoque en el sector?",
   "¿Cómo te adaptas a los cambios en el flujo de trabajo y las expectativas del cliente en un proyecto?",
    "¿Cómo te adaptas a los cambios en el flujo de trabajo y las expectativas del cliente en un proyecto?",
    "Cuéntame sobre tu formación académica relacionada con la realización audiovisual, si la tienes.",
    "¿Qué consideras que podrías aportar a nuestro equipo de trabajo y por qué consideras que deberíamos contratarte?",
    "¿Tenés alguna preferencia respecto o un puesto específico al que te gustaría aplicar? ¿Por qué?",
    "¿Que objetivos tienes a corto y largo plazo para tu vida?",
    "¿Cuáles son tus hobbies?",  
];

let preguntasPorResponder = [...preguntas];

        function cargarPregunta() {
            const indiceRandom = Math.floor(Math.random() * preguntasPorResponder.length);
            const pregunta = preguntasPorResponder.splice(indiceRandom, 1)[0];

            const entrevistaSection = document.getElementById("entrevista");
            const nuevaPreguntaContainer = document.createElement("div");
            nuevaPreguntaContainer.classList.add("pregunta-container");

            const nuevaImagenContainer = document.createElement("div");
            nuevaImagenContainer.classList.add("pregunta-imagen");
            const nuevaImagen = document.createElement("img");
            nuevaImagen.src = imagenComun;
            nuevaImagenContainer.appendChild(nuevaImagen);

            const nuevaTextoContainer = document.createElement("div");
            nuevaTextoContainer.classList.add("pregunta-texto");
            const nuevaPregunta = document.createElement("p");
            nuevaPregunta.innerText = pregunta;
            nuevaTextoContainer.appendChild(nuevaPregunta);

            nuevaPreguntaContainer.appendChild(nuevaImagenContainer);
            nuevaPreguntaContainer.appendChild(nuevaTextoContainer);

            entrevistaSection.appendChild(nuevaPreguntaContainer);
        }

        function siguientePregunta() {
            const respuesta = document.getElementById("respuesta").value;
            const entrevistaSection = document.getElementById("entrevista");

            const nuevaRespuesta = document.createElement("p");
            nuevaRespuesta.innerText = `Respuesta: ${respuesta}`;
            entrevistaSection.appendChild(nuevaRespuesta);

            document.getElementById("respuesta").value = "";

            if (preguntasPorResponder.length > 0) {
                cargarPregunta();
            } else {
                alert("Entrevista completada");
            }
        }

        function enviarRespuesta(event) {
            if (event.key === "Enter") {
                siguientePregunta();
            }
        }

        cargarPregunta();