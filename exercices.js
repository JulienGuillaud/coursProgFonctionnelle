// Tests fonction  pures

// 100% pure
function add(a, b) {
  return a + b;
}

// Presque pure car utilise une librairie externe
function toUpperCase(str) {
  return str.toUpperCase();
}
!
// La version 100% pure serait
function toUpperCasePure(str) {
  // Array with alphabet
  let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ""]
  let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ""]
  let result = ""
  for(let i = 0; i < str.length; i++) {
    // Search str[i] in lowerCase array with for loop
    for(let j = 0; j < lowerCase.length; j++) {
      if(str[i] === lowerCase[j]) {
        result += upperCase[j]
      }
    }
  }
  return result
}



/*
Fonction d'ordre supérieur :
Avec map et filter

  Exercice 1 : Liste des nombres de 1 à 10
    Les multiplier par 100
    Prendre leur racine cérrée
    Lister les nombres inférieurs à 50 au final
  Exercice 2 : Une chaîne de caractères de votre choix
    Passer chaque début de mot en majuscule
    Passer chaque fin de mot en majuscule
    Enlever toutes les lettres e ou E des mots
*/

// Exercice 1
let arr = [1,2,3,4,5,6,7,8,9,10]
arr = arr
.map(e => Math.sqrt(e*100))
.filter(e => e<50)

console.log(arr)

// Exercice 2
let str = "Bonjour je m'appelle julien GUILLAUD"
str = str
  .split(" ")
  .map((e) => (e[0].toUpperCase()+e.slice(1, -1)+e[e.length-1].toUpperCase()))
  .join(" ")
  .replaceAll(/e|E/g, "")
console.log(str)
