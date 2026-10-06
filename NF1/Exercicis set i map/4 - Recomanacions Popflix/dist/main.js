let continguts = new Map();
continguts.set("Interstellar", {
    nom: "Interstellar",
    tipus: "pelicula",
    generes: "ciència ficció"
});
continguts.set("The Dark Knight", {
    nom: "The Dark Knight",
    tipus: "pelicula",
    generes: "acció"
});
continguts.set("Inception", {
    nom: "Inception",
    tipus: "pelicula",
    generes: "ciència ficció"
});
continguts.set("It", {
    nom: "It",
    tipus: "pelicula",
    generes: "terror"
});
continguts.set("The Conjuring", {
    nom: "The Conjuring",
    tipus: "pelicula",
    generes: "terror"
});
continguts.set("Harry Potter", {
    nom: "Harry Potter",
    tipus: "pelicula",
    generes: "aventura"
});
continguts.set("The Witcher", {
    nom: "The Witcher",
    tipus: "serie",
    generes: "fantasia"
});
continguts.set("Breaking Bad", {
    nom: "Breaking Bad",
    tipus: "serie",
    generes: "drama"
});
continguts.set("Stranger Things", {
    nom: "Stranger Things",
    tipus: "serie",
    generes: "ciència ficció"
});
continguts.set("Sherlock", {
    nom: "Sherlock",
    tipus: "serie",
    generes: "misteri"
});
let usuaris = new Map();
let usuari1 = {
    dni: "12345678A",
    nomCognoms: "Mija Candelaresi",
    contingutsVistos: new Set(),
};
usuari1.contingutsVistos.add("Interstellar");
usuari1.contingutsVistos.add("The Dark Knight");
usuari1.contingutsVistos.add("Inception");
usuari1.contingutsVistos.add("The Witcher");
usuari1.contingutsVistos.add("Breaking Bad");
let usuari2 = {
    dni: "87654321B",
    nomCognoms: "John Doe",
    contingutsVistos: new Set(),
};
usuari2.contingutsVistos.add("Interstellar");
usuari2.contingutsVistos.add("The Dark Knight");
usuari2.contingutsVistos.add("Inception");
usuari2.contingutsVistos.add("It");
usuari2.contingutsVistos.add("The Conjuring");
usuari2.contingutsVistos.add("Sherlock");
let usuari3 = {
    dni: "11223344C",
    nomCognoms: "Jane Smith",
    contingutsVistos: new Set(),
};
usuari3.contingutsVistos.add("Interstellar");
usuari3.contingutsVistos.add("The Dark Knight");
usuari3.contingutsVistos.add("Inception");
usuari3.contingutsVistos.add("Harry Potter");
usuari3.contingutsVistos.add("Stranger Things");
usuaris.set(usuari1.dni, usuari1);
usuaris.set(usuari2.dni, usuari2);
usuaris.set(usuari3.dni, usuari3);
function comptarContingutsComuns(usuari1, usuari2) {
    let comptador = 0;
    usuari1.contingutsVistos.forEach(function (nomContingut) {
        if (usuari2.contingutsVistos.has(nomContingut)) {
            comptador++;
        }
    });
    return comptador;
}
function obtenirRecomanacions(dni) {
    let usuari = usuaris.get(dni);
    let recomanacions = new Set();
    if (usuari === undefined) {
        return recomanacions;
    }
    usuaris.forEach(function (altreUsuari) {
        if (altreUsuari.dni === usuari.dni) {
            return;
        }
        let contingutsEnComu = comptarContingutsComuns(usuari, altreUsuari);
        if (contingutsEnComu >= 3) {
            altreUsuari.contingutsVistos.forEach(function (nomContingut) {
                if (!usuari.contingutsVistos.has(nomContingut)) {
                    recomanacions.add(nomContingut);
                }
            });
        }
    });
    return recomanacions;
}
function MostrarRecomanacions(dni) {
    let usuari = usuaris.get(dni);
    if (usuari === undefined) {
        console.log("L'usuari no existeix.");
        return;
    }
    let recomanacions = obtenirRecomanacions(dni);
    console.log("");
    console.log("==== RECOMANACIONS PER A " + usuari.nomCognoms + "====");
    if (recomanacions.size === 0) {
        console.log("No hi ha recomanacions.");
        return;
    }
    recomanacions.forEach(function (nomContningut) {
        let contingut = continguts.get(nomContningut);
        if (contingut !== undefined) {
            console.log(contingut.nom +
                " - " +
                contingut.tipus +
                " - " +
                contingut.generes);
        }
    });
}
MostrarRecomanacions("12345678A");
MostrarRecomanacions("23456789B");
MostrarRecomanacions("34567890C");
export {};
//# sourceMappingURL=main.js.map