const areaTouch = document.getElementById('areaTouch');
areaTouch.addEventListener('touchstart', () =>{
    areaTouch.style.background = 'deepskblu';
});
areaTouch.addEventListener('touchend', () => {
    areaTouch.style.background = 'skyblue';
    alert("!Touch Finalizado")
});