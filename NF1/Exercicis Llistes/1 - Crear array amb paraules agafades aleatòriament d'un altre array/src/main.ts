import { diccionari } from "./Diccionari.js";

// Aquest mètode crea un array amb n paraules aleatòries
function crearArrayParaules(n: number): string[] {
    let paraules: string[] = [];

    for (let i = 0; i < n; i++) {
        let posicioAleatoria = Math.floor(Math.random() * diccionari.length);

        paraules.push(diccionari[posicioAleatoria]);
    }

    return paraules;
}

// Aquest mètode mostra les paraules amb 10 guions entre cada una
function mostrarParaules(paraules: string[]): void {
    for (let i = 0; i < paraules.length; i++) {
        console.log(paraules[i]);

        if (i < paraules.length - 1) {
            console.log("----------");
        }
    }
}

// Generem un array de 10 paraules i el mostrem
let resultat = crearArrayParaules(10);

mostrarParaules(resultat);

