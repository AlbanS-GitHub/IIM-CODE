class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    isLucky() {
        return Math.random() < this.luck
    }

    attackPokemon(defenseur) {
        if (this.isLucky()) {
            let dmg = this.attack - defenseur.defense
            if (dmg < 0) {
                console.log("C'est inefficace")
            } else {
                defenseur.hp -= dmg
                console.log(dmg + " dégâts ont été infligés")
                console.log("Il reste " + defenseur.hp + " hp a " + defenseur.name)
            }
        } else {
            console.log("L'attaque échoue")
        }
    }
}

let salameche = new Pokemon("Salamèche", 50, 25, 120, 0.1)
let bulbizarre = new Pokemon("Bulbizarre", 35, 100, 150, 0.9)

while(salameche.hp > 0 && bulbizarre.hp > 0) {
    
    salameche.attackPokemon(bulbizarre)
    if(bulbizarre.hp <= 0){
        console.log("Bulbizarre est KO")
        break;
    }

    bulbizarre.attackPokemon(salameche)
    if(salameche.hp <= 0){
        console.log("Salamèche est KO")
        break;
    }
}