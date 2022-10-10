function sortByKey(arr){
   let sorted = {}
   Object.keys(arr)
      .sort()
      .forEach(function (v, i) {
         sorted[v] = arr[v];
      });
   return sorted
}

function toWordArray(data){
   return data.split(' ')
}

function toLetterArray(data){
   return data.split('')
}

function countChars(data){
   let charArray = {}
   let letters = toLetterArray(data)
   letters.forEach(ch => {
      if (charArray.hasOwnProperty(ch)) {
         charArray[ch] += 1;
      } else {
         charArray[ch] = 1;
      }
   })
   return charArray
}

function countWordStartWith(letter, data){
   let result = 0
   let words = toWordArray(data)
   words.forEach(word => {
      if(word[0] === letter) result++;
   })
   return result
}

function countWordWithChars(n, data){
   let result = 0
   let words = toWordArray(data)
   words.forEach(word => {
      if(word.length === n) result++;
   })
   return result
}



const fs = require('fs');
fs.readFile('./texte.txt', 'utf8', (err, data) => {
   if (err) {
      console.error(err);
      return;
   }

   let charCountResult = countChars(data)
   let sortedCharCount = sortByKey(charCountResult)
   let wordStartWithE = countWordStartWith('e', data)
   let words7letters = countWordWithChars(7, data)

   console.log("Compteur caractères :")
   console.log(sortedCharCount)
   console.log("Start with E : "+wordStartWithE)
   console.log("Words with 7 letters : "+words7letters)
});