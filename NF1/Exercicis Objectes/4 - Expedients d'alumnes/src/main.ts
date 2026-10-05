
interface Modul {
    nom: string;
    notes: number[];
    notaModul?: number;
}

interface Alumne {
    nom: string;
    cognoms: string;
    curs: number;
    moduls: Modul[];
    notaFinal?: number;
}


// --------------------------------------------------
// 1. CREEM 3 ALUMNES
// --------------------------------------------------

let alumne1: Alumne = {
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


let alumne2: Alumne = {
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


let alumne3: Alumne = {
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


// --------------------------------------------------
// 2. CLONEM ELS 3 ALUMNES
// --------------------------------------------------

function ClonarAlumne(alumne: Alumne): Alumne {

    let modulsClonats: Modul[] = [];

    for (let i = 0; i < alumne.moduls.length; i++) {

        let modulClonat: Modul = {
            nom: alumne.moduls[i].nom,
            notes: []
        };

        for (let j = 0; j < alumne.moduls[i].notes.length; j++) {

            modulClonat.notes.push(alumne.moduls[i].notes[j]);
        }

        modulsClonats.push(modulClonat);
    }

    let clon: Alumne = {
        nom: alumne.nom,
        cognoms: alumne.cognoms,
        curs: alumne.curs,
        moduls: modulsClonats
    };

    return clon;
}


// Clon de Bat -> Wonder Woman

let alumne4 = ClonarAlumne(alumne1);

alumne4.nom = "Wonder";
alumne4.cognoms = "Woman";


// Clon de Iron -> Cat Woman

let alumne5 = ClonarAlumne(alumne2);

alumne5.nom = "Cat";
alumne5.cognoms = "Woman";


// Afegim M02

alumne5.moduls.push({
    nom: "M02",
    notes: [9, 9, 9]
});


// Clon de Spider -> Super Woman

let alumne6 = ClonarAlumne(alumne3);

alumne6.nom = "Super";
alumne6.cognoms = "Woman";


// Eliminem M02

for (let i = 0; i < alumne6.moduls.length; i++) {

    if (alumne6.moduls[i].nom === "M02") {

        alumne6.moduls.splice(i, 1);

        break;
    }
}


// Canviem les notes dels mòduls

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


// --------------------------------------------------
// 3. ARRAY AMB ELS 6 ALUMNES
// --------------------------------------------------

let alumnes: Alumne[] = [];

alumnes.push(alumne1);
alumnes.push(alumne2);
alumnes.push(alumne3);
alumnes.push(alumne4);
alumnes.push(alumne5);
alumnes.push(alumne6);


// --------------------------------------------------
// 4. CALCULAR LA NOTA DE CADA MÒDUL
// --------------------------------------------------

function CalcularNotesModuls(alumnes: Alumne[]): void {

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

            // Només calculem si totes les UF estan aprovades

            if (aprovades && modul.notes.length > 0) {

                let mitjana = suma / modul.notes.length;

                modul.notaModul = Math.round(mitjana);
            }
        }
    }
}


// --------------------------------------------------
// 5. CALCULAR LA NOTA FINAL
// --------------------------------------------------

function CalcularNotesFinals(alumnes: Alumne[]): void {

    for (let i = 0; i < alumnes.length; i++) {

        let alumne = alumnes[i];

        let suma = 0;
        let teTotesLesNotes = true;

        for (let j = 0; j < alumne.moduls.length; j++) {

            let modul = alumne.moduls[j];

            if (modul.notaModul === undefined) {

                teTotesLesNotes = false;

            } else {

                suma = suma + modul.notaModul;
            }
        }

        alumne.notaFinal = undefined;

        // Només calculem la nota final si té nota de tots els mòduls

        if (teTotesLesNotes && alumne.moduls.length > 0) {

            let mitjana = suma / alumne.moduls.length;

            alumne.notaFinal = Math.round(mitjana * 10) / 10;
        }
    }
}


// --------------------------------------------------
// 6. ORDENAR ALUMNES PER COGNOMS I NOM
// --------------------------------------------------

function OrdenarAlumnes(alumnes: Alumne[]): void {

    alumnes.sort(function(a: Alumne, b: Alumne): number {

        let resultatCognoms = a.cognoms.localeCompare(b.cognoms);

        if (resultatCognoms !== 0) {

            return resultatCognoms;
        }

        return a.nom.localeCompare(b.nom);
    });
}


// --------------------------------------------------
// 7. BUSCAR UN MÒDUL DINS D'UN ALUMNE
// --------------------------------------------------

function BuscarModul(alumne: Alumne, nomModul: string): Modul | undefined {

    for (let i = 0; i < alumne.moduls.length; i++) {

        if (alumne.moduls[i].nom === nomModul) {

            return alumne.moduls[i];
        }
    }

    return undefined;
}


// --------------------------------------------------
// 8. MOSTRAR ALUMNES EN UNA TAULA
// --------------------------------------------------

function MostrarAlumnes(alumnes: Alumne[], titol: string): void {

    let contenidor = document.getElementById("resultats");

    if (contenidor === null) {

        return;
    }

    let seccio = document.createElement("section");

    let h2 = document.createElement("h2");

    h2.textContent = titol;

    seccio.appendChild(h2);


    let taula = document.createElement("table");


    // Capçalera

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


    // Files dels alumnes

    for (let i = 0; i < alumnes.length; i++) {

        let alumne = alumnes[i];

        let fila = document.createElement("tr");


        let celdaAlumne = document.createElement("td");

        celdaAlumne.textContent =
            alumne.cognoms + ", " + alumne.nom;


        let celdaCurs = document.createElement("td");

        celdaCurs.textContent =
            String(alumne.curs);


        // M02

        let celdaM02 = document.createElement("td");

        let modulM02 = BuscarModul(alumne, "M02");

        if (modulM02 !== undefined &&
            modulM02.notaModul !== undefined) {

            celdaM02.textContent =
                String(modulM02.notaModul);
        }


        // M03

        let celdaM03 = document.createElement("td");

        let modulM03 = BuscarModul(alumne, "M03");

        if (modulM03 !== undefined &&
            modulM03.notaModul !== undefined) {

            celdaM03.textContent =
                String(modulM03.notaModul);
        }


        // M06

        let celdaM06 = document.createElement("td");

        let modulM06 = BuscarModul(alumne, "M06");

        if (modulM06 !== undefined &&
            modulM06.notaModul !== undefined) {

            celdaM06.textContent =
                String(modulM06.notaModul);
        }


        // M07

        let celdaM07 = document.createElement("td");

        let modulM07 = BuscarModul(alumne, "M07");

        if (modulM07 !== undefined &&
            modulM07.notaModul !== undefined) {

            celdaM07.textContent =
                String(modulM07.notaModul);
        }


        // Nota final

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


// --------------------------------------------------
// 9. FILTRAR ALUMNES MATRICULATS EN UN MÒDUL
// --------------------------------------------------

function FiltrarPerModul(
    alumnes: Alumne[],
    nomModul: string
): Alumne[] {

    return alumnes.filter(function(alumne: Alumne): boolean {

        for (let i = 0; i < alumne.moduls.length; i++) {

            if (alumne.moduls[i].nom === nomModul) {

                return true;
            }
        }

        return false;
    });
}


// --------------------------------------------------
// 10. FILTRAR ALUMNES QUE NO ESTAN MATRICULATS
// --------------------------------------------------

function FiltrarSenseModul(
    alumnes: Alumne[],
    nomModul: string
): Alumne[] {

    return alumnes.filter(function(alumne: Alumne): boolean {

        for (let i = 0; i < alumne.moduls.length; i++) {

            if (alumne.moduls[i].nom === nomModul) {

                return false;
            }
        }

        return true;
    });
}


// --------------------------------------------------
// 11. FILTRAR ALUMNES QUE HAN FINALITZAT EL CICLE
// --------------------------------------------------

function FiltrarFinalitzats(alumnes: Alumne[]): Alumne[] {

    let modulsObligatoris: string[] = [
        "M02",
        "M03",
        "M06",
        "M07"
    ];


    return alumnes.filter(function(alumne: Alumne): boolean {

        // Ha d'estar a segon

        if (alumne.curs !== 2) {

            return false;
        }


        // Ha de tenir tots els mòduls

        for (let i = 0; i < modulsObligatoris.length; i++) {

            let modul =
                BuscarModul(alumne, modulsObligatoris[i]);

            if (modul === undefined ||
                modul.notaModul === undefined) {

                return false;
            }
        }


        // Ha de tenir nota final

        if (alumne.notaFinal === undefined) {

            return false;
        }

        return true;
    });
}


// --------------------------------------------------
// 12. EXECUTEM ELS MÈTODES
// --------------------------------------------------


// Calculem les notes dels mòduls

CalcularNotesModuls(alumnes);


// Calculem les notes finals

CalcularNotesFinals(alumnes);


// Ordenem els alumnes

OrdenarAlumnes(alumnes);


// Mostrem tots els alumnes

MostrarAlumnes(
    alumnes,
    "Tots els alumnes"
);


// Alumnes matriculats a M02

let alumnesM02 =
    FiltrarPerModul(alumnes, "M02");

MostrarAlumnes(
    alumnesM02,
    "Alumnes matriculats a M02"
);


// Alumnes que NO estan matriculats a M02

let alumnesSenseM02 =
    FiltrarSenseModul(alumnes, "M02");

MostrarAlumnes(
    alumnesSenseM02,
    "Alumnes que no estan matriculats a M02"
);


// Alumnes que han finalitzat el cicle

let alumnesFinalitzats =
    FiltrarFinalitzats(alumnes);

MostrarAlumnes(
    alumnesFinalitzats,
    "Alumnes que han finalitzat el cicle"
);
