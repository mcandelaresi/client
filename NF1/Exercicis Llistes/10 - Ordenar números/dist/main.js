function crearArrayNumerosAleatoris(n, min, max) {
    let numeros = [];
    for (let i = 0; i < n; i++) {
        let numeroAleatori = Math.floor(Math.random() * (max - min + 1)) + min;
        numeros.push(numeroAleatori);
    }
    return numeros;
}
let resultat = crearArrayNumerosAleatoris(10, 0, 1000000);
console.log("Array de 10 números aleatoris entre 0 i 1000000:\n" + resultat.join(", "));
let llistaOrdenada = resultat.sort((a, b) => {
    if (a % 2 !== 0 && b % 2 === 0) {
        return -1;
    }
    else if (a % 2 === 0 && b % 2 !== 0) {
        return 1;
    }
    return 0;
});
console.log("Array ordenat amb imparells primer i després parells:\n" + llistaOrdenada.join(", "));
export {};
//# sourceMappingURL=main.js.map