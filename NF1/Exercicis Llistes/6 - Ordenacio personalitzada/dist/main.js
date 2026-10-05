import { diccionari } from "./Diccionari.js";
function crearArrayParaules(n) {
    let paraules = [];
    for (let i = 0; i < n; i++) {
        let posicioAleatoria = Math.floor(Math.random() * diccionari.length);
        paraules.push(diccionari[posicioAleatoria]);
    }
    return paraules;
}
let paraules = crearArrayParaules(1000);
function ordenarParaules(paraules) {
    return paraules.sort((a, b) => {
        if (a.length === b.length) {
            return b.localeCompare(a);
        }
        return a.length - b.length;
    });
}
let paraulesOrdenades = ordenarParaules(paraules);
console.log(paraulesOrdenades);
//# sourceMappingURL=main.js.map