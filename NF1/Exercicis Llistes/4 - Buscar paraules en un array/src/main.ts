//Fes un mètode que busqui una paraula en un array sense ordenar i mostri la paraula i posició si l'ha trobat.

//Crea un array de 1000 paraules i fes un programa, triant aleatòriament 1000 paraules del diccionari i busqui si hi són en l'array.

//Comprova el temps que ha trigat.

import { diccionari } from "./Diccionari.js";

function CrearArrayParaules(n: number): string[] {

    let paraules: string[] = [];

    for (let i = 0; i < n; i++) {
        paraules.push(diccionari[Math.floor(Math.random() * diccionari.length)]);
    }

    return paraules;
}
// Array creat de 1000 paraules aleatòries
let resultat = CrearArrayParaules(1000);


function triarParaules(n: number): string[] {
    let paraulesTriades: string[] = [];
    for (let i = 0; i < n; i++) {
        paraulesTriades.push(diccionari[Math.floor(Math.random() * diccionari.length)]);
    }
    return paraulesTriades;
}

let triades = triarParaules(1000);

let inici = performance.now();

// Mètode que busca una paraula en un array sense ordenar i mostra la paraula i posició si l'ha trobat.
function buscarParaula(paraules: string[], paraula: string): void {

    for (let i = 0; i < paraules.length; i++) {
        if (paraules[i] === paraula) {
            console.log(`La paraula "${paraula}" està a la posició ${i}`);
            return;
        }
    }
    console.log(`La paraula "${paraula}" no s'ha trobat.`);
}

let final = performance.now();
console.log(`Temps d'execució: ${final - inici} ms`);
