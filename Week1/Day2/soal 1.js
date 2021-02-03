let fruits = ["jeruk", "Mangga", "Jambu", "Durian", "Rambutan"];
let sayur = ["Kangkung", "Bayam", "Tomat", "Bawang", "Bayam"];

// a
fruits.push("Anggur","Banana","Sirsak");
console.log(fruits);

// b
fruits.pop();
console.log(fruits);

// c
fruits.splice(2,1, );
console.log(fruits);

//d
fruits.splice(2,3, );
console.log(fruits);

//e 
fruits.splice(2,0, "Rambutan","Bengkuang");
console.log(fruits);

// f 
fruits.splice(4,1,"nangka");
console.log(fruits);

//g
var gabung = fruits.concat(sayur);
console.log(gabung);

//h
gabung.reverse();
console.log(gabung);

//i
function sw(a,b){
    for (let i = 0; i < gabung.length; i++) {
        
        
    }
}