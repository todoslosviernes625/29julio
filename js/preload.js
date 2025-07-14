// script.js
document.addEventListener("DOMContentLoaded", function() {
  // Simula una carga lenta para el ejemplo
  setTimeout(function() {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("contenido").style.display = "block";
  }, 2500); // Espera 2 segundos (simulando carga)
});