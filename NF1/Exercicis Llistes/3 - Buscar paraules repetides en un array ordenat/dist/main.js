import { diccionari } from "./Diccionari.js";
function CrearArrayParaules(n) {
    let paraules = [];
    for (let i = 0; i < n; i++) {
        let posicioAleatoria = Math.floor(Math.random() * diccionari.length);
        paraules.push(diccionari[posicioAleatoria]);
    }
    return paraules;
}
let resultat = CrearArrayParaules(1000);
let inici = performance.now();
function ParaulaRepetida(paraules) {
    for (let i = paraules.length - 1; i >= 0; i--) {
        if (paraules[i] === paraules[i - 1]) {
            console.log(`La paraula "${paraules[i]}" està repetida i està a la posició ${i}`);
            paraules.splice(i, 1);
        }
    }
}
ParaulaRepetida(resultat);
let final = performance.now();
console.log(`Temps d'execució: ${final - inici} milisegons`);
//# sourceMappingURL=main.js.map