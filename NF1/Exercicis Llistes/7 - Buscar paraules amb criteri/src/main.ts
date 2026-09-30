//Fes una aplicació que busqui les paraules del diccionari que compleixen un patró introduït per l'usuari.

//El patró pot contenir lletres (majúscules o minúscules) i interrogants (?) en les posicions on pugui anar qualsevol lletra.

//Opcionalment, també s'ha de poder posar asterisc (*) per indicar un conjunt de 0 o més lletres.


import {diccionari} from "./Diccionari.js";

function buscarParaules(patro: string): string[] {

    let paraules: string[] = [];

    // Convertir el patró a una expressió regular que fa match amb qualsevol lletra en lloc dels interrogants
    //  i amb qualsevol conjunt de lletres en lloc dels asteriscs
    let regexPattern = patro.replace(/\?/g, '.').replace(/\*/g, '.*');

    // Crear una expressió regular a partir del patró perque sigui case-insensitive i faci match amb tota la paraula
    let regex = new RegExp(`^${regexPattern}$`, 'i');

    // Iterar sobre el diccionari i afegir les paraules que compleixin el patró a l'array de resultats
    for (let paraula of diccionari) {
        if (regex.test(paraula)) {
            paraules.push(paraula);
        }
    }
    return paraules;
}

console.log(buscarParaules("a?e*"));