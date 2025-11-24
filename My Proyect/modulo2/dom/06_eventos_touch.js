const areaTouch = document.getElementById('areaTouch');

areaTouch.addEventListener('touchstart', () =>{
    areaTouch.style.background = 'deepskyblue'; // corrección
});

areaTouch.addEventListener('touchend', () => {
    areaTouch.style.background = 'skyblue';
    alert("¡Gracias por visitar la concesionaria Libertadores!");
});
