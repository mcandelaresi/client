export class Client {

    static #seguentId: number = 10;

    public id: number;
    public nif: string;
    public nom: string;
    public cognoms: string;

    constructor(nif: string, nom: string, cognoms: string){
        if (!Client.#validarNif(nif)) {
            throw new Error("El NIF no és correcte.");
        }

        if (Client.#seguentId > 99) {
            throw new Error("No es poden crear mes clients");
        }

        this.id = Client.#seguentId;
        Client.#seguentId;

        this.nif = nif.toUpperCase();
        this.nom = nom;
        this.cognoms = cognoms;
    }

    static #validarNif(nif: string): boolean {
        let expressio = /^[0-9]{8}[A-Za-z]$/;

        if (!expressio.test(nif)) {
            return false;
        }
        let numero = Number(nif.substring(0, 8));

        let lletra = nif.charAt(0).toUpperCase();

        let lletres = "TRWAGMYFPDXBNJZSQVHLCKE";
        return lletres.charAt(numero % 23) === lletra;

    }
}