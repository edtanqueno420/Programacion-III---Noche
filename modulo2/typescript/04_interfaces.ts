interface Usuario{
    id:number,
    nombre:string,
    correo:string
}

const usuario1: Usuario={
    id:1,
    nombre:'Shisui',
    correo:'shisui@uchiha.com'
}
console.log(usuario1);
console.log(usuario1.nombre);

interface Producto{
    id:number,
    nombre:string,
    precio:number
}

const producto1: Producto={
    id:1,
    nombre:'mota',
    precio: 10
}

const producto2: Producto={
    id:1,
    nombre:'mota',
    precio: 20
}
console.log(producto1);
console.log(producto2);