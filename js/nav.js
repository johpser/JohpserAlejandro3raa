cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = 'navbar';


ORIGEN.href = '/';
ORIGEN.appendChild(img);
img.src = 'logo.png';
img.alt = 'cerebro';
img.style.width= '50px';


liImagen.appendChild(ORIGEN);
ul.appendChild(liImagen);
ul.style.listStyle = 'none';

for (const link of links) {
    const li = document.createElement('li');    
    li.innerHTML = `<a href="${link.toLowerCase()}.html" >${link}</a>`;
    ul.appendChild(li);
}


cabecera.style.backgroundColor = '#bff3cd';


footer[0].appendChild(parrafoFooter);
parrafoFooter.innerHTML = 'LIMA - PERÚ - ' + TIME + ' | CONTACTANOS AL 981433765';
parrafoFooter.style.textAlign = 'center';
footer[0].style.backgroundColor= '#bff3cd';

