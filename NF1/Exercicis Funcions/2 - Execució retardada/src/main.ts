function ExecutarAmbRetard(
    funcio: () => void,
    segons: number
): void {

    setTimeout(funcio, segons * 1000);
}


function MostrarMissatge(): void {

    console.log("Han passat 3 segons");
}


ExecutarAmbRetard(MostrarMissatge, 3);