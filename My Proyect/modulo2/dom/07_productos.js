const productos = [
  { nombre: "Toyota Corolla", descripcion: "Sedán 2020", precio: 14500, existencia: 3, ubicacion: "Lote A" },
  { nombre: "Chevrolet Spark", descripcion: "Compacto 2019", precio: 7800, existencia: 5, ubicacion: "Lote B" },
  { nombre: "Kia Sportage", descripcion: "SUV 2021", precio: 23500, existencia: 2, ubicacion: "Lote C" },
  { nombre: "Hyundai Tucson", descripcion: "SUV 2020", precio: 21000, existencia: 1, ubicacion: "Lote D" },
  { nombre: "Mazda 3", descripcion: "Sedán 2018", precio: 12500, existencia: 4, ubicacion: "Lote E" },
  { nombre: "Nissan Versa", descripcion: "Sedán 2022", precio: 16000, existencia: 3, ubicacion: "Lote F" },
  { nombre: "Ford Ranger", descripcion: "Camioneta 2021", precio: 28000, existencia: 2, ubicacion: "Lote G" },
  { nombre: "Jeep Renegade", descripcion: "SUV 2019", precio: 18500, existencia: 2, ubicacion: "Lote H" },
  { nombre: "Volkswagen Gol", descripcion: "Hatchback 2018", precio: 8500, existencia: 6, ubicacion: "Lote I" },
  { nombre: "Chevrolet D-Max", descripcion: "Camioneta 2020", precio: 26500, existencia: 2, ubicacion: "Lote J" }
];

const tabla = document.getElementById('cuerpoTabla');
productos.forEach(p => {
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${p.nombre}</td>
    <td>${p.descripcion}</td>
    <td>$${p.precio.toFixed(2)}</td>
    <td>${p.existencia}</td>
    <td>${p.ubicacion}</td>
  `;
  tabla.appendChild(fila);
});
