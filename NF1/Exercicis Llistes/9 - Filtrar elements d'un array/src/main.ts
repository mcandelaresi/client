import {diccionari } from "./Diccionari.js";


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

let parells = resultat.filter((numero) => numero % 2 === 0);
console.log("Array de números parells:\n" + parells.join(", "));

let imparells = resultat.filter((numero) => numero % 2 !== 0);
console.log("Array de números imparells:\n" + imparells.join(", "));