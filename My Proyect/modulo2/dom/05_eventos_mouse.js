const caja = document.getElementById('caja');

caja.addEventListener('mouseover', () =>{
    caja.style.background = 'black';
    caja.style.color = 'white';
});

caja.addEventListener('mouseout', () =>{
    caja.style.background ='lightgray';
    caja.style.color = 'black';
});

caja.addEventListener('click', () =>{
    alert("¡Bienvenido a la concesionaria Libertadores!");
});
