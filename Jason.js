const caracteristiques = [
    { nom: "blonde", probaMourir: 0.3, probaInfligerDegats: 0.5, probaMourirEnInfligeantDegats: 0.2 },
    { nom: "nerd", probaMourir: 0.2, probaInfligerDegats: 0.6, probaMourirEnInfligeantDegats: 0.1 },
    { nom: "sportif", probaMourir: 0.4, probaInfligerDegats: 0.4, probaMourirEnInfligeantDegats: 0.2 },
    { nom: "beau gosse", probaMourir: 0.1, probaInfligerDegats: 0.7, probaMourirEnInfligeantDegats: 0.2 },
    { nom: "le populaire", probaMourir: 0.3, probaInfligerDegats: 0.4, probaMourirEnInfligeantDegats: 0.3 },
  ];
  
  class Jason {
    constructor() {
      this.nom = "Jason";
      this.pointsDeVie = 100;
    }
  
    attaquer(survivant) {
      const proba = Math.random();
  
      if (proba < survivant.caracteristique.probaMourir) {
        console.log(survivant.nom + " a attaqué Jason mais a malheureusement été tué.");
      } else if (proba < survivant.caracteristique.probaInfligerDegats) {
        this.pointsDeVie -= 10;
        console.log(survivant.nom + " a réussi à infliger 10 points de dégâts à Jason.");
      } else if (proba < survivant.caracteristique.probaMourirEnInfligeantDegats) {
        this.pointsDeVie -= 15;
        console.log(survivant.nom + " a infligé 15 points de dégâts à Jason, mais malheureusement, il est décédé.");
      } else {
        console.log(survivant.nom + " a attaqué Jason, mais rien de spécial ne s'est produit.");
      }
    }
  }
  
  class Survivant {
    constructor() {
      this.nom = genererNomAleatoire();
      this.caracteristique = caracteristiques[Math.floor(Math.random() * caracteristiques.length)];
      this.pointsDeVie = 100;
    }
  }
  
  function genererNomAleatoire() {
    const prenoms = ["Alicia", "Pierre", "Carol", "Dave", "Leva"];
    return prenoms[Math.floor(Math.random() * prenoms.length)];
  }
  
  const jason = new Jason();
  const survivants = Array(5).fill().map(() => new Survivant());
  
  survivants.forEach((survivant) => {
    jason.attaquer(survivant);
  });
  
  console.log(jason.pointsDeVie <= 0 ? "Les survivants ont gagné, Jason est mort." : "Jason a survécu.");
  
  