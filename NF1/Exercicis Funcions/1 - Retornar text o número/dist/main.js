function preuFinal(preuBase, descompte, iva, formatMoneda) {
    if (typeof preuBase !== 'number' || typeof descompte !== 'number' || typeof iva !== 'number') {
        return undefined;
    }
    let preu = preuBase - (preuBase * descompte / 100);
    preu = preu + (preu * iva / 100);
    if (formatMoneda === true) {
        return preu.toFixed(2).replace('.', ',') + ' €';
    }
    else {
        return preu;
    }
}
console.log(preuFinal(100, 10, 21, true));
console.log(preuFinal(100, 10, 21, false));
export {};
//# sourceMappingURL=main.js.map