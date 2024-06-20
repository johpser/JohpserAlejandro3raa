const cuerpo = document.body;
const cabecera = document.getElementById('header');
const navegacion = document.createElement('div'); 
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const links = ["Index", "Biografia", "Servicios", "Reservar Cita"];
const liImagen = document.createElement('li');
const img = document.createElement('img');
const ORIGEN = document.createElement('a');
const footer = document.getElementsByTagName('footer');
const parrafoFooter = document.createElement('p');
const TIME = new Date().getFullYear(); // 2024


document.addEventListener('DOMContentLoaded', function() {
    const buttonToggle = document.getElementById('toggle-button');
    const cuerpo = document.body;

    buttonToggle.className = 'button_grey';

    buttonToggle.addEventListener('click', function() {
        toggleDarkMode();
        updateButtonText();
    });

    function toggleDarkMode() {
        if (cuerpo.style.backgroundColor === 'black') {
            cuerpo.style.backgroundColor = 'white';
            cuerpo.style.color = 'black';
        } else {
            cuerpo.style.backgroundColor = 'black';
            cuerpo.style.color = 'white';
        }
    }

    function updateButtonText() {
        if (cuerpo.style.backgroundColor === 'black') {
            buttonToggle.textContent = 'Cambiar a modo claro';
        } else {
            buttonToggle.textContent = 'Cambiar a modo oscuro';
        }
    }
    updateButtonText();
});