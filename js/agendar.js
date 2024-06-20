document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');
    const citasRegistradas = document.getElementById('citasRegistradas');
    const mensaje = document.getElementById('mensaje');
    const consultaResult = document.getElementById('consultaResult');
    const reservarBtn = document.getElementById('reservarBtn');
    const consultarBtn = document.getElementById('consultarBtn');
    const nuevaCitaBtn = document.getElementById('nuevaCitaBtn');

    // Mostrar formulario inicialmente
    mostrarFormulario();

    // Evento para manejar la solicitud de cita
    document.getElementById('datos').addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtención de datos del formulario
        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const telefono = document.getElementById('telefono').value;
        const tipoDocumento = document.getElementById('tipoDocumento').value;
        const numeroDocumento = document.getElementById('numeroDocumento').value;
        const atencion = document.getElementById('atencion').value;
        const fecha = document.getElementById('fecha').value;
        const horario = document.getElementById('horario').value;

        let citas = JSON.parse(localStorage.getItem('citas')) || [];

        // Verificar si ya existe una cita para la misma fecha y horario
        const citaExistente = citas.some(c => c.fecha === fecha && c.horario === horario);
        if (citaExistente) {
            mensaje.innerText = 'Ya existe una cita para la misma fecha y horario. Por favor, seleccione otro horario.';
            return;
        }

        const diaSemana = obtenerDiaSemana(fecha); // Obtener el día de la semana

        const cita = {
            nombre,
            correo,
            telefono,
            tipoDocumento,
            numeroDocumento,
            atencion,
            fecha,
            horario,
            diaSemana
        };

        citas.push(cita);
        localStorage.setItem('citas', JSON.stringify(citas));

        mensaje.innerText = 'Cita reservada exitosamente.';
        mostrarCitaReservada(cita); // Mostrar cita reservada
        ocultarFormulario(); // Ocultar formulario
        ocultarReservarBtn(); // Ocultar botón de Reservar Cita
        mostrarConsultarNuevaBtn(); // Mostrar botones de Consultar y Nueva Cita
    });

    // Evento para limpiar el formulario
    document.getElementById('limpiarBtn').addEventListener('click', function () {
        document.getElementById('datos').reset(); // Limpiar formulario
        limpiarMensaje(); // Limpiar mensaje de éxito
        limpiarConsulta(); // Limpiar resultado de consulta
    });

    // Evento para consultar cita por número de documento
    document.getElementById('consultarBtn').addEventListener('click', function () {
        const numeroDocumento = prompt('Ingrese el número de documento para consultar la cita:');
        if (numeroDocumento) {
            let citas = JSON.parse(localStorage.getItem('citas')) || [];
            const cita = citas.find(c => c.numeroDocumento === numeroDocumento);

            if (cita) {
                consultaResult.innerHTML = `
                    <p>Nombre: ${cita.nombre}</p>
                    <p>Correo: ${cita.correo}</p>
                    <p>Teléfono: ${cita.telefono}</p>
                    <p>Tipo de Documento: ${cita.tipoDocumento}</p>
                    <p>Número de Documento: ${cita.numeroDocumento}</p>
                    <p>Tipo de Atención: ${cita.atencion}</p>
                    <p>Fecha: ${formatoFecha(cita.fecha)} - ${cita.diaSemana}</p>
                    <p>Horario: ${cita.horario}</p>
                `;
            } else {
                consultaResult.innerText = 'No se encontró ninguna cita con ese número de documento.';
            }
        }
    });

    // Evento para generar una nueva cita
    document.getElementById('nuevaCitaBtn').addEventListener('click', function () {
        mostrarFormulario();
        ocultarCitaReservada();
        limpiarMensaje();
        limpiarConsulta();
        mostrarReservarBtn(); // Mostrar botón de Reservar Cita
        ocultarConsultarNuevaBtn(); // Ocultar botones de Consultar y Nueva Cita
    });

    // Función para mostrar el formulario de citas
    function mostrarFormulario() {
        formulario.style.display = 'block';
    }

    // Función para ocultar el formulario de citas
    function ocultarFormulario() {
        formulario.style.display = 'none';
    }

    // Función para mostrar la cita reservada
    function mostrarCitaReservada(cita) {
        ocultarFormulario();
        citasRegistradas.innerHTML = `
            <div>
                <p>Nombre: ${cita.nombre}</p>
                <p>Correo: ${cita.correo}</p>
                <p>Teléfono: ${cita.telefono}</p>
                <p>Tipo de Documento: ${cita.tipoDocumento}</p>
                <p>Número de Documento: ${cita.numeroDocumento}</p>
                <p>Tipo de Atención: ${cita.atencion}</p>
                <p>Fecha: ${formatoFecha(cita.fecha)} - ${cita.diaSemana}</p>
                <p>Horario: ${cita.horario}</p>
            </div>
        `;
        citasRegistradas.style.display = 'block';
    }

    // Función para ocultar la cita reservada
    function ocultarCitaReservada() {
        citasRegistradas.innerHTML = '';
        citasRegistradas.style.display = 'none';
    }

    // Función para mostrar el botón de Reservar Cita
    function mostrarReservarBtn() {
        reservarBtn.style.display = 'inline-block';
    }

    // Función para ocultar el botón de Reservar Cita
    function ocultarReservarBtn() {
        reservarBtn.style.display = 'none';
    }

    // Función para mostrar los botones de Consultar y Nueva Cita
    function mostrarConsultarNuevaBtn() {
        consultarBtn.style.display = 'inline-block';
        nuevaCitaBtn.style.display = 'inline-block';
    }

    // Función para ocultar los botones de Consultar y Nueva Cita
    function ocultarConsultarNuevaBtn() {
        consultarBtn.style.display = 'none';
        nuevaCitaBtn.style.display = 'none';
    }

    // Función para limpiar el mensaje de éxito
    function limpiarMensaje() {
        mensaje.innerText = '';
    }

    // Función para limpiar el resultado de consulta
    function limpiarConsulta() {
        consultaResult.innerHTML = '';
    }

    // Función para obtener el día de la semana a partir de una fecha
    function obtenerDiaSemana(fecha) {
        const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const fechaObj = new Date(fecha + 'T00:00:00'); // Asegurar que la fecha se interprete correctamente como local
        return diasSemana[fechaObj.getDay()];
    }

    // Función para dar formato dd/mm/yyyy a la fecha
    function formatoFecha(fecha) {
        const fechaObj = new Date(fecha + 'T00:00:00'); // Asegurar que la fecha se interprete correctamente como local
        const dia = fechaObj.getDate().toString().padStart(2, '0');
        const mes = (fechaObj.getMonth() + 1).toString().padStart(2, '0');
        const anio = fechaObj.getFullYear();
        const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const diaSemana = diasSemana[fechaObj.getDay()];
        return `${dia}/${mes}/${anio} - ${diaSemana}`;
    }

    // Mostrar citas al cargar la página
    mostrarCitas();

    // Función para mostrar las citas registradas
    function mostrarCitas() {
        let citas = JSON.parse(localStorage.getItem('citas')) || [];
        citasRegistradas.innerHTML = '';

        citas.forEach(cita => {
            const citaElement = document.createElement('div');
            citaElement.innerHTML = `
                <p>Nombre: ${cita.nombre}</p>
                <p>Correo: ${cita.correo}</p>
                <p>Teléfono: ${cita.telefono}</p>
                <p>Tipo de Documento: ${cita.tipoDocumento}</p>
                <p>Número de Documento: ${cita.numeroDocumento}</p>
                <p>Tipo de Atención: ${cita.atencion}</p>
                <p>Fecha: ${formatoFecha(cita.fecha)} - ${cita.diaSemana}</p>
                <p>Horario: ${cita.horario}</p>
            `;
            citasRegistradas.appendChild(citaElement);
        });
    }
});