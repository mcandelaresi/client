import { diccionari } from "./Diccionari.js";

// Metode per crear array amb n paraules aleatòries
function crearArrayParaules(n: number): string[] {
    let paraules: string[] = [];
    for (let i = 0; i < n ; i++) {
        let posicioAleatoria = Math.floor(Math.random() * diccionari.length);
    }
    return paraules;
}

// Mètode de cerca binària
// Busca la primera posicio on apareix la paraula
function cercaBinaria(paraules: string[], paraula: string) : number {
    let inici = 0;
    let final = paraules.length - 1;
    let posicio = -1;

    while (inici <= final) {
        let mig = Math.floor((inici + final)/ 2);

        if (paraules[mig] === paraula) {
            posicio = mig;
            final = mig - 1;
        } else if (paraules[mig] < paraula) {
            inici = mig + 1;
        } else {
            final = mig -1 ;
        }
    }
    return posicio;
}

//Metode que busca i elimina les paraules repetides
function paraulaRepetida(paraules:string []): void{
    for (let i = paraules.length - 1; i >= 0; i--) {
        let posicio = cercaBinaria(paraules, paraules[i]);
        if (posicio !== i ) {
            console.log(`La paraula "${paraules[i]}" està repetida a la posició ${i}`);
            paraules.splice(i, 1);
        }
    }
}


// Generem un array de 1000 paraules
let resultat = crearArrayParaules(1000);

// Começem a comptar el temps
let inici = performance.now();

// Ordenar Array
resultat.sort();