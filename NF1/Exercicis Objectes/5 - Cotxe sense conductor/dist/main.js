let sensors = [
    "Càmeres",
    "Sensor de llum",
    "Sensor de pluja",
    "Radar",
    "LIDAR",
    "Sensors ultrasònics",
    "GPS",
    "Sensors de velocitat de les rodes",
    "Acceleròmetre i giroscopi",
    "Sensor de combustible o bateria",
    "Sensors meteorològics"
];
let actuadors = [
    "Direcció",
    "Accelerador",
    "Frens",
    "Llums",
    "Eixugaparabrises",
    "Intermitents",
    "Clàxon",
    "Canvi de marxes",
    "Pantalla i navegador",
    "Sistema de càrrega"
];
console.log("SENSORS NECESSARIS:");
for (let i = 0; i < sensors.length; i++) {
    console.log("- " + sensors[i]);
}
console.log("");
console.log("ACTUADORS NECESSARIS:");
for (let i = 0; i < actuadors.length; i++) {
    console.log("- " + actuadors[i]);
}
function ControlarCotxe() {
    console.log("");
    console.log("ACCIONS DEL PROGRAMA DE CONTROL:");
    console.log("- Encen les llums quan és de nit o quan entra en un túnel.");
    console.log("- Activa els eixugaparabrises quan detecta pluja.");
    console.log("- Controla la direcció per girar en corbes i interseccions.");
    console.log("- Detecta els semàfors i s'atura quan estan en vermell.");
    console.log("- Adapta la velocitat al límit de la carretera.");
    console.log("- Adapta la velocitat segons els altres vehicles.");
    console.log("- Redueix la velocitat quan les condicions meteorològiques són dolentes.");
    console.log("- Quan queda poca benzina o bateria, busca la benzinera o punt de càrrega més proper.");
    console.log("- Quan detecta un obstacle, redueix la velocitat i activa la frenada d'emergència si és necessari.");
    console.log("- Manté el cotxe dins del seu carril.");
    console.log("- Activa els intermitents abans de girar.");
    console.log("- Utilitza el GPS per seguir la ruta.");
    console.log("- Analitza contínuament la informació dels sensors per prendre decisions.");
}
ControlarCotxe();
export {};
//# sourceMappingURL=main.js.map