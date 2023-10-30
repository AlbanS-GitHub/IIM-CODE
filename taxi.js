var John = {
    prenom: "john", santementale: 10
}

var musique = ["Am i Dreaming", "Self Love", "la 15", "abricot", "Anissa - Wejdene"]


var Trajet = {
    feuxrouge:30, changement: 0
}


for ( var i=1;i<=Trajet.feuxrouge;i++) {
    
    console.log(`feu rouge #${i} |feux restants : ${Trajet.feuxrouge - i + 1}`)

    var quelmusique =Math.floor(Math.random()* musique.length)
    var musiquejouer =musique[quelmusique]

    console.log(`Feu rouge #${i} | Feux restants : ${Trajet.feuxrouge - i + 1} | Musique : ${musiquejouer}`)

    if (musiquejouer === "Anissa - Wejdene") {Trajet.changement++; John.santementale--
    }
}

if (John.santementale === 0) 
   {console.log("Explosion")} 

else {console.log(`Bien arrive ! Nombre de changements : ${Trajet.changement}`)}
