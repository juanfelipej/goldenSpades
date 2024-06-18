document.addEventListener('DOMContentLoaded', function () {
    const form = document.forms['contact-form'];
    const inputs = form.querySelectorAll('.form-control-custom');

    inputs.forEach(input => {
        const fieldLabel = input.parentElement.querySelector('.field-label');

        // Mostrar el nombre del campo cuando el input obtiene el foco
        input.addEventListener('focus', () => {
            fieldLabel.style.opacity = '1';
            fieldLabel.style.transform = 'translateY(-20px)';
        });

        // Ocultar el nombre del campo cuando el input pierde el foco si no tiene valor
        input.addEventListener('blur', () => {
            if (!input.value.trim()) {
                fieldLabel.style.opacity = '0';
                fieldLabel.style.transform = 'translateY(0)';
            }
        });

        // Verificar si el input ya tiene un valor inicialmente
        if (input.value.trim()) {
            fieldLabel.style.opacity = '1';
            fieldLabel.style.transform = 'translateY(-20px)';
        }
    });
});
