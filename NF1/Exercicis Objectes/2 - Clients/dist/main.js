let client1 = {
    id: 1,
    nom: "Mija",
    cognoms: "Candelaresi",
    correu: "c.candelaresi@sapalomera.cat",
    telefon: "666666666",
    adreca: "Carrer de la Llum, 1",
    ciutat: "Barcelona",
    codiPostal: "08001"
};
let client2 = {
    id: 2,
    nom: "Anna",
    cognoms: "Garcia",
    correu: "a.garcia@sapalomera.cat",
    telefon: "777777777",
    adreca: "Avinguda Diagonal, 100",
    ciutat: "Barcelona",
    codiPostal: "08002"
};
let client3 = {
    id: 3,
    nom: "Pere",
    cognoms: "Rodriguez",
    correu: "p.rodriguez@sapalomera.cat",
    telefon: "888888888",
    adreca: "Carrer de la Pau, 200",
    ciutat: "Barcelona",
    codiPostal: "08003"
};
let clients = [];
clients.push(client1);
clients.push(client2);
clients.push(client3);
function mostrarClients(clients) {
    let taula = document.createElement("table");
    let capcalera = document.createElement("tr");
    let titolId = document.createElement("th");
    titolId.textContent = "ID";
    let titolNom = document.createElement("th");
    titolNom.textContent = "Nom";
    let titolCognoms = document.createElement("th");
    titolCognoms.textContent = "Cognoms";
    let titolCorreu = document.createElement("th");
    titolCorreu.textContent = "Correu";
    let titolTelefon = document.createElement("th");
    titolTelefon.textContent = "Telèfon";
    let titolAdreca = document.createElement("th");
    titolAdreca.textContent = "Adreça";
    let titolCiutat = document.createElement("th");
    titolCiutat.textContent = "Ciutat";
    let titolCodiPostal = document.createElement("th");
    titolCodiPostal.textContent = "Codi Postal";
    capcalera.appendChild(titolId);
    capcalera.appendChild(titolNom);
    capcalera.appendChild(titolCognoms);
    capcalera.appendChild(titolCorreu);
    capcalera.appendChild(titolTelefon);
    capcalera.appendChild(titolAdreca);
    capcalera.appendChild(titolCiutat);
    capcalera.appendChild(titolCodiPostal);
    taula.appendChild(capcalera);
    for (let i = 0; i < clients.length; i++) {
        let fila = document.createElement("tr");
        let id = document.createElement("td");
        id.textContent = clients[i].id.toString();
        let nom = document.createElement("td");
        nom.textContent = clients[i].nom;
        let cognoms = document.createElement("td");
        cognoms.textContent = clients[i].cognoms;
        let correu = document.createElement("td");
        correu.textContent = clients[i].correu;
        let telefon = document.createElement("td");
        telefon.textContent = clients[i].telefon;
        let adreca = document.createElement("td");
        adreca.textContent = clients[i].adreca;
        let ciutat = document.createElement("td");
        ciutat.textContent = clients[i].ciutat;
        let codiPostal = document.createElement("td");
        codiPostal.textContent = clients[i].codiPostal;
        fila.appendChild(id);
        fila.appendChild(nom);
        fila.appendChild(cognoms);
        fila.appendChild(correu);
        fila.appendChild(telefon);
        fila.appendChild(adreca);
        fila.appendChild(ciutat);
        fila.appendChild(codiPostal);
        taula.appendChild(fila);
    }
    document.body.appendChild(taula);
}
mostrarClients(clients);
export {};
//# sourceMappingURL=main.js.map