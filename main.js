
var a = 4
var b = 4
var c = 3

if(a == b) {
    console.log("c'est égal")
}

if(c < b && a + c != 3) {
    console.log("ok")
} else {
    console.log("raté")
}

switch (a) {
    case b:
        console.log("égal à b")
        break
    case c:
        console.log("égal à c'")
        break
    default:
        console.log('égal à rien')
}

for (let i = 1; i < 100; i++) {
    if(i % 15 == 0) {
        console.log("FizzBuzz")
    }
    if(i % 5 == 0) {
        console.log("Buzz")
    }
    if(i % 3 == 0) {
        console.log("Fizz")
    }
}

let i = 1;
while (i <= 33) {
    console.log(i)
    i++
    if (i == 17) {
        i += 10
    }
    if (i == 33) {
        console.log("réussi")
    }
}

var a = 5
var b = 6
var somme = addition(a, b)

function addition(number1, number2) {
    return number1 + number2
}

console.log(somme)

var c = "Jean"
var d = "Paul"
var result = checkName(c, d)

function checkName(prenom1, prenom2) {
    if (prenom1 == prenom2) {
        return true
    } else {
        return false
    }
}

console.log(result)

let vide = []
let numbers = [1, 2, 3, 4, 5]
let mix = ["Matthieu", 1, 3, "Nicolas", false, 23.67]

let prenoms = ["Matthieu", "Nicolas", "Alexis"]

prenoms.forEach(function (prenom){
    console.log(prenom)
})

console.log(prenoms)

var names = []

names.push("Vincent", "Paul", "Arthur")

names.forEach(name => {
    console.log(name.length)
})

let student = {
    name: "Matthieu",
    favoriteFood: "Tiramisu",
    city: "Aix",
    job: "Developpeur"
}
let result = 0

let valeurs = Object.values(student)
valeurs.forEach(function (valeur){
    result += valeur.length
})

if (result % 2 == 0) {
    console.log("pair")
} else {
    console.log("impair")
}