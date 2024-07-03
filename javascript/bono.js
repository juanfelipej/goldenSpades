function showPopup(datos) {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');
    popupText.textContent = `¿Estás seguro de que quieres reclamar la boleta del usuario ${datos.nombre} con código ${datos.codigo}?`;
    popup.style.display = 'flex';
  }
  
  function hidePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
  }
  
  function confirmClaim() {
    // Aquí puedes agregar la lógica para confirmar la reclamación de la boleta
    alert('Boleta reclamada exitosamente!');
    hidePopup();
  }
  function showPopdown(datos) {
    const popdown = document.getElementById('showPopdown');
    const popdownText = document.getElementById('popdown-text');
    popdownText.textContent = `Lo sentimos pero ${datos.nombre} ya reclamó su boleta con código ${datos.codigo}`;
    popdown.style.display = 'flex';
  }
  
  function hidePopup() {
    const popdown = document.getElementById('popup');
    popdown.style.display = 'none';
  }
  
  function confirmClaim() {
    // Aquí puedes agregar la lógica para confirmar la reclamación de la boleta
    alert('Boleta reclamada exitosamente!');
    hidePopup();
  }
  