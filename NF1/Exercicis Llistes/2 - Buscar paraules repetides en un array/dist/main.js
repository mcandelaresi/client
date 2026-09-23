import { diccionari } from "./Diccionari.js";
function CrearArrayParaules(n) {
    let paraules = [];
    for (let i = 0; i < n; i++) {
        let posicioAleatoria = Math.floor(Math.random() * diccionari.length);
        paraules.push(diccionari[posicioAleatoria]);
    }
    return paraules;
}
function mostrarParaules(paraules) {
    for (let i = 0; i < paraules.length; i++) {
        console.log(paraules[i]);
        if (i < paraules.length - 1) {
            console.log("----------");
        }
    }
}
let resultat = CrearArrayParaules(1000);
mostrarParaules(resultat);
function ParaulaRepetida(paraules) {
    for (let i = paraules.length - 1; i >= 0; i--) {
        if (paraules.indexOf(paraules[i]) !== i) {
            console.log(`La paraula "${paraules[i]}" està repetida.`);
            paraules.splice(i, 1);
        }
        else {
            console.log(`La paraula "${paraules[i]}" no està repetida.`);
        }
    }
}
ParaulaRepetida(resultat);
//# sourceMappingURL=main.js.map