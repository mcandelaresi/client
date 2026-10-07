function Mitjana(...valors: number[]): number | undefined {

    if (valors.length === 0) {
        return undefined;
    }

    let suma = 0;

    for (let i = 0; i < valors.length; i++) {

        suma = suma + valors[i];
    }

    return suma / valors.length;
}


console.log(Mitjana(5, 7, 8, 10));
console.log(Mitjana(10, 9, 8));
console.log(Mitjana(5, 5));