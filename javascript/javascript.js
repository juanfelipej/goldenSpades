
const scriptURL = 'https://script.google.com/macros/s/AKfycbxNzG26k3MUtNPVCpioXIiU1jOdgQKvK3Z67cu7A_WnGgE4Mvzpze7DhBxW4nnu9_7WLg/exec';
const form = document.forms['contact-form'];
const overlay = document.getElementById('overlay');
const loadingIndicator = document.getElementById('loading-indicator');

form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);

    overlay.style.display = 'block';
    loadingIndicator.style.display = 'block';

    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
            if (response.ok) {
                window.location.href = 'https://easyguess.com/confirmacion.html';
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
