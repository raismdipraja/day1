function searchWord(word, value){
   let wordLow = word.toLowerCase();
   let huruf = wordLow.split("");

   var cocok = false;

   for (let i = 0; i < huruf.length; i++) {
       if(word[i] === value){
           cocok = true
       }       
   }
   return cocok
}
console.log(searchWord("aku suka javascript", "k"));
console.log(searchWord("aku suka javascript", "z"));
console.log(searchWord("aku suka javascript", "u"));