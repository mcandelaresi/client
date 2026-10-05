function getObjectByValue(array, atribut, valor) {
    for (let i = 0; i < array.length; i++) {
        if (array[i][atribut] === valor) {
            return array[i];
        }
    }
    return undefined;
}
function getObjectsByValue(array, atribut, valor) {
    let resultat = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i][atribut] === valor) {
            resultat.push(array[i]);
        }
    }
    return resultat;
}
function coincideixPatro(text, patro) {
    let i = 0;
    let j = 0;
    while (i < text.length && j < patro.length) {
        if (patro[j] === '?') {
            i++;
            j++;
        }
        else if (patro[j] === '*') {
            if (j === patro.length - 1) {
                return true;
            }
            j++;
            while (i < text.length) {
                if (coincideixPatro(text.substring(i), patro.substring(j))) {
                    return true;
                }
                i++;
            }
            return false;
        }
        else {
            if (text[i] !== patro[j]) {
                return false;
            }
            i++;
            j++;
        }
    }
    while (j < patro.length && patro[j] === '*') {
        j++;
    }
    return i === text.length && j === patro.length;
}
function getObjectsByPattern(array, atribut, patro) {
    let resultat = [];
    for (let i = 0; i < array.length; i++) {
        let valor = String(array[i][atribut]);
        if (coincideixPatro(valor, patro)) {
            resultat.push(array[i]);
        }
    }
    return resultat;
}
function getObjectsInRange(array, atribut, valorMin, valorMax) {
    let resultat = [];
    for (let i = 0; i < array.length; i++) {
        let valor = Number(array[i][atribut]);
        if (valor >= valorMin && valor <= valorMax) {
            resultat.push(array[i]);
        }
    }
    return resultat;
}
export {};
//# sourceMappingURL=main.js.map