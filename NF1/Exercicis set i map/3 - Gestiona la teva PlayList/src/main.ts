// Map on guardarem totes les llistes

let playlists: Map<String, Set<string>> = new Map();

// Crear una llista

function crearLlista(nom: string): void {
    if (!playlists.has(nom)) {
        playlists.set(nom, new Set());

        console.log("Llista creada: " + nom);
    } else {
        console.log("La llista " + nom + "Ja existeix");
    }
}

// Esborrar una llista

function borrarLlista(nom: string): void {
    if (playlists.delete(nom)) {
        console.log("Llista esborrada: " + nom);
    } else {
        console.log("La llista "+ nom + "ja existeix");
    }
}

// Afegir una cancio a la llista

function afegirCanco(nomLlista: string, nomCanco: string): void {
    let llista = playlists.get(nomLlista);
    if (llista !== undefined) {
        llista.add(nomCanco);

        console.log("Cançó afegida: "+ nomCanco + " a la llista " + nomLlista);
    } else  {
        console.log("La llista " + nomLlista + "no existeix");
    }

}

// Esborrar una cançó d'una llista

function esborrarCanco(nomLlista: string, nomCanco: string): void {
    let llista = playlists.get(nomLlista);

    if (llista !== undefined) {
        if (llista.delete(nomCanco)) {
            console.log("Cançó esborrada: " + nomCanco + "de la llista " + nomLlista);
        } else {
            console.log("La cançó " + nomCanco + "no existeix a la llista " + nomLlista);
        }
    } else {
        console.log("La llista " + nomLlista + "no existeix");
    }
}

// Obtenir les cançons d'una llista

function obtenirCancons(nomLlista: string): Set<string> | undefined {
    return playlists.get(nomLlista);
}

// Mostrar les cançons d'una llista

function mostrarCancons(nomLlista: string): void {
    let llista = obtenirCancons(nomLlista);

    if (llista !== undefined) {
        console.log("----- " + nomLlista + "-----");

        llista.forEach(function(canco: string) {
            console.log(canco);
        });

        console.log("--------------------");
    } else {
        console.log("La llista " + nomLlista + "no existeix");
    }
}

// Proves

// Crear dues llistes
crearLlista("Gym");
crearLlista("Relax");

// Afegir cançons a les llistes
afegirCanco("Gym", "Eye of the Tiger");
afegirCanco("Gym", "Stronger");
afegirCanco("Gym", "Lose Yourself");

// intentem afegir una repetida
afegirCanco("Gym", "Eye of the Tiger");

afegirCanco("Relax", "Weightless");
afegirCanco("Relax", "Clair de Lune");
afegirCanco("Relax", "Electra");

// Mostrar les cançons de les llistes
mostrarCancons("Gym");
mostrarCancons("Relax");

// Esborrar una cançó
esborrarCanco("Gym", "Stronger");

// tornem a mostrar les cançons de la llista Gym
mostrarCancons("Gym");