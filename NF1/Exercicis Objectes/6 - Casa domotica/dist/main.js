let domotica = {
    sensors: [],
    actuadors: []
};
let sensorPluja = {
    nom: "pluja",
    valor: false
};
let sensorNit = {
    nom: "esDeNit",
    valor: false
};
let sensorTemperatura = {
    nom: "temperatura",
    valor: 21
};
let sensorPresencia = {
    nom: "presencia",
    valor: false
};
let sensorFums = {
    nom: "fums",
    valor: false
};
domotica.sensors.push(sensorPluja);
domotica.sensors.push(sensorNit);
domotica.sensors.push(sensorTemperatura);
domotica.sensors.push(sensorPresencia);
domotica.sensors.push(sensorFums);
let persianes = {
    nom: "persianes",
    estat: false,
    pujar: function () {
        if (this.estat === true) {
            console.log("Estic pujant les persianes.");
            this.estat = false;
        }
    },
    baixar: function () {
        if (this.estat === false) {
            console.log("Estic baixant les persianes.");
            this.estat = true;
        }
    }
};
let llums = {
    nom: "llums",
    estat: false,
    encendre: function () {
        if (this.estat === false) {
            console.log("He encès els llums.");
            this.estat = true;
        }
    },
    apagar: function () {
        if (this.estat === true) {
            console.log("He apagat els llums.");
            this.estat = false;
        }
    }
};
let calefaccio = {
    nom: "calefaccio",
    estat: false,
    encendre: function () {
        if (this.estat === false) {
            console.log("He encès la calefacció.");
            this.estat = true;
        }
    },
    apagar: function () {
        if (this.estat === true) {
            console.log("He apagat la calefacció.");
            this.estat = false;
        }
    }
};
let extintor = {
    nom: "extintor",
    estat: false,
    encendre: function () {
        if (this.estat === false) {
            console.log("He activat l'extintor.");
            this.estat = true;
        }
    }
};
domotica.actuadors.push(persianes);
domotica.actuadors.push(llums);
domotica.actuadors.push(calefaccio);
domotica.actuadors.push(extintor);
function BuscarSensor(sensors, nom) {
    for (let i = 0; i < sensors.length; i++) {
        if (sensors[i].nom === nom) {
            return sensors[i];
        }
    }
    return undefined;
}
function BuscarActuador(actuadors, nom) {
    for (let i = 0; i < actuadors.length; i++) {
        if (actuadors[i].nom === nom) {
            return actuadors[i];
        }
    }
    return undefined;
}
function ControlarDomotica() {
    let sensorPluja = BuscarSensor(domotica.sensors, "pluja");
    let sensorNit = BuscarSensor(domotica.sensors, "esDeNit");
    let sensorTemperatura = BuscarSensor(domotica.sensors, "temperatura");
    let sensorPresencia = BuscarSensor(domotica.sensors, "presencia");
    let sensorFums = BuscarSensor(domotica.sensors, "fums");
    let persianes = BuscarActuador(domotica.actuadors, "persianes");
    let llums = BuscarActuador(domotica.actuadors, "llums");
    let calefaccio = BuscarActuador(domotica.actuadors, "calefaccio");
    let extintor = BuscarActuador(domotica.actuadors, "extintor");
    if (sensorPluja !== undefined &&
        sensorNit !== undefined &&
        persianes !== undefined) {
        if (sensorPluja.valor === true ||
            sensorNit.valor === true) {
            if (persianes.baixar !== undefined) {
                persianes.baixar();
            }
        }
        else {
            if (persianes.pujar !== undefined) {
                persianes.pujar();
            }
        }
    }
    if (sensorPresencia !== undefined &&
        sensorNit !== undefined &&
        llums !== undefined) {
        if (sensorPresencia.valor === true &&
            sensorNit.valor === true) {
            if (llums.encendre !== undefined) {
                llums.encendre();
            }
        }
        else {
            if (llums.apagar !== undefined) {
                llums.apagar();
            }
        }
    }
    if (sensorTemperatura !== undefined &&
        calefaccio !== undefined) {
        if (typeof sensorTemperatura.valor === "number") {
            if (sensorTemperatura.valor < 20) {
                if (calefaccio.encendre !== undefined) {
                    calefaccio.encendre();
                }
            }
            else {
                if (calefaccio.apagar !== undefined) {
                    calefaccio.apagar();
                }
            }
        }
    }
    if (sensorFums !== undefined &&
        extintor !== undefined) {
        if (sensorFums.valor === true) {
            if (extintor.encendre !== undefined) {
                extintor.encendre();
            }
        }
    }
}
console.log("Comprovació inicial:");
ControlarDomotica();
setInterval(function () {
    console.log("Nova comprovació:");
    ControlarDomotica();
}, 5000);
export {};
//# sourceMappingURL=main.js.map