
let chaussures = [
    {
      marque: 'Nike',
      titre: 'Jordan Air',
      collector: true,
      taillesDispo: [28, 29, 30],
      prix: 300,
      elements: {
        lacets: 'rouge',
        corps: 'blanc',
        semelle: 'bleu',
      },
    },
    {
      marque: 'Vans',
      titre: 'Old Skool',
      collector: false,
      taillesDispo: [34, 36, 38],
      prix: 70,
      elements: {
        lacets: 'noir',
        corps: 'marron',
      },
    },
    {
      marque: 'Adidas',
      titre: 'Stan Smith',
      collector: false,
      taillesDispo: [40, 42, 44],
      prix: 100,
      elements: {
        lacets: 'vert',
        corps: 'blanc',
      },
    },
    {
      marque: 'Nike',
      titre: 'Air Force',
      collector: true,
      taillesDispo: [36, 37, 38],
      prix: 200,
      elements: {
        lacets: 'bleu',
        corps: 'marron',
      },
    },
    {
      marque: 'Nike',
      titre: 'Air Max',
      collector: true,
      taillesDispo: [36, 38, 40],
      prix: 900,
      elements: {
        lacets: 'jaune',
        corps: 'vert',
      },
    },
    {
      marque: 'Vans',
      titre: 'Era',
      collector: false,
      taillesDispo: [30, 32, 40],
      prix: 40,
      elements: {
        lacets: 'bleu',
        corps: 'noir',
      },
    },
    {
      marque: 'Vans',
      titre: 'Sk8',
      collector: false,
      taillesDispo: [28, 30, 26],
      prix: 40,
      elements: {
        lacets: 'bleu',
        corps: 'noir',
        languette: 'rouge',
      },
    },
    {
      marque: 'Vans',
      titre: 'Old Skool',
      collector: false,
      taillesDispo: [36, 28, 60],
      prix: 60,
      elements: {
        lacets: 'blanc',
        corps: 'noir',
        languette: 'noir',
      },
    },
    {
      marque: 'Nike',
      titre: 'Nike SB',
      collector: false,
      taillesDispo: [30, 31, 32],
      prix: 50,
      elements: {
        lacets: 'blanc',
        corps: 'noir',
      },
    },
    {
      marque: 'Adidas',
      titre: 'Old Skool',
      collector: false,
      taillesDispo: [29, 30, 32],
      prix: 70,
      elements: {
        lacets: 'rouge',
        corps: 'bleu',
      },
    },
  ];

// 1. Faire une boucle sur tout le tableau et de log les chaussures une par une 

    chaussures.forEach(function(chaussure) {
        console.log(chaussure)
    })

// //CORRECTION
// chaussures.forEach((chaussure) => {
//   console.log(chaussure)
// })
    
// // 2. Log un tableau de toutes les Nikes

    // chaussures.forEach(function(chaussure) {
    //     if (chaussure.marque === "Nike") {
    //         console.log(chaussure)
    //     }
    // })

// CORRECTION 
let nikes = chaussures.filter((chaussure) => {
  return chaussure.marque === 'Nike'
})

console.log(nikes)

// // //   // 3. Log du prix des Vans "Old Skool"

//     chaussures.forEach(function(chaussure) {
//         if (chaussure.marque === "Vans" && chaussure.titre === "Old Skool") {
//             console.log(chaussure.prix)
//         }
//     })

//CORRECTION
chaussures
.filter(({marque, titre}) => marque === 'Vans' && titre === 'Old Skool')
.forEach(({prix}) => {
  console.log(prix)
})



// // //   // 4. Log un tableau de toutes les chaussures collector

    chaussures.forEach(function(chaussure) {
        if (chaussure.collector === true) {
            console.log(chaussure)
        }
    })

// // //   // 5. Log couleur lacets de la vans Sk8

//     chaussures.forEach(function (chaussure) {
//         if (chaussure.marque === "Vans" && chaussure.titre === "Sk8") {
//             console.log(chaussure.elements.lacets)
//         }
//     })

//CORRECTION
let sk8 = chaussures.find(({titre}) => titre === 'Sk8')
console.log(sk8.elements.lacets)


//   // 6. Changer la couleur de la vans Sk8 en violet et log la chaussure

//     chaussures.forEach(function(chaussure){
//       if (chaussure.marque === "Vans" && chaussure.titre === "Sk8") {
//         chaussure.elements.corps = 'violet'
//         console.log(chaussure)
//       }
//     })
  
//CORRECTION
let index = chaussures.findIndex (({titre}) => titre === 'Sk8');
chaussures[index].elements.lacets = 'violet'

let {
  elements : {lacets : lacets2},
} = chaussures.find(({titre}) => titre === 'Sk8')
console.log(lacets2)

//   // 7. Plus compliqué : Log le montant total de Toutes les Nikes

let total = nikes.reduce ((accumulator, {prix}) => {
  return accumulator + prix
}, 0)

let noms = nikes.reduce ((accumulator, chaussure) => {
  return accumulator + chaussure.titre + " "
}, "")
console.log(noms + total)

