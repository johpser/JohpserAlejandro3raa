const sectIndex = document.getElementById("sectIndex");
const divIndex = document.createElement("div");
let textIndex = document.createElement("h1");

textIndex.textContent = "TU BIENESTAR ES NUESTRA PRIORIDAD";

divIndex.classList.add("tituloIndex");
sectIndex.appendChild(divIndex);
divIndex.appendChild(textIndex);

textIndex.style.color = '#51614c';
textIndex.style.fontSize = '50px';
divIndex.style.textAlign = 'center';

const banner2 = document.createElement("div");
let texbanner2 = document.createElement("h2");
let texbanner3 = document.createElement("h2");

texbanner2.textContent = "Profesional";
texbanner3.textContent = "Psicólogo clínico de la Salud e Investigador";
texbanner2.style.color = '#51614c';
texbanner3.style.color = '#51614c';
texbanner2.style.marginLeft = '140px';
texbanner3.style.marginLeft = '140px';
texbanner2.style.fontSize = '40px';
texbanner3.style.fontSize = '35px';
texbanner3.style.marginTop = '-30px';

divIndex.appendChild(banner2);
banner2.appendChild(texbanner2);
banner2.appendChild(texbanner3);

const sectIndex2 = document.getElementById("sectIndex2");
const divIndex2 = document.createElement("div");
const divIndex3 = document.createElement("div");
const botonIndex = document.createElement("button");
let textIndexAt2 = document.createElement("p");
let textIndexAt3 = document.createElement("p");
let textIndexAt4 = document.createElement("p");
let textIndexAt5 = document.createElement("p");
let textButtonInd = document.createElement("a");

textIndexAt2.textContent = "Atención presencial y online";
textButtonInd.href = 'https://paletadecolores.online/vintage/';
textButtonInd.textContent = 'RESERVAR CITA';
textButtonInd.style.color = 'inherit'; 
textButtonInd.style.textDecoration = 'none';

divIndex2.classList.add("texAtencion1");
sectIndex2.appendChild(divIndex2);
divIndex2.appendChild(textIndexAt2);

botonIndex.appendChild(textButtonInd);
divIndex2.appendChild(botonIndex);
divIndex2.style.border = '2px solid #51614c';
divIndex2.style.borderRadius = '10px';
divIndex2.style.textAlign = 'center';
divIndex2.style.width = '30%'; 

textIndexAt3.textContent = "Horario de atención";
textIndexAt4.textContent = "LUNES - VIERNES";
textIndexAt5.textContent = "9:00AM A 1:00PM - 3:00PM A 8:00PM";
divIndex3.classList.add("texAtencion2");
sectIndex2.appendChild(divIndex3);
divIndex3.appendChild(textIndexAt3);
divIndex3.appendChild(textIndexAt4);
divIndex3.appendChild(textIndexAt5);
divIndex3.style.border = '2px solid #51614c';
divIndex3.style.borderRadius = '10px';
divIndex3.style.textAlign = 'center';
divIndex3.style.width = '30%'; 

sectIndex2.style.display= 'flex';
sectIndex2.style.justifyContent = 'space-evenly';
sectIndex2.style.marginTop = '100px';


const sectIndex3 = document.getElementById("sectIndex3")
sectIndex3.classList.add('cajoninfo');
const info = document.createElement("div")
let texinfo = document.createElement("p");
let texinfo2 = document.createElement("p");

texinfo.innerHTML = "<h3>Bienvenido a mejorar tu salud mental</h3>";
texinfo2.innerHTML = "<h3>Cuento con amplia experiencia en intervención psicológica en diversas situaciones emocionales, de interacción social, de adaptación y personalidad.</h3>";
info.appendChild(texinfo);
info.appendChild(texinfo2);
sectIndex3.appendChild(info);

texinfo.style.fontSize = '30px';
texinfo2.style.marginTop = '35px';



const botonIndex2 = document.createElement("button");
let textButton2 = document.createElement("a");

textButton2.href = 'http://127.0.0.1:5500/biografia.html';
textButton2.textContent = 'CONOCER MAS';
textButton2.style.color = 'inherit'; 
textButton2.style.textDecoration = 'none';
botonIndex2.style.marginTop = '25px';

info.appendChild(botonIndex2);
botonIndex2.appendChild(textButton2);
info.style.textAlign = 'center';

const divImagen = document.createElement ("div");
divImagen.classList.add("imagenindex");
const imagenIndex = document.createElement("img");
imagenIndex.src= 'consultorioss.jpg';
imagenIndex.alt = 'Consultorio';

divImagen.appendChild(imagenIndex);
sectIndex3.appendChild(divImagen);
sectIndex3.style.padding = '5%'
sectIndex3.style.marginTop= '20px'
sectIndex3.style.display = 'grid';
sectIndex3.style.gridTemplateColumns = '1fr 1fr';
sectIndex3.style.gap = '20px';

imagenIndex.style.width = '80%';
imagenIndex.style.borderRadius = '100px';
imagenIndex.style.border = '2px solid #51614c';


