function crearArrayNumerosAleatoris(n, min, max) {
    let numeros = [];
    for (let i = 0; i < n; i++) {
        let numeroAleatori = Math.floor(Math.random() * (max - min + 1)) + min;
        numeros.push(numeroAleatori);
    }
    return numeros;
}
console.log("Array de 10 números aleatoris entre 0 i 1000000:\n" + crearArrayNumerosAleatoris(10, 0, 1000000).join(", "));
export {};
//# sourceMappingURL=main.js.map