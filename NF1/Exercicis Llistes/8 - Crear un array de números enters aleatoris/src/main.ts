import {diccionari } from "./Diccionari.js";

//Fes un mètode que, passant-li un enter positiu (n), retorni un array amb n números enters entre 0 i 1000000 (aquest últim no inclòs).

//Per provar aquest mètode, fes un altre que el cridi per generar un array de 10 números i el mostri amb una separació de coma i espai entre cada número:


function crearArrayNumerosAleatoris(n: number, min: number, max: number): number[] {
    let numeros: number[] = [];
    for (let i = 0; i < n; i++) {
        let numeroAleatori = Math.floor(Math.random() * (max - min + 1)) + min;
        numeros.push(numeroAleatori);
    }
    return numeros;
}
console.log("Array de 10 números aleatoris entre 0 i 1000000:\n" + crearArrayNumerosAleatoris(10, 0, 1000000).join(", "));

