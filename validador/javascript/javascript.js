const scriptURL = 'https://script.google.com/macros/s/AKfycbxNzG26k3MUtNPVCpioXIiU1jOdgQKvK3Z67cu7A_WnGgE4Mvzpze7DhBxW4nnu9_7WLg/exec'; // URL del script de Google Apps Script

const form = document.forms['contact-form'];
const overlay = document.getElementById('overlay'); // elemento de HTML que da opacidad para resaltar el icono de carga
const loadingIndicator = document.getElementById('loading-indicator'); // icono de carga

form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);

    // Obtener el código dinámico de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const codigo = urlParams.get('codigo');

    if (codigo) {
        formData.append('codigo', codigo);
    } else {
        console.error('No se encontró el parámetro "codigo" en la URL.');
        return; // detener el envío si no se encuentra el código en la URL
    }

    overlay.style.display = 'block'; // muestra el fondo del icono de carga
    loadingIndicator.style.display = 'block'; // muestra el icono de carga

    fetch(scriptURL, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            window.location.href = 'https://easyguess.com/confirmacion.html'; // redirige después de enviar el formulario
        } else {
            throw new Error('Network response was not ok.');
        }
    })
    .catch(error => console.error('Error!', error.message))
    .finally(() => {
        overlay.style.display = 'none';
        loadingIndicator.style.display = 'none';
    });
});
