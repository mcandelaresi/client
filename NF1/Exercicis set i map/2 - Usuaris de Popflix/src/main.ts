interface Usuari {
    dni: string;
    nomCognoms: string;
    email: string;
    targeta: string;
}


// Map on guardarem els usuaris
// La clau serà el DNI

let usuaris: Map<string, Usuari> = new Map();


// --------------------------------------------------
// AFEGIR USUARI
// --------------------------------------------------

function AfegirUsuari(usuari: Usuari): void {

    usuaris.set(usuari.dni, usuari);

    console.log("Usuari afegit: " + usuari.dni);
}


// --------------------------------------------------
// ESBORRAR USUARI
// --------------------------------------------------

function EsborrarUsuari(dni: string): void {

    if (usuaris.delete(dni)) {

        console.log("Usuari esborrat: " + dni);

    } else {

        console.log("No existeix cap usuari amb el DNI " + dni);
    }
}


// --------------------------------------------------
// OBTENIR USUARI
// --------------------------------------------------

function ObtenirUsuari(dni: string): Usuari | undefined {

    return usuaris.get(dni);
}


// --------------------------------------------------
// MOSTRAR USUARI
// --------------------------------------------------

function MostrarUsuari(dni: string): void {

    let usuari = ObtenirUsuari(dni);

    if (usuari !== undefined) {

        console.log("DNI: " + usuari.dni);
        console.log("Nom i cognoms: " + usuari.nomCognoms);
        console.log("E-mail: " + usuari.email);
        console.log("Targeta: " + usuari.targeta);

    } else {

        console.log("No existeix cap usuari amb el DNI " + dni);
    }
}


// --------------------------------------------------
// MODIFICAR USUARI
// --------------------------------------------------

function ModificarUsuari(
    dni: string,
    nomCognoms: string,
    email: string,
    targeta: string
): void {

    let usuari = ObtenirUsuari(dni);

    if (usuari !== undefined) {

        usuari.nomCognoms = nomCognoms;
        usuari.email = email;
        usuari.targeta = targeta;

        usuaris.set(dni, usuari);

        console.log("Usuari modificat: " + dni);

    } else {

        console.log("No existeix cap usuari amb el DNI " + dni);
    }
}


// --------------------------------------------------
// MOSTRAR TOTS ELS USUARIS
// --------------------------------------------------

function MostrarUsuaris(): void {

    console.log("----- USUARIS DE POPFLIX -----");

    usuaris.forEach(function(usuari: Usuari) {

        console.log("DNI: " + usuari.dni);
        console.log("Nom i cognoms: " + usuari.nomCognoms);
        console.log("E-mail: " + usuari.email);
        console.log("Targeta: " + usuari.targeta);
        console.log("------------------------------");
    });
}


// --------------------------------------------------
// PROVES
// --------------------------------------------------


// Creem 3 usuaris

let usuari1: Usuari = {
    dni: "12345678A",
    nomCognoms: "Mija Candelaresi",
    email: "mija@gmail.com",
    targeta: "1111-2222-3333-4444"
};


let usuari2: Usuari = {
    dni: "23456789B",
    nomCognoms: "Joan Garcia",
    email: "joan@gmail.com",
    targeta: "2222-3333-4444-5555"
};


let usuari3: Usuari = {
    dni: "34567890C",
    nomCognoms: "Laura Martinez",
    email: "laura@gmail.com",
    targeta: "3333-4444-5555-6666"
};


// Afegim els usuaris

AfegirUsuari(usuari1);
AfegirUsuari(usuari2);
AfegirUsuari(usuari3);


// Mostrem un usuari

console.log("");
console.log("MOSTRAR USUARI:");
MostrarUsuari("12345678A");


// Modifiquem un usuari

console.log("");
console.log("MODIFICAR USUARI:");

ModificarUsuari(
    "12345678A",
    "Mija Candelaresi Modificat",
    "mija_nou@gmail.com",
    "9999-8888-7777-6666"
);


// Tornem a mostrar l'usuari modificat

console.log("");
console.log("USUARI MODIFICAT:");

MostrarUsuari("12345678A");


// Mostrem tots els usuaris

console.log("");
MostrarUsuaris();


// Esborrem un usuari

console.log("");
console.log("ESBORRAR USUARI:");

EsborrarUsuari("23456789B");


// Tornem a mostrar tots els usuaris

console.log("");
MostrarUsuaris();


// Provem d'esborrar un usuari que no existeix

console.log("");
EsborrarUsuari("99999999Z");

