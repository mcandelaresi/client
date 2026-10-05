// Aprofitant l'exercici anterior, crea una llista ordenada de forma que primer apareguin els números imparells i després els parells.

function crearArrayNumerosAleatoris(n: number, min: number, max: number): number[] {
    let numeros: number[] = [];
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
        return -1; // a és imparell i b és parell, a ha de venir abans
    } else if (a % 2 === 0 && b % 2 !== 0) {
        return 1; // a és parell i b és imparell, b ha de venir abans
    }
    return 0; // si tots dos són parells o imparells, mantenim l'ordre original
});

console.log("Array ordenat amb imparells primer i després parells:\n" + llistaOrdenada.join(", "));
