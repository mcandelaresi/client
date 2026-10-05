// --------------------------------------------------
// INTERFÍCIES
// --------------------------------------------------

interface Sensor {
    nom: string;
    valor: number | boolean;
}


interface Actuador {
    nom: string;
    estat: boolean;

    encendre?: () => void;
    apagar?: () => void;

    pujar?: () => void;
    baixar?: () => void;
}


// --------------------------------------------------
// DOMÒTICA
// --------------------------------------------------

let domotica = {

    sensors: [] as Sensor[],

    actuadors: [] as Actuador[]
};


// --------------------------------------------------
// SENSORS
// --------------------------------------------------

let sensorPluja: Sensor = {
    nom: "pluja",
    valor: false
};


let sensorNit: Sensor = {
    nom: "esDeNit",
    valor: false
};


let sensorTemperatura: Sensor = {
    nom: "temperatura",
    valor: 21
};


let sensorPresencia: Sensor = {
    nom: "presencia",
    valor: false
};


let sensorFums: Sensor = {
    nom: "fums",
    valor: false
};


// Afegim els sensors

domotica.sensors.push(sensorPluja);
domotica.sensors.push(sensorNit);
domotica.sensors.push(sensorTemperatura);
domotica.sensors.push(sensorPresencia);
domotica.sensors.push(sensorFums);


// --------------------------------------------------
// ACTUADORS
// --------------------------------------------------

let persianes: Actuador = {

    nom: "persianes",
    estat: false,

    pujar: function() {

        if (this.estat === true) {

            console.log("Estic pujant les persianes.");

            this.estat = false;
        }
    },

    baixar: function() {

        if (this.estat === false) {

            console.log("Estic baixant les persianes.");

            this.estat = true;
        }
    }
};


let llums: Actuador = {

    nom: "llums",
    estat: false,

    encendre: function() {

        if (this.estat === false) {

            console.log("He encès els llums.");

            this.estat = true;
        }
    },

    apagar: function() {

        if (this.estat === true) {

            console.log("He apagat els llums.");

            this.estat = false;
        }
    }
};


let calefaccio: Actuador = {

    nom: "calefaccio",
    estat: false,

    encendre: function() {

        if (this.estat === false) {

            console.log("He encès la calefacció.");

            this.estat = true;
        }
    },

    apagar: function() {

        if (this.estat === true) {

            console.log("He apagat la calefacció.");

            this.estat = false;
        }
    }
};


let extintor: Actuador = {

    nom: "extintor",
    estat: false,

    encendre: function() {

        if (this.estat === false) {

            console.log("He activat l'extintor.");

            this.estat = true;
        }
    }
};


// Afegim els actuadors

domotica.actuadors.push(persianes);
domotica.actuadors.push(llums);
domotica.actuadors.push(calefaccio);
domotica.actuadors.push(extintor);


// --------------------------------------------------
// BUSCAR UN SENSOR
// --------------------------------------------------

function BuscarSensor(
    sensors: Sensor[],
    nom: string
): Sensor | undefined {

    for (let i = 0; i < sensors.length; i++) {

        if (sensors[i].nom === nom) {

            return sensors[i];
        }
    }

    return undefined;
}


// --------------------------------------------------
// BUSCAR UN ACTUADOR
// --------------------------------------------------

function BuscarActuador(
    actuadors: Actuador[],
    nom: string
): Actuador | undefined {

    for (let i = 0; i < actuadors.length; i++) {

        if (actuadors[i].nom === nom) {

            return actuadors[i];
        }
    }

    return undefined;
}


// --------------------------------------------------
// CONTROL DE LA CASA
// --------------------------------------------------

function ControlarDomotica(): void {

    let sensorPluja = BuscarSensor(domotica.sensors, "pluja");
    let sensorNit = BuscarSensor(domotica.sensors, "esDeNit");
    let sensorTemperatura = BuscarSensor(domotica.sensors, "temperatura");
    let sensorPresencia = BuscarSensor(domotica.sensors, "presencia");
    let sensorFums = BuscarSensor(domotica.sensors, "fums");


    let persianes = BuscarActuador(domotica.actuadors, "persianes");
    let llums = BuscarActuador(domotica.actuadors, "llums");
    let calefaccio = BuscarActuador(domotica.actuadors, "calefaccio");
    let extintor = BuscarActuador(domotica.actuadors, "extintor");


    // --------------------------------------------------
    // PERSIANES
    // --------------------------------------------------

    if (sensorPluja !== undefined &&
        sensorNit !== undefined &&
        persianes !== undefined) {

        if (sensorPluja.valor === true ||
            sensorNit.valor === true) {

            if (persianes.baixar !== undefined) {

                persianes.baixar();
            }

        } else {

            if (persianes.pujar !== undefined) {

                persianes.pujar();
            }
        }
    }


    // --------------------------------------------------
    // LLUMS
    // --------------------------------------------------

    if (sensorPresencia !== undefined &&
        sensorNit !== undefined &&
        llums !== undefined) {

        if (sensorPresencia.valor === true &&
            sensorNit.valor === true) {

            if (llums.encendre !== undefined) {

                llums.encendre();
            }

        } else {

            if (llums.apagar !== undefined) {

                llums.apagar();
            }
        }
    }


    // --------------------------------------------------
    // CALEFACCIÓ
    // --------------------------------------------------

    if (sensorTemperatura !== undefined &&
        calefaccio !== undefined) {

        if (typeof sensorTemperatura.valor === "number") {

            if (sensorTemperatura.valor < 20) {

                if (calefaccio.encendre !== undefined) {

                    calefaccio.encendre();
                }

            } else {

                if (calefaccio.apagar !== undefined) {

                    calefaccio.apagar();
                }
            }
        }
    }


    // --------------------------------------------------
    // FOC
    // --------------------------------------------------

    if (sensorFums !== undefined &&
        extintor !== undefined) {

        if (sensorFums.valor === true) {

            if (extintor.encendre !== undefined) {

                extintor.encendre();
            }
        }
    }
}


// --------------------------------------------------
// COMPROVEM LA CASA
// --------------------------------------------------

console.log("Comprovació inicial:");

ControlarDomotica();


// Comprovem els sensors cada 5 segons

setInterval(function() {

    console.log("Nova comprovació:");

    ControlarDomotica();

}, 5000);