const SectServicio = document.getElementById("SectServicio");
const divBannerSer = document.createElement("div");
const texBannerSer = document.createElement("h1");

texBannerSer.textContent = 'SERVICIOS';

divBannerSer.appendChild(texBannerSer);
SectServicio.appendChild(divBannerSer);

divBannerSer.style.backgroundColor = '#bde4f2';
divBannerSer.style.textAlign = 'center';
texBannerSer.style.color = '#51614c';

const container = document.getElementById("container");
const divImg1 = document.createElement("div");
const divTex1 = document.createElement("div");
let textTitulo1 = document.createElement("p");
let texDescripcion1 = document.createElement("p");
let texDescripcion2 = document.createElement("p");
let texDescripcion3 = document.createElement("ul");
const img1 = document.createElement("img");

img1.src = 'galeria/conductualtercera2.avif';
img1.alt = 'Hombre en consulta';
img1.style.width = '100%';
img1.style.height = '100%';

img1.style.borderRadius = '50px';
img1.style.border = '2px solid #bde4f2';

divImg1.appendChild(img1);
container.appendChild(divImg1);

textTitulo1.textContent = 'PSICOTERAPIA COGNITIVO-CONDUCTUAL DE TERCERA GENERACIÓN';
texDescripcion1.textContent = 'Sirve para tratar un amplio abanico de problemas, además de ayudar a identificar y afrontar situaciones concretas rápidamente. Generalmente, requiere menos sesiones que otros tipos de terapia.';
texDescripcion2.textContent = 'La Terapia Cognitivo Conductual es una herramienta útil para abordar desafíos emocionales. Por ejemplo, puede ayudarte a lo siguiente:';
texDescripcion3.textContent = '';
divTex1.appendChild(textTitulo1);
divTex1.appendChild(texDescripcion1);
divTex1.appendChild(texDescripcion2);
divTex1.appendChild(texDescripcion3);
container.appendChild(divTex1);

divTex1.style.border = '2px solid #bde4f2';
divTex1.style.borderRadius = '50px';
divTex1.style.backgroundColor = '#cdffff';

textTitulo1.style.textAlign = 'center';
texDescripcion1.style.fontSize = '12px';
texDescripcion2.style.fontSize = '12px';
texDescripcion3.style.fontSize = '12px';
texDescripcion1.style.textAlign = 'justify';
textTitulo1.style.padding = '20px 15px 0px 15px';
texDescripcion1.style.padding = '0px 12px 0px 12px';
texDescripcion2.style.padding = '0px 12px 0px 12px';

const lista = [
    "Controlar los síntomas de patologías mentales y evitar recaídas",
    "Sobrellevar situaciones de Estrés de nuestra rutina diaria.",
    "Aprender a controlar las emociones.",
    "Solucionar conflictos y aprender a relacionarse mejor.",
    "Superar las pérdidas y el dolor, así como traumas emocionales.",
    "Afrontar el diagnóstico de una enfermedad.",
    "Tener controlados los síntomas físicos crónicos."
];

lista.forEach(function(datos) {
    const elementos = document.createElement("li");
    elementos.textContent = datos;
    texDescripcion3.appendChild(elementos);
});

const divBton = document.createElement("div");
const Bton1 = document.createElement("button");

Bton1.textContent = 'Agendar Cita';
Bton1.style.cursor = 'pointer';
Bton1.style.padding = '10px 20px';
Bton1.style.border = 'none';
Bton1.style.backgroundColor = '#bff3cd';
Bton1.style.color = 'black';
Bton1.style.borderRadius = '5px';
Bton1.style.marginTop = '120px';

Bton1.addEventListener('click', function() {
    window.location.href = 'http://127.0.0.1:5500/index.html';
});

divBton.appendChild(Bton1);
container.appendChild(divBton);

container.style.display = 'flex';
container.style.justifyContent = 'flex-start';
container.style.columnGap = '50px';
container.style.marginTop = '50px';
container.style.padding = '0px 45px 40px 45px';

// Empieza segundo servicio

const container2 = document.getElementById("container2");
const divImg2 = document.createElement("div");
const divTex2 = document.createElement("div");
let textTitulo2 = document.createElement("p");
let texDesc1 = document.createElement("p");
let texDesc2 = document.createElement("p");
const img2 = document.createElement("img");

img2.src = 'galeria/conflicto.jpg';
img2.alt = 'Personas discutiendo';
img2.style.width = '100%';
img2.style.height = '100%';
img2.style.borderRadius = '50px';
img2.style.border = '2px solid #bde4f2';

divImg2.appendChild(img2);
container2.appendChild(divImg2);

textTitulo2.textContent = 'ORIENTACIÓN PSICOLÓGICA EN PROBLEMAS INTERPERSONALES Y DE ADAPTACIÓN';
texDesc1.textContent = 'Un conflicto suele definirse como una discrepancia de intereses. ¿Pero qué es en un sentido psicológico y emocional? Un conflicto es, ante todo, una lucha de egos. Queremos algo diferente y queremos conseguirlo bien sea a través del otro, por encima de las ideas del otro o a pesar del otro.';
texDesc2.textContent ='Los conflictos suceden de forma natural en toda relación interpersonal por un motivo claro: somos seres humanos diferentes, subjetivos, con ideas y propósitos diferentes, y de ese encuentro surge bienestar, un vínculo que puede ser íntimo, y a la vez conflictos.';
divTex2.appendChild(textTitulo2);
divTex2.appendChild(texDesc1);
divTex2.appendChild(texDesc2);
container2.appendChild(divTex2);

divTex2.style.border = '2px solid #bde4f2';
divTex2.style.borderRadius = '50px';
divTex2.style.backgroundColor = '#cdffff';
divTex2.style.width = '110%';
divTex2.style.height = '260px';

textTitulo2.style.textAlign = 'center';
texDesc1.style.fontSize = '12px';
texDesc1.style.textAlign = 'justify';
texDesc2.style.fontSize = '12px';
texDesc2.style.textAlign = 'justify';
textTitulo2.style.padding = '20px 15px 0px 15px';
texDesc1.style.padding = '0px 12px 0px 12px';
texDesc2.style.padding = '0px 12px 0px 12px';


const divBton2 = document.createElement("div");
const Bton2 = document.createElement("button");

Bton2.textContent = 'Agendar Cita';
Bton2.style.cursor = 'pointer';
Bton2.style.padding = '10px 20px';
Bton2.style.border = 'none';
Bton2.style.backgroundColor = '#bff3cd';
Bton2.style.color = 'black';
Bton2.style.borderRadius = '5px';
Bton2.style.marginTop = '100px';

Bton2.addEventListener('click', function() {
    window.location.href = 'http://127.0.0.1:5500/index.html';
});

divBton2.appendChild(Bton2);
container2.appendChild(divBton2);

container2.style.display = 'flex';
container2.style.flexDirection = 'row';
container2.style.alignItems = 'flex-start';
container2.style.columnGap = '50px';
container2.style.marginTop = '50px';
container2.style.padding = '0px 45px 40px 45px';