import { diccionari } from "./Diccionari.js";
function crearArrayParaules(n) {
    let paraules = [];
    for (let i = 0; i < n; i++) {
        let posicioAleatoria = Math.floor(Math.random() * diccionari.length);
    }
    return paraules;
}
function cercaBinaria(paraules, paraula) {
    let inici = 0;
    let final = paraules.length - 1;
    let posicio = -1;
    while (inici <= final) {
        let mig = Math.floor((inici + final) / 2);
        if (paraules[mig] === paraula) {
            posicio = mig;
            final = mig - 1;
        }
        else if (paraules[mig] < paraula) {
            inici = mig + 1;
        }
        else {
            final = mig - 1;
        }
    }
    return posicio;
}
function paraulaRepetida(paraules) {
    for (let i = paraules.length - 1; i >= 0; i--) {
        let posicio = cercaBinaria(paraules, paraules[i]);
        if (posicio !== i) {
            console.log(`La paraula "${paraules[i]}" està repetida a la posició ${i}`);
            paraules.splice(i, 1);
        }
    }
}
let resultat = crearArrayParaules(1000);
let inici = performance.now();
resultat.sort();
//# sourceMappingURL=main.js.map