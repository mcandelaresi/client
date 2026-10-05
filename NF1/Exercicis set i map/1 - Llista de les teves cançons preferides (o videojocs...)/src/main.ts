
// Set on guardarem les cançons

let cancons: Set<string> = new Set();


// Agafem els elements de l'HTML

let input = document.getElementById("canço") as HTMLInputElement;
let textarea = document.getElementById("llista") as HTMLTextAreaElement;
let botoAfegir = document.getElementById("afegir") as HTMLButtonElement;
let botoEsborrar = document.getElementById("esborrar") as HTMLButtonElement;


// Actualitza el textarea amb les dades del Set

function ActualitzarLlista(): void {

    textarea.value = "";

    cancons.forEach(function(canco: string) {

        textarea.value = textarea.value + canco + "\n";
    });
}


// Afegir una cançó

botoAfegir.addEventListener("click", function() {

    let canco = input.value.trim();

    if (canco !== "") {

        cancons.add(canco);

        ActualitzarLlista();

        input.value = "";
    }
});


// Esborrar una cançó

botoEsborrar.addEventListener("click", function() {

    let canco = input.value.trim();

    if (canco !== "") {

        cancons.delete(canco);

        ActualitzarLlista();

        input.value = "";
    }
});

