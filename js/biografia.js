const sectBio = document.getElementById("sectBio");
const divImgBio = document.createElement("div");
divImgBio.classList.add("imagenBio");
const imgBio = document.createElement("img");
imgBio.src = 'giovani.jpeg';
imgBio.alt = 'Imagen de Perfil';

divImgBio.appendChild(imgBio);
sectBio.appendChild(divImgBio);

imgBio.style.borderRadius = '100px';
imgBio.style.marginTop = '20px';


const divTexto = document.createElement("div");
let textoBio1 = document.createElement("p");
let textoBio2 = document.createElement("p");

textoBio1.textContent = "Dr. Giovani Martín Díaz Gervasi";
textoBio2.textContent = 'Psicólogo Clínico e Investigador';

divTexto.appendChild(textoBio1);
divTexto.appendChild(textoBio2);
sectBio.appendChild(divTexto);

sectBio.style.display = 'flex';
sectBio.style.justifyContent = 'flex-start';
sectBio.style.columnGap = '70px';
textoBio1.style.marginTop = '50px';


const sectBio2 = document.getElementById("sectBio2");
sectBio2.style.marginTop = '10px';

const divVision = document.createElement("div");
let texVision1 = document.createElement("h3");
let texVision2 = document.createElement("p");

const sectBio3 = document.getElementById("sectBio3");
texVision1.textContent = 'VISIÓN';
texVision2.textContent = 'Ser parte de una perspectiva integral, biopsicosocial del ser humano y su comportamiento. Atender con eficacia, responsabilidad y sentido humanitario los problemas psicológicos que se presentan en las diferentes áreas del bienestar y desarrollo de la salud mental.';
divVision.appendChild(texVision1);
divVision.appendChild(texVision2);
sectBio3.appendChild(divVision);

texVision1.style.paddingTop = '10px';
texVision2.style.padding = '0px 20px 20px 20px';
divVision.style.border = '2px solid';
divVision.style.border = '2px solid #51614c';
divVision.style.borderRadius = '10px';
divVision.style.textAlign = 'center';
divVision.style.width = '100%';


const divMision = document.createElement("div");
let texMision1 = document.createElement("h3");
let texMision2 = document.createElement("p");

texMision1.textContent = 'MISIÓN';
texMision2.textContent = 'Afrontar los problemas concernientes a la salud mental y adaptación conductual a partir de enfoques terapéuticos actuales como la terapia Cognitivo-conductual de tercera generación. Se busca desarrollar fortalezas a nivel personal y social de modo que la persona crea y sienta que la propia vida vale la pena de vivise.';
divMision.appendChild(texMision1);
divMision.appendChild(texMision2);
sectBio3.appendChild(divMision);

texMision1.style.paddingTop = '10px';
texMision2.style.padding = '0px 20px 20px 20px';
divMision.style.border = '2px solid';
divMision.style.border = '2px solid #51614c';
divMision.style.borderRadius = '10px';
divMision.style.textAlign = 'center';
divMision.style.width = '100%';

sectBio3.style.display = 'flex';
sectBio3.style.justifyContent = 'flex-start';
sectBio3.style.columnGap = '70px';
sectBio3.style.marginTop = '50px';
sectBio3.style.padding = '0px 45px 40px 45px';



