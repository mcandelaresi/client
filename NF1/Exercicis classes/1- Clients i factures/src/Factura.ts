export class Factura {
    static #seguentId: number = 100;

    public id: number;
    public idClient: number;
    public data: string;
    public import: number;
    public pagada: boolean;

    constructor(
        idClient: number,
        data: string,
        importFactura: number,
        pagada: boolean
    ){
        if (Factura.#seguentId > 999) {
            throw new Error("No es poden crear més factures");
        }

        this.id = Factura.#seguentId;
        Factura.#seguentId++;

        this.idClient = idClient;
        this.data = data;
        this.import = importFactura;
        this.pagada = pagada;

    }
}