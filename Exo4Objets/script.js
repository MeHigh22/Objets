let vieille_dame = {
    age : 69,
    nom : {Nom : "Gertrude", Prénom :"Moncler"},
    moral : "mal",
    objet : "fouet",
    parler(){
        if(this.moral == "mal"){
            console.log("Vous me dérangez,\nje vous ferai des cookies avec de la cyanure");
        } else if(this.moral == "bien"){
            console.log(`Bonjour ${vieilhomme.nom}`);
        }
    }
};

let vieilhomme = {
    nom : "Gilbert",
    adoucir(){
        if(vieille_dame.moral == "mal"){
            vieille_dame.moral = "bien"
        }
    }
};

vieille_dame.parler();
vieilhomme.adoucir();
vieille_dame.parler();