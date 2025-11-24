console.log("MANEJO DE ERRORES EN LA CONCESIONARIA LIBERTADORES");

try {
    const cliente = JSON.parse('{"nombre":"Tanqueno", "edad":27}');
    console.log("Cliente cargado:", cliente);
} catch (e) {
    console.log("Error al procesar cliente:", e.message);
}

try {
    console.log("Intentando cargar inventario de autos...");
    throw new Error('Archivo de inventario no encontrado');
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Proceso de carga de inventario finalizado");
}
