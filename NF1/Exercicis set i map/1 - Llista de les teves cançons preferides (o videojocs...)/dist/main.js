let cancons = new Set();
let input = document.getElementById("canço");
let textarea = document.getElementById("llista");
let botoAfegir = document.getElementById("afegir");
let botoEsborrar = document.getElementById("esborrar");
function ActualitzarLlista() {
    textarea.value = "";
    cancons.forEach(function (canco) {
        textarea.value = textarea.value + canco + "\n";
    });
}
botoAfegir.addEventListener("click", function () {
    let canco = input.value.trim();
    if (canco !== "") {
        cancons.add(canco);
        ActualitzarLlista();
        input.value = "";
    }
});
botoEsborrar.addEventListener("click", function () {
    let canco = input.value.trim();
    if (canco !== "") {
        cancons.delete(canco);
        ActualitzarLlista();
        input.value = "";
    }
});
export {};
//# sourceMappingURL=main.js.map