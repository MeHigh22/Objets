let francois = {
    nom : "Francois",
    panier : ["Oeufs","Fromage","Lait","Saucisse"],
    chiper(victime){
        for(i = 0; i < 2 ; i++){
            francois.panier.push(victime.panier[i]);
            victime.panier.splice(i, 1);
        }
    }
}

let sergio = {
    nom : "Sergio",
    panier : ["Huile","Tomate","Cheval"]
}


console.log(francois);

francois.chiper(sergio);

console.log(francois.panier);

console.log(sergio.panier);