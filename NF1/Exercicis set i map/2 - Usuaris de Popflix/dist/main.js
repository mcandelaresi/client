let usuaris = new Map();
function AfegirUsuari(usuari) {
    usuaris.set(usuari.dni, usuari);
    console.log("Usuari afegit: " + usuari.dni);
}
function EsborrarUsuari(dni) {
    if (usuaris.delete(dni)) {
        console.log("Usuari esborrat: " + dni);
    }
    else {
        console.log("No existeix cap usuari amb el DNI " + dni);
    }
}
function ObtenirUsuari(dni) {
    return usuaris.get(dni);
}
function MostrarUsuari(dni) {
    let usuari = ObtenirUsuari(dni);
    if (usuari !== undefined) {
        console.log("DNI: " + usuari.dni);
        console.log("Nom i cognoms: " + usuari.nomCognoms);
        console.log("E-mail: " + usuari.email);
        console.log("Targeta: " + usuari.targeta);
    }
    else {
        console.log("No existeix cap usuari amb el DNI " + dni);
    }
}
function ModificarUsuari(dni, nomCognoms, email, targeta) {
    let usuari = ObtenirUsuari(dni);
    if (usuari !== undefined) {
        usuari.nomCognoms = nomCognoms;
        usuari.email = email;
        usuari.targeta = targeta;
        usuaris.set(dni, usuari);
        console.log("Usuari modificat: " + dni);
    }
    else {
        console.log("No existeix cap usuari amb el DNI " + dni);
    }
}
function MostrarUsuaris() {
    console.log("----- USUARIS DE POPFLIX -----");
    usuaris.forEach(function (usuari) {
        console.log("DNI: " + usuari.dni);
        console.log("Nom i cognoms: " + usuari.nomCognoms);
        console.log("E-mail: " + usuari.email);
        console.log("Targeta: " + usuari.targeta);
        console.log("------------------------------");
    });
}
let usuari1 = {
    dni: "12345678A",
    nomCognoms: "Mija Candelaresi",
    email: "mija@gmail.com",
    targeta: "1111-2222-3333-4444"
};
let usuari2 = {
    dni: "23456789B",
    nomCognoms: "Joan Garcia",
    email: "joan@gmail.com",
    targeta: "2222-3333-4444-5555"
};
let usuari3 = {
    dni: "34567890C",
    nomCognoms: "Laura Martinez",
    email: "laura@gmail.com",
    targeta: "3333-4444-5555-6666"
};
AfegirUsuari(usuari1);
AfegirUsuari(usuari2);
AfegirUsuari(usuari3);
console.log("");
console.log("MOSTRAR USUARI:");
MostrarUsuari("12345678A");
console.log("");
console.log("MODIFICAR USUARI:");
ModificarUsuari("12345678A", "Mija Candelaresi Modificat", "mija_nou@gmail.com", "9999-8888-7777-6666");
console.log("");
console.log("USUARI MODIFICAT:");
MostrarUsuari("12345678A");
console.log("");
MostrarUsuaris();
console.log("");
console.log("ESBORRAR USUARI:");
EsborrarUsuari("23456789B");
console.log("");
MostrarUsuaris();
console.log("");
EsborrarUsuari("99999999Z");
export {};
//# sourceMappingURL=main.js.map