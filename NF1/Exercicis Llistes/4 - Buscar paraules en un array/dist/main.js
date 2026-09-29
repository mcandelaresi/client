import { diccionari } from "./Diccionari.js";
function CrearArrayParaules(n) {
    let paraules = [];
    for (let i = 0; i < n; i++) {
        paraules.push(diccionari[Math.floor(Math.random() * diccionari.length)]);
    }
    return paraules;
}
let resultat = CrearArrayParaules(1000);
function triarParaules(n) {
    let paraulesTriades = [];
    for (let i = 0; i < n; i++) {
        paraulesTriades.push(diccionari[Math.floor(Math.random() * diccionari.length)]);
    }
    return paraulesTriades;
}
let triades = triarParaules(1000);
let inici = performance.now();
function buscarParaula(paraules, paraula) {
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
//# sourceMappingURL=main.js.map