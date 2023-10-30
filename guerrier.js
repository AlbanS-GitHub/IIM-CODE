class Guerrier {
    constructor(attack, defense, hp, luck) {
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    isLucky(){
        Math.random < 0.5
    }

    attack(defenseur){
        if (this.isLucky() === true) {
        }
        defenseur.hp = defenseur.hp - 15
        this.attack 
        defenseur.defense
    }

}

let matthieu = new Guerrier(10, 10, 50, 0.5)
let alexis = new Guerrier(10, 10, 210, 0.6)

matthieu.attack(alexis)
alexis.attack(matthieu)