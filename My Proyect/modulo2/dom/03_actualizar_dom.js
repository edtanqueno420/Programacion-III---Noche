const mensaje = document.getElementById('mensaje');
mensaje.textContent = "Actualizando información de Concesionaria Libertadores";
mensaje.style.color = "red";

const link = document.getElementById('link');
link.setAttribute('href', 'https://www.chevrolet.com.ec/?ppc=GOOGLE_9786972438_20993058916_166987737588_103208040&gad_campaignid=20993058916');
link.classList.add('boton');
link.textContent = "Visitar sitio oficial Chevrolet";
