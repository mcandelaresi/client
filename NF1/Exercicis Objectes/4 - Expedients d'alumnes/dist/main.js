let alumne1 = {
    nom: "Bat",
    cognoms: "Man",
    curs: 2,
    moduls: [
        {
            nom: "M02",
            notes: [9, 8, 10]
        },
        {
            nom: "M03",
            notes: [7, 6, 8]
        },
        {
            nom: "M06",
            notes: [5, 5, 5]
        },
        {
            nom: "M07",
            notes: [7, 6, 8]
        }
    ]
};
let alumne2 = {
    nom: "Iron",
    cognoms: "Man",
    curs: 1,
    moduls: [
        {
            nom: "M03",
            notes: [8, 8, 7]
        },
        {
            nom: "M07",
            notes: [6, 6, 5]
        }
    ]
};
let alumne3 = {
    nom: "Spider",
    cognoms: "Man",
    curs: 2,
    moduls: [
        {
            nom: "M02",
            notes: [6, 5, 7]
        },
        {
            nom: "M06",
            notes: [8, 8, 8]
        },
        {
            nom: "M07",
            notes: [9, 8, 10]
        }
    ]
};
function ClonarAlumne(alumne) {
    let modulsClonats = [];
    for (let i = 0; i < alumne.moduls.length; i++) {
        let modulClonat = {
            nom: alumne.moduls[i].nom,
            notes: []
        };
        for (let j = 0; j < alumne.moduls[i].notes.length; j++) {
            modulClonat.notes.push(alumne.moduls[i].notes[j]);
        }
        modulsClonats.push(modulClonat);
    }
    let clon = {
        nom: alumne.nom,
        cognoms: alumne.cognoms,
        curs: alumne.curs,
        moduls: modulsClonats
    };
    return clon;
}
let alumne4 = ClonarAlumne(alumne1);
alumne4.nom = "Wonder";
alumne4.cognoms = "Woman";
let alumne5 = ClonarAlumne(alumne2);
alumne5.nom = "Cat";
alumne5.cognoms = "Woman";
alumne5.moduls.push({
    nom: "M02",
    notes: [9, 9, 9]
});
let alumne6 = ClonarAlumne(alumne3);
alumne6.nom = "Super";
alumne6.cognoms = "Woman";
for (let i = 0; i < alumne6.moduls.length; i++) {
    if (alumne6.moduls[i].nom === "M02") {
        alumne6.moduls.splice(i, 1);
        break;
    }
}
for (let i = 0; i < alumne6.moduls.length; i++) {
    if (alumne6.moduls[i].nom === "M03") {
        alumne6.moduls[i].notes = [7, 7, 7];
    }
    if (alumne6.moduls[i].nom === "M06") {
        alumne6.moduls[i].notes = [5, 5, 5];
    }
    if (alumne6.moduls[i].nom === "M07") {
        alumne6.moduls[i].notes = [7, 7, 7];
    }
}
let alumnes = [];
alumnes.push(alumne1);
alumnes.push(alumne2);
alumnes.push(alumne3);
alumnes.push(alumne4);
alumnes.push(alumne5);
alumnes.push(alumne6);
function CalcularNotesModuls(alumnes) {
    for (let i = 0; i < alumnes.length; i++) {
        let alumne = alumnes[i];
        for (let j = 0; j < alumne.moduls.length; j++) {
            let modul = alumne.moduls[j];
            let suma = 0;
            let aprovades = true;
            for (let k = 0; k < modul.notes.length; k++) {
                suma = suma + modul.notes[k];
                if (modul.notes[k] < 5) {
                    aprovades = false;
                }
            }
            modul.notaModul = undefined;
            if (aprovades && modul.notes.length > 0) {
                let mitjana = suma / modul.notes.length;
                modul.notaModul = Math.round(mitjana);
            }
        }
    }
}
function CalcularNotesFinals(alumnes) {
    for (let i = 0; i < alumnes.length; i++) {
        let alumne = alumnes[i];
        let suma = 0;
        let teTotesLesNotes = true;
        for (let j = 0; j < alumne.moduls.length; j++) {
            let modul = alumne.moduls[j];
            if (modul.notaModul === undefined) {
                teTotesLesNotes = false;
            }
            else {
                suma = suma + modul.notaModul;
            }
        }
        alumne.notaFinal = undefined;
        if (teTotesLesNotes && alumne.moduls.length > 0) {
            let mitjana = suma / alumne.moduls.length;
            alumne.notaFinal = Math.round(mitjana * 10) / 10;
        }
    }
}
function OrdenarAlumnes(alumnes) {
    alumnes.sort(function (a, b) {
        let resultatCognoms = a.cognoms.localeCompare(b.cognoms);
        if (resultatCognoms !== 0) {
            return resultatCognoms;
        }
        return a.nom.localeCompare(b.nom);
    });
}
function BuscarModul(alumne, nomModul) {
    for (let i = 0; i < alumne.moduls.length; i++) {
        if (alumne.moduls[i].nom === nomModul) {
            return alumne.moduls[i];
        }
    }
    return undefined;
}
function MostrarAlumnes(alumnes, titol) {
    let contenidor = document.getElementById("resultats");
    if (contenidor === null) {
        return;
    }
    let seccio = document.createElement("section");
    let h2 = document.createElement("h2");
    h2.textContent = titol;
    seccio.appendChild(h2);
    let taula = document.createElement("table");
    let filaCapcalera = document.createElement("tr");
    let capcaleraAlumne = document.createElement("th");
    capcaleraAlumne.textContent = "Alumne";
    let capcaleraCurs = document.createElement("th");
    capcaleraCurs.textContent = "Curs";
    let capcaleraM02 = document.createElement("th");
    capcaleraM02.textContent = "M02";
    let capcaleraM03 = document.createElement("th");
    capcaleraM03.textContent = "M03";
    let capcaleraM06 = document.createElement("th");
    capcaleraM06.textContent = "M06";
    let capcaleraM07 = document.createElement("th");
    capcaleraM07.textContent = "M07";
    let capcaleraFinal = document.createElement("th");
    capcaleraFinal.textContent = "Final";
    filaCapcalera.appendChild(capcaleraAlumne);
    filaCapcalera.appendChild(capcaleraCurs);
    filaCapcalera.appendChild(capcaleraM02);
    filaCapcalera.appendChild(capcaleraM03);
    filaCapcalera.appendChild(capcaleraM06);
    filaCapcalera.appendChild(capcaleraM07);
    filaCapcalera.appendChild(capcaleraFinal);
    taula.appendChild(filaCapcalera);
    for (let i = 0; i < alumnes.length; i++) {
        let alumne = alumnes[i];
        let fila = document.createElement("tr");
        let celdaAlumne = document.createElement("td");
        celdaAlumne.textContent =
            alumne.cognoms + ", " + alumne.nom;
        let celdaCurs = document.createElement("td");
        celdaCurs.textContent =
            String(alumne.curs);
        let celdaM02 = document.createElement("td");
        let modulM02 = BuscarModul(alumne, "M02");
        if (modulM02 !== undefined &&
            modulM02.notaModul !== undefined) {
            celdaM02.textContent =
                String(modulM02.notaModul);
        }
        let celdaM03 = document.createElement("td");
        let modulM03 = BuscarModul(alumne, "M03");
        if (modulM03 !== undefined &&
            modulM03.notaModul !== undefined) {
            celdaM03.textContent =
                String(modulM03.notaModul);
        }
        let celdaM06 = document.createElement("td");
        let modulM06 = BuscarModul(alumne, "M06");
        if (modulM06 !== undefined &&
            modulM06.notaModul !== undefined) {
            celdaM06.textContent =
                String(modulM06.notaModul);
        }
        let celdaM07 = document.createElement("td");
        let modulM07 = BuscarModul(alumne, "M07");
        if (modulM07 !== undefined &&
            modulM07.notaModul !== undefined) {
            celdaM07.textContent =
                String(modulM07.notaModul);
        }
        let celdaFinal = document.createElement("td");
        if (alumne.notaFinal !== undefined) {
            celdaFinal.textContent =
                alumne.notaFinal.toFixed(1);
        }
        fila.appendChild(celdaAlumne);
        fila.appendChild(celdaCurs);
        fila.appendChild(celdaM02);
        fila.appendChild(celdaM03);
        fila.appendChild(celdaM06);
        fila.appendChild(celdaM07);
        fila.appendChild(celdaFinal);
        taula.appendChild(fila);
    }
    seccio.appendChild(taula);
    contenidor.appendChild(seccio);
}
function FiltrarPerModul(alumnes, nomModul) {
    return alumnes.filter(function (alumne) {
        for (let i = 0; i < alumne.moduls.length; i++) {
            if (alumne.moduls[i].nom === nomModul) {
                return true;
            }
        }
        return false;
    });
}
function FiltrarSenseModul(alumnes, nomModul) {
    return alumnes.filter(function (alumne) {
        for (let i = 0; i < alumne.moduls.length; i++) {
            if (alumne.moduls[i].nom === nomModul) {
                return false;
            }
        }
        return true;
    });
}
function FiltrarFinalitzats(alumnes) {
    let modulsObligatoris = [
        "M02",
        "M03",
        "M06",
        "M07"
    ];
    return alumnes.filter(function (alumne) {
        if (alumne.curs !== 2) {
            return false;
        }
        for (let i = 0; i < modulsObligatoris.length; i++) {
            let modul = BuscarModul(alumne, modulsObligatoris[i]);
            if (modul === undefined ||
                modul.notaModul === undefined) {
                return false;
            }
        }
        if (alumne.notaFinal === undefined) {
            return false;
        }
        return true;
    });
}
CalcularNotesModuls(alumnes);
CalcularNotesFinals(alumnes);
OrdenarAlumnes(alumnes);
MostrarAlumnes(alumnes, "Tots els alumnes");
let alumnesM02 = FiltrarPerModul(alumnes, "M02");
MostrarAlumnes(alumnesM02, "Alumnes matriculats a M02");
let alumnesSenseM02 = FiltrarSenseModul(alumnes, "M02");
MostrarAlumnes(alumnesSenseM02, "Alumnes que no estan matriculats a M02");
let alumnesFinalitzats = FiltrarFinalitzats(alumnes);
MostrarAlumnes(alumnesFinalitzats, "Alumnes que han finalitzat el cicle");
export {};
//# sourceMappingURL=main.js.map