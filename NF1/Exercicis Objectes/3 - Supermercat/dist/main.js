let articles = [];
function afegirArticle(article) {
    if (article.dte !== undefined) {
        article.preuFinal = article.preu - (article.preu * article.dte / 100);
    }
    articles.push(article);
}
let article1 = {
    codi: "A001",
    descripcio: "Lamborgini Aventador",
    preu: 200000,
    dte: 10
};
let article2 = {
    codi: "A002",
    descripcio: "Ferrari F8 Tributo",
    preu: 250000,
    dte: 5
};
let article3 = {
    codi: "A003",
    descripcio: "Porsche 911 Turbo S",
    preu: 180000
};
let article4 = {
    codi: "A004",
    descripcio: "McLaren 720S",
    preu: 300000,
    dte: 15
};
afegirArticle(article1);
afegirArticle(article2);
afegirArticle(article3);
afegirArticle(article4);
function mostrarArticles(articles) {
    for (let i = 0; i < articles.length; i++) {
        console.log("codi: " + articles[i].codi);
        console.log("descripcio: " + articles[i].descripcio);
        console.log("preu: " + articles[i].preu.toFixed(2) + " €");
        if (articles[i].pes !== undefined) {
            console.log("pes: " + articles[i].pes + " kg");
        }
        if (articles[i].volum !== undefined) {
            console.log("volum: " + articles[i].volum + " m3");
        }
        if (articles[i].unitats !== undefined) {
            console.log("unitats: " + articles[i].unitats);
        }
        if (articles[i].dte !== undefined) {
            console.log("descompte: " + articles[i].dte + " %");
            console.log("preu final: " + articles[i].preuFinal?.toFixed(2) + " €");
        }
        console.log("-----------------------------");
    }
}
console.log("TOTS ELS ARTICLES:");
mostrarArticles(articles);
function BuscarPerValor(articles, atribut, valor) {
    let resultats = [];
    for (let i = 0; i < articles.length; i++) {
        if (articles[i][atribut] === valor) {
            resultats.push(articles[i]);
        }
    }
    return resultats;
}
function coincideixPatro(text, patro) {
    let i = 0;
    let j = 0;
    while (i < text.length && j < patro.length) {
        if (patro[j] === "?") {
            i++;
            j++;
        }
        else if (patro[j] === "*") {
            if (j === patro.length - 1) {
                return true;
            }
            else {
                j++;
                while (i < text.length) {
                    if (coincideixPatro(text.substring(i), patro.substring(j))) {
                        return true;
                    }
                }
                i++;
            }
            return false;
        }
        else {
            if (text[i] !== patro[j]) {
                return false;
            }
            i++;
            j++;
        }
    }
    while (j < patro.length && patro[j] === "*") {
        j++;
    }
    return i === text.length && j === patro.length;
}
function BuscarPerPatro(articles, atribut, patro) {
    let resultats = [];
    for (let i = 0; i < articles.length; i++) {
        let valor = String(articles[i][atribut]);
        if (coincideixPatro(valor, patro)) {
            resultats.push(articles[i]);
        }
    }
    return resultats;
}
export {};
//# sourceMappingURL=main.js.map