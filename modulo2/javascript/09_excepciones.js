try {
    const user = JSON.parse('{"name":"pedro", "edad":25}');
} catch (e) {
    console.log("Error detectado:", e.message);
}

try {
    console.log("Intentando abrir archivo.....");
    throw new Error('Archivo no encontrados');

} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Finalizo el intento de abrir archivo");
}
