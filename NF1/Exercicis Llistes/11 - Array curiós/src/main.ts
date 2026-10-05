let numeros: number[] = [];

for (let i= 0; i < 1000; i++) {
    let numero = Math.floor(Math.random() * 1000);

    numeros.push(numero);
}

function sumarDigits(numero: number): number {
    while (numero >= 10) {
        let suma = 0;

        while (numero > 0) {
            suma = suma + (numero % 10);

            numero = Math.floor(numero / 10);
        }
        numero = suma;
    }

    return numero;
}

let resultat = numeros.map(function(numero) {
    let digit = sumarDigits(numero);

    if (digit === 0 || digit === 3 || digit === 6 || digit === 9) {
        return numero + 21;
    } else if (digit === 1 || digit === 4 || digit === 7) {
        return numero + 29;
    } else {
        return numero + 37;
    }
});

//Comprovem si algun valor es multiple de 3

let algunMultiple3 = resultat.some(function(numero) {
    return numero % 3 === 0;
});

// Comprovem si tots els valors son multiples de 3

let totsMultiples3 = resultat.every(function(numero) {
    return numero % 3 === 0;
});

console.log("Array de 1000 números aleatoris entre 0 i 1000:\n" + numeros.join(", "));
console.log("Array resultant després de sumar els dígits:\n" + resultat.join(", "));

console.log("Hi ha algun múltiple de 3? " + (algunMultiple3 ? "Sí" : "No"));
console.log("Tots els valors són múltiples de 3? " + (totsMultiples3 ? "Sí" : "No"));

