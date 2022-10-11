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
   strToLetterArray(str).map((e) => (charArray.hasOwnProperty(e)) ? charArray[e] += 1 : charArray[e] = 1)
   return charArray
}

String.prototype.countWordStartWith = function(letter) {
   return countWordStartWith(letter, this)
}
function countWordStartWith(letter, str){
   return strToWordArray(str).filter((e) => e.charAt(0)===letter).length
}


String.prototype.countWordWithChars = function(n) {
   return countWordWithChars(n, this)
}
function countWordWithChars(n, str){
   return strToWordArray(str).filter((e) => e.length===n).length
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
   return str
      .split(" ")
      .map((e) => (!!e && e.charAt(0).toUpperCase()+e.slice(1, -1)+e[e.length-1].toUpperCase()))
      .join(" ")
      .replaceAll(/e|E/g, "")
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
         console.log("\n\nFile "+file+" is empty, no function called\n")
         return;
      }
      callback(data)
   })
}


class NewLine {
   constructor(lineValue){
      this.newLine = (!!lineValue) ? lineValue : ""
   }

   getText(){
      return this.newLine
   }

   setTextToLine(text){
      this.newLine = text
   }

   addTextToLine(text){
      this.newLine += text
   }

   toLowerCase(){
      this.newLine = noUpperCase(false, this.newLine)
   }

   removeUpperCase(){
      this.newLine = noUpperCase(true, this.newLine)
   }

   firstAndLastLetterUpper(){
      this.newLine = firstAndLastLetterUppercase(this.newLine)
   }

   save(file){
      fs.appendFile(file, "\n"+this.newLine, function (err) {
         if (err) throw err;
         console.log('Line saved !');
      });
   }
}

// function addLine(file, lineText){
//    fs.appendFile(file, "\n"+lineText, function (err) {
//       if (err) throw err;
//       console.log('Line saved !');
//    });
// }

function tpReadInfos(data) {
   // console.log(data)
   let charCountResult = countEachChar(data)
   let sortedCharCount = sortByKey(charCountResult)
   let noUpperCaseData = noUpperCase(true, data)
   let lowerCaseData = noUpperCase(false, data)
   let startWithT = countWordStartWith('t', data)
   let onProtoStartWith = data.countWordStartWith('t')
   let word5char = countWordWithChars(5, data)
   let onProtoWithNChars = data.countWordWithChars(5)
   let firstAndLastUpper = firstAndLastLetterUppercase(data)

   console.log("Compteur caractères : ",sortedCharCount)
   console.log("Start with 't' : "+startWithT)
   console.log("onProto start with 't' : "+onProtoStartWith)
   console.log("Words with 5 letters : "+word5char)
   console.log("onProto with 5 letters : "+onProtoWithNChars)
   console.log("\nNo upperCase :\n"+noUpperCaseData)
   console.log("\nlowercase :\n"+lowerCaseData)
   console.log("\nfirstAndLastUpper :\n"+firstAndLastUpper)
}

function tpWriteFile(){
   let newLine = new NewLine("Bonjour TEST nouvelle ligne")
   newLine.addTextToLine(" encore du texte sur la nouvelle ligne")
   newLine.toLowerCase()
   newLine.firstAndLastLetterUpper()
   newLine.removeUpperCase()
   newLine.save("./texte.txt")

   // addLine("./texte.txt", "Bonjour TEST Majuscules, coucou")
   console.log("File after : ")
   printFile("./texte.txt")
}

function main(){

   tpWriteFile()

   readFile("./texte.txt", tpReadInfos)
   readFile("./texte_vide.txt", tpReadInfos)
}

const fs = require('fs');
main()