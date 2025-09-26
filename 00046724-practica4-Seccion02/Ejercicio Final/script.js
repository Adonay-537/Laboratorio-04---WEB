function semana() {
    const diaUsuario = document.getElementById('inputDia').value.trim().toLowerCase();
    const mensajeUsuario = document.getElementById('inputMensaje').value.trim();
    const element = document.getElementById("respuestaUsuario");

    const actividades = {
        lunes: "Debes atender a un cliente específico.",
        martes: "Debes visitar una agencia fuera de la ciudad.",
        miercoles: "Debes llevar a tu hija al balé.",
        jueves: "Debes priorizar entregas de desarrollo.",
        viernes: "Debes atender problemas de forma remota.",
        sabado: "Debes hacer lo que tu esposa quiera.",
        domingo: "Día del Señor. Descansa y reflexiona."
    };

    if (actividades[diaUsuario]) {
        element.textContent = mensajeUsuario + " — " + actividades[diaUsuario];
    } else {
        element.textContent = "Día no reconocido. Intenta con lunes, martes, etc.";
    }

    document.getElementById('inputDia').value = '';
    document.getElementById('inputMensaje').value = '';
}

