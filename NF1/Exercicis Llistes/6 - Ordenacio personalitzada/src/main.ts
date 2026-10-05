//Utilitzant la funció sort(), ordena un array de 1000 paraules segons la seva llargada.

//Les que tinguin el mateix nombre de caràcters, s'han d'ordenar alfabèticament però en ordre invers.



import { diccionari } from "./Diccionari.js";

function crearArrayParaules(n : number): string[] {
    let paraules: string[] = [];
    for (let i = 0; i < n ; i++) {
        let posicioAleatoria = Math.floor(Math.random() * diccionari.length) 
        paraules.push(diccionari[posicioAleatoria]);
        
    }
    return paraules;
}

let paraules: string[] = crearArrayParaules(1000);

function ordenarParaules(paraules: string[]): string[] {
    return paraules.sort((a, b) => {
        if (a.length === b.length) {
            return b.localeCompare(a); // Ordenar alfabèticament en ordre invers
        }
        return a.length - b.length; // Ordenar per llargada
    });
}

let paraulesOrdenades: string[] = ordenarParaules(paraules);

console.log(paraulesOrdenades);