import { diccionari } from "./Diccionari.js";

function CrearArrayParaules(n: number): string[] {

 
   let paraules: string[] = [];

   for (let i = 0; i < n; i++) {
       let posicioAleatoria = Math.floor(Math.random() * diccionari.length);
       paraules.push(diccionari[posicioAleatoria]);
   }

   return paraules;
}

// aquest metode crea un array amb n paraules aleatories
let resultat = CrearArrayParaules(1000);

// aqui es on comptem el temps
let inici = performance.now();

function ParaulaRepetida(paraules: string[]): void {
    for (let i = paraules.length -1 ; i >= 0; i--) {
        if (paraules[i] === paraules[i - 1]) {
            console.log(`La paraula "${paraules[i]}" està repetida i està a la posició ${i}`);
            paraules.splice(i, 1);
        }
    }
}

ParaulaRepetida(resultat);

// Acabem de comptar el temps
let final = performance.now();

// Mostrem el temps que ha trigat a executar-se
console.log(`Temps d'execució: ${final - inici} milisegons`);