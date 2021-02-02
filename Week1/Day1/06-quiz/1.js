function sum(n){
 let angka = n.toString().split("");
 let total = 0;

 for (let i = 0; i < angka.length; i++) {
    total+= Number(angka[i])
 }
 return total
} 
console.log(sum(23457));
