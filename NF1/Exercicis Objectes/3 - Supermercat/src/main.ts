interface Article {
    codi: string;
    descripcio: string;
    preu: number;
    pes?: number;
    volum?: number;
    unitats?: number;
    dte?: number;
    preuFinal?: number;
}

// Array on guardarem els articles

let articles: Article[] = [];

// Metode que afegeix un article a l'array d'articles

function afegirArticle(article: Article): void {

    // Si te descompte, calculem preu final
    if (article.dte !== undefined) {
        article.preuFinal = article.preu - (article.preu * article.dte / 100);
    }

    articles.push(article);
}

// Crear 4 articles

let article1: Article = {
    codi: "A001",
    descripcio: "Lamborgini Aventador",
    preu: 200000,
    dte: 10
};

let article2: Article = {
    codi: "A002",
    descripcio: "Ferrari F8 Tributo",
    preu: 250000,
    dte: 5
};

let article3: Article = {
    codi: "A003",
    descripcio: "Porsche 911 Turbo S",
    preu: 180000
};

let article4: Article = {
    codi: "A004",
    descripcio: "McLaren 720S",
    preu: 300000,
    dte: 15
};

// Afegir els articles a l'array d'articles
afegirArticle(article1);
afegirArticle(article2);
afegirArticle(article3);
afegirArticle(article4);

// Metode que mostra els articles en forma d'etiquetes HTML

function mostrarArticles(articles: Article[]): void {

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

// Mostrar els articles per consola
console.log("TOTS ELS ARTICLES:");
mostrarArticles(articles);


// Buscar per valor

// Buscar articles que tinguin un valor concret en un atribut concret

function BuscarPerValor(
    articles: Article[],
    atribut: keyof Article,
    valor: any
): Article[] {

    let resultats: Article[] = [];

    for (let i = 0; i < articles.length; i++) {
        if (articles[i][atribut] === valor) {
            resultats.push(articles[i]);
        }
    }

    return resultats;
}


// Buscar per patro

function coincideixPatro(text: string, patro: string): boolean {
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

//Buscar articles que coincideixin amb un patro en un atribut
function BuscarPerPatro(
    articles: Article[],
    atribut: keyof Article,
    patro: string
): Article[] {
    let resultats: Article[] = [];

    for (let i = 0; i < articles.length; i++) {
        let valor = String(articles[i][atribut]);
        if (coincideixPatro(valor, patro)) {
            resultats.push(articles[i]);
        }
    }

    return resultats;
}

