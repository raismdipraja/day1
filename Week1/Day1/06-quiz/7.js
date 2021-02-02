function deretSatu(k){
   let deret = "";
   let derets = "";
   
   let n = 1;

   for (let i = 1; i <= k; i++) {
       for(let j = 0; j < i; j++ ){
           derets+= n
       }
       deret += derets+","
       derets = "";
   }
   return deret
}
console.log(deretSatu(7));
