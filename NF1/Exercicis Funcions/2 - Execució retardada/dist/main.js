function ExecutarAmbRetard(funcio, segons) {
    setTimeout(funcio, segons * 1000);
}
function MostrarMissatge() {
    console.log("Han passat 3 segons");
}
ExecutarAmbRetard(MostrarMissatge, 3);
export {};
//# sourceMappingURL=main.js.map