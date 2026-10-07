// Agafem els elements de l'HTML

let inputSegons = document.getElementById("segons") as HTMLInputElement;
let botoExecutar = document.getElementById("executar") as HTMLButtonElement;
let resultat = document.getElementById("resultat") as HTMLParagraphElement;


// Funció que s'executarà amb retard

function MostrarMissatge(): void {

    resultat.textContent = "La funció s'ha executat!";
}


// Funció que executa una altra funció després d'un retard

function ExecutarAmbRetard(
    funcio: () => void,
    segons: number
): void {

    setTimeout(funcio, segons * 1000);
}


// Quan premem el botó

botoExecutar.addEventListener("click", function(): void {

    let segons = Number(inputSegons.value);

    if (isNaN(segons) || segons < 0) {

        resultat.textContent = "Introdueix un nombre de segons vàlid.";

    } else {

        resultat.textContent =
            "La funció s'executarà d'aquí " + segons + " segons.";

        ExecutarAmbRetard(MostrarMissatge, segons);
    }
});

