const caja = document.getElementById('caja');
caja.addEventListener('mouseover',() =>{
        caja.style.background = 'black';
});
caja.addEventListener('mouseout',() =>{
    caja.style.background ='lightgray';
});
caja.addEventListener('click', () =>{
    alert("!click");
});