const { addListener } = require('process');


/* ARRAY RELATED OPERATIONS */
function sortByKey(arr){
   let sorted = {}
   Object.keys(arr)
      .sort()
      .forEach(function (v, i) {
         sorted[v] = arr[v];
      });
   return sorted
}


/* STR RELATED OPERATIONS */
function strToWordArray(str){
   return str.split(' ')
}

function strToLetterArray(str){
   return str.split('')
}

function countEachChar(str){
   let charArray = {}
   let letters = strToLetterArray(str)
   letters.map((e) => (charArray.hasOwnProperty(e)) ? charArray[e] += 1 : charArray[e] = 1)
   return charArray
}

function countWordStartWith(letter, str){
   let result = 0
   let words = strToWordArray(str)
   words.map((e) => (e[0]===letter) ? result++ : null)
   return result
}

function countWordWithChars(n, data){
   let result = 0
   let words = strToWordArray(data)
   words.map((e) => (e.length===n) ? result++ : null)
   return result
}

function removeUpperCase(str){
   return str.replaceAll(/[A-Z]/g, "")
}

function noUpperCase(_removeUpperCase, str){
   if(_removeUpperCase){
      return removeUpperCase(str)
   }else{
      return str.toLowerCase()
   }
}

function firstAndLastLetterUppercase(str){
   str = str
      .split(" ")
      .map((e) => (e[0].toUpperCase()+e.slice(1, -1)+e[e.length-1].toUpperCase()))
      .join(" ")
      .replaceAll(/e|E/g, "")
   return str
}

/* PRINT FUNCTIONS */
function printFile(file){
   fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
         console.error(err)
         return;
      }
      console.log(data)
   });
}

function readFile(file, callback) {
   fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
         console.error(err)
         return;
      }
      if(data == ""){
         console.log("\File "+file+" is empty, no function called\n")
         return;
      }
      callback(data)
   })
}

function addLine(file, lineText){
   fs.appendFile(file, "\n"+lineText, function (err) {
      if (err) throw err;
      console.log('Line saved !');
   });
}

function tpReadInfos(data) {
   // console.log(data)
   let charCountResult = countEachChar(data)
   let sortedCharCount = sortByKey(charCountResult)
   let noUpperCaseData = noUpperCase(true, data)
   let lowerCaseData = noUpperCase(false, data)
   let startWithT = countWordStartWith('t', data)
   let word5char = countWordWithChars(5, data)
   let firstAndLastUpper = firstAndLastLetterUppercase(data)
   
   console.log("Compteur caractères :",sortedCharCount)
   console.log("Start with 't' : "+startWithT)
   console.log("Words with 5 letters : "+word5char)
   console.log("No upperCase : "+noUpperCaseData)
   console.log("lowercase : "+lowerCaseData)
   console.log("firstAndLastUpper : "+firstAndLastUpper)

}



function main(){
   readFile("./texte.txt", tpReadInfos)
   readFile("./texte_vide.txt", tpReadInfos)

   // console.log("File before : ")
   // printFile("./texte.txt")
   // addLine("./texte.txt", "Bonjour TEST Majuscules, coucou")
   // console.log("File after : ")
   // printFile("./texte.txt")

}

const fs = require('fs');
const { Console } = require('console');
main()