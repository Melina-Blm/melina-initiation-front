let prenom = 'Melina'
let nom = 'Bouchelleghem'

//Concaténation
console.log(prenom +" " + nom)

//Interpolation
console.log(`${prenom} ${nom}`)

//Const
const ANNEE_NAISSANCE = 2003
console.log(ANNEE_NAISSANCE)

//numbers
let age = 30
let anneeExperience = 9

console.log(age - anneeExperience)

let a = 0.1
let b = 0.2

console.log((a*10 + b*10) /10)


//boolean
let isWorking = true

let variablePourLeFuture = null
let variablePourLeFuture2

console.log(variablePourLeFuture2)
console.log(variablePourLeFuture)

//function 
function parler(message1, message2) {
    console.log(message1)
    console.log(message2)
}
parler("salut", "ça va");
parler("au revoir", "bonne journée");


//autre moyen d'appeler une fonction avec des objets
function parler2(messages) {
    console.log(messages.message1)
    console.log(messages.message2)
}

parler2({
    message1: "salut",
    message2:"ça va?"
})


//function
function checkLaVieillesse (age) {
    return age
}

console.log(checkLaVieillesse(30))

//tableaux

const simpsons = ["Homer","Marge",["Bart", "Lisa", "Maggie"]]

//afficher marge
console.log(simpsons[1])

//afficher maggie
console.log(simpsons[2][2])

