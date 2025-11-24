// Un solo elemento por ID
const titulo = document.getElementById('titulo');
console.log(titulo.textContent);

// Varios elementos con la misma clase "nota"
const notas = document.getElementsByClassName('nota');
Array.from(notas).forEach(nota => console.log(nota.textContent));

// Varios elementos con la misma clase "item"
const items = document.getElementsByClassName('item');
Array.from(items).forEach(item => console.log(item.textContent));

// Varios elementos por nombre
const notaName = document.getElementsByName('notaName');
Array.from(notaName).forEach(nota => console.log(nota.textContent));
