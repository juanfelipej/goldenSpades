
const scriptURL = 'https://script.google.com/macros/s/AKfycbxNzG26k3MUtNPVCpioXIiU1jOdgQKvK3Z67cu7A_WnGgE4Mvzpze7DhBxW4nnu9_7WLg/exec'; //id que se obtiene mediante la configuracion de google app script

const form = document.forms['contact-form'];
const overlay = document.getElementById('overlay');// elemento de html que da opacidad para resaltar el icono de carga
const loadingIndicator = document.getElementById('loading-indicator'); //icono de carga

form.addEventListener('submit', e => { //cuando le de clic en el btn submit del form hace lo siguiente
    e.preventDefault();

    const formData = new FormData(form); 

    overlay.style.display = 'block'; //muestra el fondo del icono carga
    loadingIndicator.style.display = 'block'; //muestra el icono carga

    fetch(scriptURL, { method: 'POST', body: formData }) // fetch mediante metodo post enviando los datos del form
        .then(response => {
            if (response.ok) { //espera respuesta http 200
                window.location.href = 'https://easyguess.com/confirmacion.html';// pagina donde se redirecciona despues de realizar el envío
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
