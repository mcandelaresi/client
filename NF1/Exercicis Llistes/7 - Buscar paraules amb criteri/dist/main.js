import { diccionari } from "./Diccionari.js";
function buscarParaules(patro) {
    let paraules = [];
    let regexPattern = patro.replace(/\?/g, '.').replace(/\*/g, '.*');
    let regex = new RegExp(`^${regexPattern}$`, 'i');
    for (let paraula of diccionari) {
        if (regex.test(paraula)) {
            paraules.push(paraula);
        }
    }
    return paraules;
}
console.log(buscarParaules("a?e*"));
//# sourceMappingURL=main.js.map