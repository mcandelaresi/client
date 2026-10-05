// Retorna el primer objecte que tingui un valor determinat en un atribut

function getObjectByValue<T>(
    array: T[],
    atribut: keyof T,
    valor: any
): T | undefined {

    for (let i = 0; i < array.length; i++) {

        if (array[i][atribut] === valor) {

            return array[i];
        }
    }

    return undefined;
}


// Retorna tots els objectes que tinguin un valor determinat en un atribut

function getObjectsByValue<T>(
    array: T[],
    atribut: keyof T,
    valor: any
): T[] {

    let resultat: T[] = [];

    for (let i = 0; i < array.length; i++) {

        if (array[i][atribut] === valor) {

            resultat.push(array[i]);
        }
    }

    return resultat;
}


// Comprova si un text compleix un patró
// ? = una lletra
// * = qualsevol quantitat de lletres

function coincideixPatro(text: string, patro: string): boolean {

    let i = 0;
    let j = 0;

    while (i < text.length && j < patro.length) {

        if (patro[j] === '?') {

            i++;
            j++;

        } else if (patro[j] === '*') {

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

        } else {

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


// Retorna tots els objectes que continguin un patró en un atribut

function getObjectsByPattern<T>(
    array: T[],
    atribut: keyof T,
    patro: string
): T[] {

    let resultat: T[] = [];

    for (let i = 0; i < array.length; i++) {

        let valor = String(array[i][atribut]);

        if (coincideixPatro(valor, patro)) {

            resultat.push(array[i]);
        }
    }

    return resultat;
}


// Retorna tots els objectes que tinguin un valor dins d'un rang

function getObjectsInRange<T>(
    array: T[],
    atribut: keyof T,
    valorMin: number,
    valorMax: number
): T[] {

    let resultat: T[] = [];

    for (let i = 0; i < array.length; i++) {

        let valor = Number(array[i][atribut]);

        if (valor >= valorMin && valor <= valorMax) {

            resultat.push(array[i]);
        }
    }

    return resultat;
}

