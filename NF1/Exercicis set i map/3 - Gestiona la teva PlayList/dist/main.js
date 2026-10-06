let playlists = new Map();
function crearLlista(nom) {
    if (!playlists.has(nom)) {
        playlists.set(nom, new Set());
        console.log("Llista creada: " + nom);
    }
    else {
        console.log("La llista " + nom + "Ja existeix");
    }
}
function borrarLlista(nom) {
    if (playlists.delete(nom)) {
        console.log("Llista esborrada: " + nom);
    }
    else {
        console.log("La llista " + nom + "ja existeix");
    }
}
function afegirCanco(nomLlista, nomCanco) {
    let llista = playlists.get(nomLlista);
    if (llista !== undefined) {
        llista.add(nomCanco);
        console.log("Cançó afegida: " + nomCanco + " a la llista " + nomLlista);
    }
    else {
        console.log("La llista " + nomLlista + "no existeix");
    }
}
function esborrarCanco(nomLlista, nomCanco) {
    let llista = playlists.get(nomLlista);
    if (llista !== undefined) {
        if (llista.delete(nomCanco)) {
            console.log("Cançó esborrada: " + nomCanco + "de la llista " + nomLlista);
        }
        else {
            console.log("La cançó " + nomCanco + "no existeix a la llista " + nomLlista);
        }
    }
    else {
        console.log("La llista " + nomLlista + "no existeix");
    }
}
function obtenirCancons(nomLlista) {
    return playlists.get(nomLlista);
}
function mostrarCancons(nomLlista) {
    let llista = obtenirCancons(nomLlista);
    if (llista !== undefined) {
        console.log("----- " + nomLlista + "-----");
        llista.forEach(function (canco) {
            console.log(canco);
        });
        console.log("--------------------");
    }
    else {
        console.log("La llista " + nomLlista + "no existeix");
    }
}
crearLlista("Gym");
crearLlista("Relax");
afegirCanco("Gym", "Eye of the Tiger");
afegirCanco("Gym", "Stronger");
afegirCanco("Gym", "Lose Yourself");
afegirCanco("Gym", "Eye of the Tiger");
afegirCanco("Relax", "Weightless");
afegirCanco("Relax", "Clair de Lune");
afegirCanco("Relax", "Electra");
mostrarCancons("Gym");
mostrarCancons("Relax");
esborrarCanco("Gym", "Stronger");
mostrarCancons("Gym");
export {};
//# sourceMappingURL=main.js.map