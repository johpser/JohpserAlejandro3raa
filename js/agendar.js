document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');
    const citasRegistradas = document.getElementById('citasRegistradas');
    const mensaje = document.getElementById('mensaje');
    const consultaResult = document.getElementById('consultaResult');
    const reservarBtn = document.getElementById('reservarBtn');
    const consultarBtn = document.getElementById('consultarBtn');
    const nuevaCitaBtn = document.getElementById('nuevaCitaBtn');

    mostrarFormulario();

    document.getElementById('datos').addEventListener('submit', function (event) {
        event.preventDefault();

        const {nombre, correo, telefono, tipoDocumento, numeroDocumento, atencion, fecha, horario} = Object.fromEntries(new FormData(event.target).entries());

        let citas = JSON.parse(localStorage.getItem('citas')) || [];

        const citaExistente = citas.some(c => c.fecha === fecha && c.horario === horario);
        if (citaExistente) {
            mensaje.innerText = 'Ya existe una cita para la misma fecha y horario. Por favor, seleccione otro horario.';
            return;
        }

        const diaSemana = obtenerDiaSemana(fecha);

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

        citas = [...citas, cita];
        localStorage.setItem('citas', JSON.stringify(citas));

        mensaje.innerText = 'Cita reservada exitosamente.';
        mostrarCitaReservada(cita);
        ocultarFormulario();
        ocultarReservarBtn();
        mostrarConsultarNuevaBtn();
    });

    document.getElementById('limpiarBtn').addEventListener('click', function () {
        document.getElementById('datos').reset();
        limpiarMensaje();
        limpiarConsulta();
    });

    document.getElementById('consultarBtn').addEventListener('click', function () {
        const numeroDocumento = prompt('Ingrese el número de documento para consultar la cita:');
        if (numeroDocumento) {
            let citas = JSON.parse(localStorage.getItem('citas')) || [];
            const cita = citas.find(c => c.numeroDocumento === numeroDocumento);

            if (cita) {
                const {nombre, correo, telefono, tipoDocumento, atencion, fecha, horario, diaSemana} = cita;
                consultaResult.innerHTML = `
                    <p>Nombre: ${nombre}</p>
                    <p>Correo: ${correo}</p>
                    <p>Teléfono: ${telefono}</p>
                    <p>Tipo de Documento: ${tipoDocumento}</p>
                    <p>Número de Documento: ${numeroDocumento}</p>
                    <p>Tipo de Atención: ${atencion}</p>
                    <p>Fecha: ${formatoFecha(fecha)} - ${diaSemana}</p>
                    <p>Horario: ${horario}</p>
                `;
            } else {
                consultaResult.innerText = 'No se encontró ninguna cita con ese número de documento.';
            }
        }
    });

    document.getElementById('nuevaCitaBtn').addEventListener('click', function () {
        mostrarFormulario();
        ocultarCitaReservada();
        limpiarMensaje();
        limpiarConsulta();
        mostrarReservarBtn();
        ocultarConsultarNuevaBtn();
    });

    function mostrarFormulario() {
        formulario.style.display = 'block';
    }

    function ocultarFormulario() {
        formulario.style.display = 'none';
    }

    function mostrarCitaReservada(cita) {
        const {nombre, correo, telefono, tipoDocumento, numeroDocumento, atencion, fecha, horario, diaSemana} = cita;
        ocultarFormulario();
        citasRegistradas.innerHTML = `
            <div>
                <p>Nombre: ${nombre}</p>
                <p>Correo: ${correo}</p>
                <p>Teléfono: ${telefono}</p>
                <p>Tipo de Documento: ${tipoDocumento}</p>
                <p>Número de Documento: ${numeroDocumento}</p>
                <p>Tipo de Atención: ${atencion}</p>
                <p>Fecha: ${formatoFecha(fecha)} - ${diaSemana}</p>
                <p>Horario: ${horario}</p>
            </div>
        `;
        citasRegistradas.style.display = 'block';
    }

    function ocultarCitaReservada() {
        citasRegistradas.innerHTML = '';
        citasRegistradas.style.display = 'none';
    }

    function mostrarReservarBtn() {
        reservarBtn.style.display = 'inline-block';
    }

    function ocultarReservarBtn() {
        reservarBtn.style.display = 'none';
    }

    function mostrarConsultarNuevaBtn() {
        consultarBtn.style.display = 'inline-block';
        nuevaCitaBtn.style.display = 'inline-block';
    }

    function ocultarConsultarNuevaBtn() {
        consultarBtn.style.display = 'none';
        nuevaCitaBtn.style.display = 'none';
    }

    function limpiarMensaje() {
        mensaje.innerText = '';
    }

    function limpiarConsulta() {
        consultaResult.innerHTML = '';
    }

    function obtenerDiaSemana(fecha) {
        const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const fechaObj = new Date(`${fecha}T00:00:00`);
        return diasSemana[fechaObj.getDay()];
    }

    function formatoFecha(fecha) {
        const fechaObj = new Date(`${fecha}T00:00:00`);
        const dia = fechaObj.getDate().toString().padStart(2, '0');
        const mes = (fechaObj.getMonth() + 1).toString().padStart(2, '0');
        const anio = fechaObj.getFullYear();
        const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const diaSemana = diasSemana[fechaObj.getDay()];
        return `${dia}/${mes}/${anio} - ${diaSemana}`;
    }

    mostrarCitas();

    function mostrarCitas() {
        const citas = JSON.parse(localStorage.getItem('citas')) ?? [];
        citasRegistradas.innerHTML = '';

        citas.forEach(cita => {
            const {nombre, correo, telefono, tipoDocumento, numeroDocumento, atencion, fecha, horario, diaSemana} = cita;
            const citaElement = document.createElement('div');
            citaElement.innerHTML = `
                <p>Nombre: ${nombre}</p>
                <p>Correo: ${correo}</p>
                <p>Teléfono: ${telefono}</p>
                <p>Tipo de Documento: ${tipoDocumento}</p>
                <p>Número de Documento: ${numeroDocumento}</p>
                <p>Tipo de Atención: ${atencion}</p>
                <p>Fecha: ${formatoFecha(fecha)} - ${diaSemana}</p>
                <p>Horario: ${horario}</p>
            `;
            citasRegistradas.appendChild(citaElement);
        });
    }
});